import gql from "graphql-tag";
export const UPDATE_PRODUCT_ISRECEIVE = gql`
    mutation updateProductIsReceive($id: Int, $isReceive: Boolean){
        updateProductIsReceive(id: $id, isReceive: $isReceive){
            id,
            isReceive
        }
    }
`;
