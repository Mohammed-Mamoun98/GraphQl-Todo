const { gql } = require("apollo-server");
const { Query } = require("./Query");
const { Mutation } = require("./Mutation");
const { types } = require("./types/index");

const typeDefs = gql`
  ${types}
  ${Query}
  ${Mutation}
`;

module.exports = { typeDefs };
