const { ApolloServer } = require('apollo-server');
const { MONGODB } = require('./config.js');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/TypeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
});

mongoose
    .connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen({ port: 5001 });
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    });
