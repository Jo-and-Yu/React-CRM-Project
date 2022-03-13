const db = require('../../config/db');

const crud = {
    customerList: (req, res) => {
        db.query(
            "SELECT * FROM customer where isDeleted = 0",
            (err, rows, fields) => {
                res.send(rows);}
        )
    },
    customerAdd: (req,res) => {
        let sql = 'INSERT INTO customer VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(), 0)';
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
    
        db.query(sql, params,
             (err, rows, fields) => {
                  res.send({message: 'Add success'});
                  console.log(err);
             }
        );
    },
    customerDelete: (req, res)=> {
        let sql = 'UPDATE customer SET isDeleted = 1 WHERE id = ?';
        let params = [req.params.id];
        console.log(params)
        db.query(sql, params, 
             (err, rows, field) => {
                  res.send({message: '삭제되었습니다.'});
                  console.log(err);
             }
        )
    }
};

const login = {
    register: (req, res) => {
        let sql = 'INSERT INTO login VALUES (?, ?)';
        let id = req.body.username;
        let password = req.body.password;
        console.log(id,password)
        let params = [id, password]
    
        db.query(sql, params,
            (err, rows, fields) => {
                res.send({message: 'Add success'});
                console.log(err);
            }    
        )
    },
    login: (req, res) => {
        let id = req.body.username;
        let password = req.body.password;
        console.log(id,password)
        
    }
}

module.exports = {
    crud,
    login
}