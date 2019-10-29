import React, { Component, Fragment } from "react";
import { Query, withApollo } from "react-apollo";
import gql from "graphql-tag";

const querySearchCritial = gql`
query searchCritical($objSearch:String) {
  searchCritical(objSearch: $objSearch) {
    id,
    domainType,
    productType,
    isOwner,
    userId,
    isECOE,
    address,
    name,
    images{
      src,
      alt
    },
    utilities{
      beds,
      baths,
      areas,
      direction,
      balcons
    },
    basePrice,
    totalPrice,
    commission,
    status,
    contactPhone,
    likes,
    views,
    shareSocials,    
    numberOfUnits,
    projectArea,
    scale,    
    model,  
    isHightLight,
    broker {
      id
    },
    isEnable,
    isSharing,
    isReceive      
  }
}`;

class SearchProductRPF extends React.Component {
  render() {
    let objSearch = this.props.objSearch;
    let productType = this.props.productType;
    return (<Query query={querySearchCritial} variables={{ objSearch }}>
      {({ data }) => {
        
        console.log("productType",productType);
        return (
        <Fragment>
          {this.props.render(this.state)}
        </Fragment>);
      }}
    </Query>);
  }
}

export default SearchProductRPF;