"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const area_1 = require("../server/area");
const { merge } = require("lodash");
const { brokerTypedef, brokerResolver } = require('./broker');
const { investorTypedef, investorResolver } = require('./investor');
const { productTypedef, productResolver } = require('./product');
const { searchCriticalTypedef, searchCriticalResolver } = require('./searchCritical');
const { areaTypedef, areaResolver } = require('./area');
const { projectDetailTypedef, projectDetailResolver } = require('./projectDetail');
const enumDeftype = require('./enum');
const { makeExecutableSchema } = require('apollo-server');
const GraphQLJSON = require('graphql-type-json');
const ProductsAPI = require('../server/products');
const Query = `
  type Query {
    _empty: String
  }

  type Mutation{
    _empty: String
  }

  scalar JSON
`;
const resolvers = {
    Query: {},
    Mutation: {},
    JSON: GraphQLJSON
};
exports.schema = makeExecutableSchema({
    typeDefs: [Query, brokerTypedef, investorTypedef, productTypedef, searchCriticalTypedef, areaTypedef, enumDeftype, projectDetailTypedef],
    resolvers: merge(resolvers, brokerResolver, investorResolver, productResolver, searchCriticalResolver, areaResolver, projectDetailResolver),
});
exports.dataSources = () => {
    return {
        productsAPI: new ProductsAPI(),
        areaAPI: new area_1.areaAPI(),
    };
};
