import gql from "graphql-tag";

export const GET_HIGHLIGHT = gql`
{
  getHighlight{
    name,
    total
  }
}
`;