import gql from "graphql-tag";
export const UPDATE_PRODUCT_ISENABLE = gql`
    mutation updateProductIsEnable($id: Int, $isEnable: Boolean){
        updateProductIsEnable(id: $id, isEnable: $isEnable){
            id,
            isEnable
        }
    }
`;
