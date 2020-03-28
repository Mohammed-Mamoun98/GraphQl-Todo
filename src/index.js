const { ApolloServer, gql } = require("apollo-server");
const cors = require("cors");
const resolvers = require("./graphQl/resolvers/index");
require("../db/db");
const { typeDefs } = require("./graphQl/typeDefs/TypeDefs");

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`server is up at ${url}`));
