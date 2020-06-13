const { ApolloServer } = require('apollo-server');

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers")
const mongoose = require('mongoose');
require('dotenv').config()

mongoose
.connect('mongodb+srv://Ali:Pakistan786@cluster0-dganh.mongodb.net/GeoPins?retryWrites=true&w=majority', {
    useUnifiedTopology: true
})
.then(() => console.log('DB Connected'))
// .catch(err => console.log(err))

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then(({ url }) => {
    console.log(`server listening on port ${url}`)
})
