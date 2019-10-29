import gql from "graphql-tag";
export const UPDATE_PRODUCT_ISSHARING = gql`
    mutation updateProductIsSharing($id: Int, $isSharing: Boolean){
        updateProductIsSharing(id: $id, isSharing: $isSharing){
            id,
            isSharing
        }
    }
`;
