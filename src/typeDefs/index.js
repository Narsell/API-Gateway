//Se llama al typedef (esquema) de cada submodulo
const accountTypeDefs = require('./accountsTypeDef');
const transacctionTypeDefs = require('./transactionsTypeDef');
const usersTypeDefs = require('./usersTypeDef');

//Se unen
const schemasArrays = [accountTypeDefs, transacctionTypeDefs, usersTypeDefs];

//Se exportan
module.exports = schemasArrays; 