const { gql } = require('apollo-server');

const transactionTypeDefs = gql`
    type Transaction {
        id: String!
        userIdOrigin: String!
        userIdDestiny: String!
        value: Int!
        date: String!
    }
    
    input TransactionInput {
        userIdOrigin: String!
        userIdDestiny: String!
        value: Int
    }

    extend type Query {
        transactionsByUserId(userId: String!): [Transaction]
    }
    
    type Mutation {
        createTransaction(transaction: TransactionInput!): Transaction
    }
`;

module.exports = transactionTypeDefs; 
