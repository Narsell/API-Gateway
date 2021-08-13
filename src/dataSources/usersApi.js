const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class UsersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.users_api_url;
    }

    async authenticate(credentials) {
        return await this.post(`/token/`, { ... credentials });
    }

    async refreshToken(token) {
        return await this.post(`/token/refresh/`, { ... token});
    }
}

module.exports = UsersAPI;