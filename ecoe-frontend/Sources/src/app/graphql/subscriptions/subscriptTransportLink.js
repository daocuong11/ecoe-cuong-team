import {WebSocketLink} from "apollo-link-ws";
import {HttpLink} from 'apollo-link-http';
import { getMainDefinition } from "apollo-utilities";
import { split } from "apollo-link";

const httpLink= new HttpLink({
    uri:'http://localhost:3000/graphql'
});

const wsLink = new WebSocketLink({
    uri:`ws://localhost:4000/`,
    options:{
        reconnect: true
    }
});
//split link
const link = split(
    ({query})=>{
        const {kind, operation}= getMainDefinition(query);
        return kind === 'OperationDefinition' && operation ==='subscription' ;
    },
    wsLink,
    httpLink
);
