const { QueryResolver } = require("./Query");
const { MutationResolver } = require("./Mutation");

const resolvers = {
  ...QueryResolver,
  ...MutationResolver
};

module.exports = resolvers;
