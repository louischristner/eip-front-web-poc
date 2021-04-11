import http from '../http-common';

type AccountData = {
    email: string;
    password: string;
};

class Account {
    login(data: AccountData) {
        return http.post('/login', data);
    }

    register(data: AccountData) {
        return http.post('register', data);
    }
}

export default new Account();
