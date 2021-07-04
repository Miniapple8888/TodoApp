console.log('Version:' + process.version);
var mysql = require('mysql');

/*
var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'todoApp'
});

pool.getConnection(function(err, connection) {
    connection.query("SELECT * FROM categories", function(error, results) {
        if (error) throw error;
        console.log("yup");
        console.log(results);
    });
    connection.release();
})*/

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'foo',
    password: 'bar',
    database: 'todoApp',
    debug: true
});


connection.query('SELECT * FROM categories', function (err, res, fields) {
    console.log("please print something!")
    if (err) console.log(err);
    console.log(res);
});

// async function getCategory() {
//     let rows = await connection.query('SELECT * FROM categories');
//     console.log(rows);
// }
// getCategory();

module.exports = {connection};