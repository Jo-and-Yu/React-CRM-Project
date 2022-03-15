const db = require('../config/db')

class CustomerStorage {
    static async show() {
        return new Promise((resolve, reject) => {
            db.query(
            "SELECT * FROM customer where isDeleted = 0",
            (err, rows, fields) => {
                if(err) reject(`${err}`)
                else resolve(rows)
                // res.send(rows);
            }
        )
        })
    }


    static async add(customer) {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO customer VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(), 0)';
            let 이름 = customer.이름;
            let 생년월일 = customer.생년월일;
            let 학교 = customer.학교;
            let 학년 = customer.학년;
            let 개인전화번호 = customer.개인전화번호;
            let 부모님전화번호 = customer.부모님전화번호;
            let 주소 = customer.주소;
            let 등록일자 = customer.등록일자;
            let 학생구분 = customer.학생구분;
            let 특이사항 = customer.특이사항;
            let params = [이름, 생년월일, 학교, 학년, 개인전화번호, 부모님전화번호, 주소, 등록일자, 학생구분, 특이사항];
            db.query(sql, params,
                (err, rows, fields) => {
                    if (err) reject(`${err}`);
                    else resolve({success: true});
                }
            );
        })
    }

    static async delete(customer) {
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE customer SET isDeleted = 1 WHERE id = ?';
            let params = [customer.id];
            console.log(params)
            db.query(sql, params, 
                (err, rows, field) => {
                    if (err) reject(`${err}`);
                    else resolve({success: true});
                }
            )
        })
    }
}

module.exports = CustomerStorage;