const fs = require('fs');
const express = require('express');

const app = express();
const mysql =require('mysql');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const port = process.env.PORT || 5001;
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);


const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

app.get('/customer', (req, res) => {
    connection.query(
        "select * from customer",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
})

app.listen(port, () => console.log(`Listening on port ${port}`))