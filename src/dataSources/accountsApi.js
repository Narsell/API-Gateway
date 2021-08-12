const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class AccountAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.account_api_url;    
  }

  async accountByUserId(userId){
    return await this.get(`/accounts/${userId}`);    
  }

  async createTransaction(transaction){
    const transaction = new Object(transaction);
    return await this.post('/transactions', transaction);    
  }

  async transactionsByUserId(userId){
    return await this.get(`/transactions/${userId}`);
    
  }
}

module.exports = AccountAPI;