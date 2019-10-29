import React, { Component, Fragment } from "react";

import { Query } from "react-apollo";
import { homeSearchCritical } from "globalConstants/productSearchCritical";
import { HOUSE } from "globalConstants/domainType";
import { QUERY_SEARCH_CRITICAL } from "schemas/products/searchCritical";
import withProductType from "./withProductType";


class CategorySearch extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      let isHomePage = this.props.isHomePage;
      let category = this.props.category;
     
        let objSearch;
        let productType = this.props.productType;
        if (isHomePage) {
          objSearch = homeSearchCritical;
          objSearch.category = category;
          objSearch.productType = productType;
          objSearch.pageSize = productType === HOUSE ? 6 : 4;
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


export default withProductType(CategorySearch);
