const db = require('../config/db');

class UserStorage {
    static getUserInfo(id) {

        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM login WHERE id = ?;';
            let params = [id];

            db.query(sql, params,
                (err, row, fields) => {
                    if (err) reject(`${err}`);
                    else {
                       //해당 id의 모든 정보(id, password) 보내줌
                        resolve(row[0]);
                    }
                })

        });

    };

    static async save(userInfo) {

        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO login VALUES (?, ?)';
            let id = userInfo.id;
            let password = userInfo.password;
            console.log(id,password)
            let params = [id, password]
        
            db.query(sql, params,
                (err, rows, fields) => {
                    if (err) reject(`${err}`);
                    else resolve({message: 'Add success'});
                }    
            )
        });

    };
}

module.exports = UserStorage;