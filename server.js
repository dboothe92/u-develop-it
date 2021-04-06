const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT|| 3001;
const app = express();

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Connect to db
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root', 
        password: 'DanJohnBoothe1!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

//View entire table
//db.query(`SELECT * FROM candidates`, (err, rows) => {
//    console.log(rows);
//})

//Find candidate based on id
//db.query(`SELECT * FROM candidates WHERE id = 6`, (err, row) => {
//    if (err) {
//        console.log(err);
//    }
//    console.log(row);
//});

//Delete candidate based on id
//db.query(`DELETE FROM candidates WHERE id = ?`, 1,  (err, result) => {
//    if(err) {
//        console.log(err);
//    }
//    console.log(result);
//});

//Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
                VALUES (?, ?, ?, ?)`;

const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

//Default response
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server now running on port ${PORT}`);
});
