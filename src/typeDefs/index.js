//Se llama al typedef (esquema) de cada submodulo
const accountTypeDefs = require('./accountsTypeDef');
const transactionTypeDefs = require('./transactionsTypeDef');
const usersTypeDefs = require('./usersTypeDef');

//Se unen
const schemasArrays = [accountTypeDefs, transactionTypeDefs, usersTypeDefs];

//Se exportan
module.exports = schemasArrays; 