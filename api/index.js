require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

//routes
const tester = require('./routes/dbTester');


//CORS
app.use(cors());
// to support JSON-encoded bodies
app.use(bodyParser.json()); 

app.get('/', function (req, res) {
    res.send('Hello World');
 });

//test db con
app.post('/', tester.listAllMember);


const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`listening ${port}`));