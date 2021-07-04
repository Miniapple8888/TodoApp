const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const corsOptions = {
origin: '*',
optionsSuccessStatus: 200,
//credentials: true
}
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Connect to the database
var conn = require('./db');
console.log(conn);

// Main routing
require('./routes')(app);

// Running app
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log("Server is running.");
});

module.exports = {app}

