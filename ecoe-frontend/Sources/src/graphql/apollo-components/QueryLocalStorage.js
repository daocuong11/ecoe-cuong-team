import React, { Component, Fragment } from "react";
import { ApolloConsumer, Query, withApollo } from "react-apollo";
import { SD_FO, SD_BO, MS } from "globalConstants/domainType";

import {
  updateJsonObject,
  getJsonObjectCover
} from "globalUtils/updateSearchTreeNode";

class SearchCriticalRP extends React.Component {
  client = this.props.client;
  domainType = null;
  productTypeIndex = 0;
  searchCriticals = null;
  searchCritical = null;

  constructor(props) {
    super(props);

    this.state = {
      page: this.page,
      getSearchCritical: this.getSearchCritical.bind(this),
      updateSearchCritical: this.updateSearchCritical.bind(this),
      updateproductType: this.updateproductType.bind(this),
      productTypeIndex: this.productTypeIndex
    };

  }

  componentWillMount() {
    this.domainType = localStorage.getItem("domainType");
  }

  updateproductType(productType) {
    localStorage.setItem("productType", productType)
    this.setState({ productTypeIndex: this.index });
    this.searchCriticals = JSON.parse(localStorage.getItem("searchCriticals"));
  }

  getSearchCritical(field) {
    this.searchCriticals = JSON.parse(localStorage.getItem("searchCriticals"));
    let index = localStorage.getItem("productType") === "PROJECT" ? 0 : 1;
    switch (this.domainType) {
      case SD_FO:
        this.searchCritical = this.searchCriticals[0][index];
        break;
      case SD_BO:
        this.searchCritical = this.searchCriticals[1][index];
        break;
      default:
        this.searchCritical = this.searchCriticals[2][index];
        break;
    }
    let result = getJsonObjectCover(this.searchCritical, field);
    return result;
  }

  updateSearchCritical(field, value, isObj) {
    updateJsonObject(this.searchCritical, field, value);
    let index = localStorage.getItem("productType") === "PROJECT" ? 0 : 1;
    switch (this.domainType) {
      case SD_FO:
        this.searchCriticals[0][index] = this.searchCritical;
        break;
      case SD_BO:
        this.searchCriticals[1][index] = this.searchCritical;
        break;
      default:
        this.searchCriticals[2][index] = this.searchCritical;
        break;
    }

    localStorage.setItem(
      "searchCriticals",
      JSON.stringify(this.searchCriticals)
    );
  }

  render() {
    return <Fragment>{this.props.render(this.state)}</Fragment>;
  }
}

const withSearchCritical = withApollo(SearchCriticalRP);

export default withSearchCritical;
