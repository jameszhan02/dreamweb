const mysql = require('mysql2');

// since we dont have an online database(just check if DB query is update?)
var pool = mysql.createPool({
    host: process.env.DB_HOST, //127.0.0.1 by mySQL default
    user: process.env.DB_USER, //root
    password: process.env.DB_PASSWORD, //dreamweb2020
    database: process.env.DB_DATABASE, //cndb_main
    waitForConnections: true, // Default value.
    queueLimit: 0, // Unlimited - default value.
  });
  
  pool.on('connection', (connection) => {
    console.log('Connected!');
  });
  
  pool.on('error', (error) => {
    console.log(`error! ${error}`);
  });
  
  // pool.end();
  
  //Func for thead DB thread safe
  const doTransaction = async (callBack) => {
    const conn = await pool.getConnection();
    try {
      await conn.beginTransaction();
    } catch (e) {
      conn.release();
      throw e;
    }
    try {
      await callBack(conn);
      await conn.commit();
      conn.release();
    } catch (e) {
      try {
        await conn.rollback();
        conn.release();
        throw e;
      } catch (e) {
        conn.release();
        throw e;
      }
    }
  };
  
  module.exports = { pool, doTransaction };
  