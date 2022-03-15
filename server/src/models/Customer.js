const CustomerStorage = require('./CustomerStorage')

class Customer {
    constructor(body) {
      this.body = body;
    }
    async CustomerShow() {
        try {
            const response = await CustomerStorage.show();
            return response;
        } catch (err) {
            return { success: false, err};
        }
    }

    async CustomerAdd() {
        const customer = this.body;
        try {
            const response = await CustomerStorage.add(customer);
            return response;
        } catch (err) {
            return { success: false, err};
        }
    }

    async CustomerDelete() {
        const customer = this.body;
        try {
            const response = await CustomerStorage.delete(customer);
            return response;
        } catch (err) {
            return { success: false, err};
        }
    }

}

module.exports = Customer;