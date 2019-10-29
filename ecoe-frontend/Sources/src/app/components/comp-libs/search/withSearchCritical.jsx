import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import * as _ from 'lodash';
import { QUERY_SEARCH_CRITICAL } from "schemas/products/searchCritical";
import { PROJECT, SD_BO, SD_FO, MS } from "constants/domainType";

const withSearchCritical = (WrappedComponent) => {

    return class extends Component {
        objSearch={};
        constructor(props) {
            super(props);            
        }
        
        initial=()=>{
            
            let productType = this.props.productType;
            let domainType = localStorage.getItem("domainType");
            let searchCriticals = JSON.parse(localStorage.getItem("searchCriticals"));

            let index = productType === PROJECT ? 0 : 1;
            switch (domainType) {
                case SD_FO:
                    this.objSearch = searchCriticals[0][index]
                    break;
                case SD_BO:
                    this.objSearch = searchCriticals[1][index]
                    break;
                default:
                    this.objSearch = searchCriticals[2][index]
                    break;
            }

            this.objSearch.productType = productType;
            this.objSearch.searchText = this.props.searchText;
            this.objSearch.pageSize = 10;
        }
        loadMore = (fetchMore) => {
            this.objSearch.pagination.pageIndex = this.objSearch.pagination.pageIndex +1;
            let objSearch = JSON.stringify(this.objSearch);

            fetchMore({
                variables :{ objSearch },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return Object.assign({}, prev, { 
                        searchCritical:{
                            ...prev.searchCritical,products: [...prev.searchCritical.products, ...fetchMoreResult.searchCritical.products]
                        }                                
                    });                   
                }
            });
        };

        render() 
        {
            this.initial();
            let objSearch = JSON.stringify(this.objSearch);
            return (
                <Query query={QUERY_SEARCH_CRITICAL} variables={{ objSearch }} fetchPolicy={"network-only"}>
                    {
                        ({ loading, error, data, fetchMore }) => {
                            if (loading ) return <p>Loading...</p>
                            if (error) return <p>Error...</p>                           
                            return (                                
                                <WrappedComponent totalRecords= {_.get(data.searchCritical,'totalRecord',0)} 
                                        data={_.get(data.searchCritical, 'products', [])}                                         
                                        loadMore={() => this.loadMore(fetchMore)} {...this.props} />
                            )
                        }

                    }
                </Query>
            )
        }
    }

   
};

export default withSearchCritical;