// 모듈
const dotenv = require('dotenv');
const mysql =require('mysql');

dotenv.config({path: '../.env', encoding: 'utf8'});

// database 연결
const db = mysql.createConnection({
    host: process.env.REACT_APP_DB_HOST,
    user: process.env.REACT_APP_DB_USER,
    password: process.env.REACT_APP_DB_PSWORD,
    database: process.env.REACT_APP_DB_DATABASE,
});

db.connect();

module.exports = db;

