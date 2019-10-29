import gql from "graphql-tag";

export const GET_INVESTOR = gql`
query GET_INVESTOR{
    getInvestors{
      key: id,
      name,
    }
  }
`;