const resolvers = {
  Query: {
    hello: (_, args) => `hello ${args.name}`,
    getTodos: () => [{ title: "hello" }],
    addTodo: (_, { todo: { title, completed = false } }) => ({
      title,
      completed
    })
  }
};

module.exports = resolvers;
