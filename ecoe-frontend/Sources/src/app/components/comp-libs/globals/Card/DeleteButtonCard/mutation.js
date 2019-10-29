import gql from "graphql-tag";
export const DELETE_PRODUCT = gql`
    mutation deleteProduct($id: Int){
        deleteProduct(id: $id)
    }
`;
