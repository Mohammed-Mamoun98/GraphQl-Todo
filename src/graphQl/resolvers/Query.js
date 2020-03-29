const { todos } = require("../../data/dummy");

const QueryResolver = {
  Query: {
    hello: (_, args) => `hello ${args.name}`,
    getTodos: () => todos
  }
};

module.exports = { QueryResolver };
