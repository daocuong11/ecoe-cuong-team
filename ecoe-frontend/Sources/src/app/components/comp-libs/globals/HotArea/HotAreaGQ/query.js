import gql from "graphql-tag";

export const GET_HOTAREA = gql`
{
  getHotArea{
    name,
    total
  }
}
`;