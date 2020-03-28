const { gql } = require("apollo-server");
const { Query } = require("./Query");

const typeDefs = gql`
  ${Query}
`;

module.exports = { typeDefs };
