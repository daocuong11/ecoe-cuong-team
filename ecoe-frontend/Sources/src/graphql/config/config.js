import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { ApolloClient, onResetStore } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { MS, SD_BO, PROJECT } from "constants/domainType";
import {LG_L} from "constants/resolutions";
import gql from "graphql-tag";
const dotenv = require('dotenv');


const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const apolloLink = ApolloLink.from([
  errorLink,
  new HttpLink({
    uri: "http://localhost:4000/graphql"
    
    //uri:"http://172.16.100.99:4000/graphql"

    // headers: {
    //   authorization: localStorage.getItem('token'),
    //   'client-name': 'Space Explorer [web]',
    //   'client-version': '1.0.0',
    // },
  })
]);

const cache = new InMemoryCache();

const data = {
  domainType: SD_BO,
  domainName: "ecoe",
  notification: "Message",
  viewMode: 1,
  checkList: [],
  productType: localStorage.getItem("productType") || PROJECT,
  searchText:"",
  resolution:LG_L
};

cache.writeData({ data });

export const client = new ApolloClient({
  link: apolloLink,
  cache: cache,
  addTypename: false
});

export const searchCriticals = data;

//client.onResetStore(() => cache.writeData({ data }));
