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

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

//Default response
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server now running on port ${PORT}`);
});
