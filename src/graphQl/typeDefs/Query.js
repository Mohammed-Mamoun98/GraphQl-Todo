const { getTodos } = require("./queries/getTodos");
const { addTodo } = require("./queries/addTodo");
const { Todo } = require("./types/Todo");
const { TodoInput } = require("./types/todoInput");
const { types } = require("./types/index");

//first line is for all types
const Query = `
${types}
  type Query {
    hello(name: String!): String!
    ${getTodos}
    ${addTodo}
  }
`;
module.exports = { Query };
