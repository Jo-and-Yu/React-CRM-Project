const fs = require('fs');
const express = require('express');

const app = express();
const mysql =require('mysql');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

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

app.post('/customer', (req,res) => {
    let sql = 'INSERT INTO customer VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(), 0)';
    console.log(req.body)
    console.log(req.body.이름)
    let 이름 = req.body.이름;
    let 생년월일 = req.body.생년월일;
    let 학교 = req.body.학교;
    let 학년 = req.body.학년;
    let 개인전화번호 = req.body.개인전화번호;
    let 부모님전화번호 = req.body.부모님전화번호;
    let 주소 = req.body.주소;
    let 등록일자 = req.body.등록일자;
    let 학생구분 = req.body.학생구분;
    let 특이사항 = req.body.특이사항;

    let params = [이름, 생년월일, 학교, 학년, 개인전화번호, 부모님전화번호, 주소, 등록일자, 학생구분, 특이사항];

    connection.query(sql, params,
         (err, rows, fields) => {
              res.send({message: 'Add success'});
              console.log(err);
         }
    );
});

app.delete('/customer/:id', (req, res)=> {
    let sql = 'UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?';
    let params = [req.params.id];
    connection.query(sql, params, 
         (err, rows, field) => {
              res.send(rows);
         }
    )
});

app.listen(port, () => console.log(`Listening on port ${port}`))