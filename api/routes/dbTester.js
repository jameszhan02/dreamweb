const {pool} = require("../db/mysql");

const listQuery = `
SELECT 
    full_name,
    position
FROM
    team_member
`;

const listAllMember = (req, res) => {
    pool.query(listQuery, (err, members) => {
        if (err) return res.status(500).send('UNKNOWN ERROR!');
        return res.status(200).send(members);
      });
};

module.exports = {
    listAllMember
  };
  