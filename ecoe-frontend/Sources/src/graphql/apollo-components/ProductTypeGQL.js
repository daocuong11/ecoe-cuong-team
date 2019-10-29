import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { homeSearchCritical } from "globalConstants/productSearchCritical";
import { HOUSE } from "globalConstants/domainType";
import {QUERY_SEARCH_CRITICAL} from "schemas/products/searchCritical";

const GET_PRODUCT_TYPE = gql`query {
    productType 
  }
  `;

class ProductTypeGQL extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let isHomePage = this.props.isHomePage;
        let category = this.props.category;
        return (

            <Query query={GET_PRODUCT_TYPE}>{
                ({ loading, error, data }) => {
                    let objSearch;
                    let productType = data.productType;
                    if (isHomePage) {
                        objSearch = homeSearchCritical;
                        objSearch.category = category;
                        objSearch.productType = productType;
                        objSearch.pageSize = productType === HOUSE?6: 4;
                        
                    } else {

                    }
                    objSearch = JSON.stringify(objSearch);                   
                    return (
                        <Query query={QUERY_SEARCH_CRITICAL} variables={{ objSearch }} fetchPolicy={"network-only"}>
                            {
                                ({ loading, error, data }) => {
                                    if (loading) return <p>Loading...</p>
                                    if (error) return <p>Error...</p>
                                    data.productType = productType;
                                    return (
                                        <Fragment>
                                            {this.props.render(data)}
                                        </Fragment>
                                    )
                                }

                            }
                        </Query>
                    )
                }
            }
            </Query>
        )
    }
}

export default ProductTypeGQL;
