const db = require('../../config/db');
const Customer = require('../../models/Customer')
const crud = {
    customerShow: (req, res) => {
        const response = await customer.CustomerShow();
        return res.send(response)
    },
    customerAdd: async (req,res) => {
        const customer = new Customer(req.body);
        const response = await customer.CustomerAdd();
        console.log(response)
        return res.json(response)
    },
    customerDelete: async (req, res) => {
        const customer = new Customer(req.params);
        const response = await customer.CustomerDelete();
        console.log(response)
        return res.json(response)
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