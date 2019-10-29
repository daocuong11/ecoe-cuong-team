import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_PRODUCT_TYPE = gql`query {
    productType,
    searchText
  }
  `;
const withProductType = (WrappedComponent) => {
    return class ProductTypeGQL extends Component {        
        render() {            
            return (
                <Query query={GET_PRODUCT_TYPE}>{
                    ({ loading, error, data }) => {                   
                        return (
                            <Fragment>
                                <WrappedComponent productType={data.productType} searchText={data.searchText} {...this.props} />
                            </Fragment>
    
                        )
                    }
                }
                </Query>
            )
        }
    }
}


export default withProductType;
