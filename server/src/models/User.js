const UserStorage = require("./UserStorage");

class User {
    //파라미터로 req.body를 body로 받아옴
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        try {
            //user => client가 입력한 id와 그에 맞는 password 담겨있음
            const user = await UserStorage.getUserInfo(client.id);
            
            // 1. client가 입력한 id가 존재여부 확인
            if (user) {
                //2. client가 입력한 id와 password가 user의 id와 password 일치여부 확인
                if(user.id === client.id && user.password === client.password)
                    return { message: '로그인 성공', success: true };

                return { message: '비밀번호가 틀렸습니다.', success: false };
            }
            // client가 입력한 id가 없어서 user = undefined
            return { message: '존재하지 않는 아이디입니다.', success: false }
        } catch (err) {

            return { err, success: false }
        }
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { err, success: false }
        }
    }
}

module.exports = User;