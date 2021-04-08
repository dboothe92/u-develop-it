const mysql = require('mysql2');

//Connect to db
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root', 
        password: 'Batman5562',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;