require('dotenv-flow').config({
  node_env: process.env.NODE_ENV || 'dev'
});

import { schema, dataSources } from './graphql';

const { ApolloServer } = require('apollo-server');
const server = new ApolloServer({
  schema,
  dataSources,
  cacheControl: {
    defaultMaxAge: 5,
    calculateHttpHeaders: false
  },
  engine: false
});

server.listen().then(
  ({ url }) => {
    console.log(`Server ready at ${url}`);
  }
);