const { todos } = require("../../data/dummy");
const MutationResolver = {
  Mutation: {
    addTodo: (
      _,
      {
        todo: { title, completed = false, id = Math.floor(Math.random() * 100) }
      }
    ) => {
      const newArr = todos.push({ title, completed, id });
      return todos;
    }
  }
};

module.exports = { MutationResolver };
