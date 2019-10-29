"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv-flow').config({
    node_env: process.env.NODE_ENV || 'dev'
});
const graphql_1 = require("./graphql");
const { ApolloServer } = require('apollo-server');
const server = new ApolloServer({
    schema: graphql_1.schema,
    dataSources: graphql_1.dataSources,
    cacheControl: {
        defaultMaxAge: 5,
        calculateHttpHeaders: false
    },
    engine: false
});
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
