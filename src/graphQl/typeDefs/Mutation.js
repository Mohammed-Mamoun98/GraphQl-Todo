const { addTodo } = require("../typeDefs/mutations/addTodo");

const Mutation = `
type Mutation{
${addTodo}
}

`;

module.exports = { Mutation };
