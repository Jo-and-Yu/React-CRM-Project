const Customer = require('../../models/Customer')
const User = require('../../models/User');

const crud = {
    customerShow: async (req, res) => {
        const customer = new Customer();
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
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        console.log(response);

        return res.json(response);
    },
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();

        return res.json(response);
    }
}

module.exports = {
    crud,
    login
}