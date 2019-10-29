import gql from "graphql-tag";
import {
    GraphQLInt,
    GraphQLObjectType,
    
  } from 'graphql';

  const ProductSearchCritical = new GraphQLObjectType({
    name: 'search',
    description: 'search definition',
    fields: () => ({
      test: {
        type: GraphQLInt,
      },
      
    }),
  });

  export default ProductSearchCritical;