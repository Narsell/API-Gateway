const { gql } = require('apollo-server');

const transacctionTypeDefs = gql`
    type Transacction {
        id: String!
        userIdOrigin: String!
        userIdDestiny: String!
        value: Int!
        date: String!
    }
    
    input TransacctionInput {
        userIdOrigin: String!
        userIdDestiny: String!
        value: Int
    }

    type Query {
        transacctionsByUserId(userId: String!): [Transacction]
    }
    
    type Mutation {
        createTransacction(transaction: TransacctionInput!): Transacction
    }
`;

module.exports = transacctionTypeDefs; 
