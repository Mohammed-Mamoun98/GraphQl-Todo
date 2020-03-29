const { getTodos } = require("./queries/getTodos");

//first line is for all types
const Query = `
  type Query {
    hello(name: String!): String!
    ${getTodos}
  }
`;
module.exports = { Query };
