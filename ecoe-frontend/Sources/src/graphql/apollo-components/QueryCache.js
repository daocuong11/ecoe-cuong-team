import React, { Component, Fragment } from "react";
import { ApolloConsumer, Query, withApollo } from "react-apollo";
import { FO, BO, MS } from "globalConstants/page";
import gql from "graphql-tag";
import { updatePropOfObject, updateValueOfObject, getPropOfObject } from "globalUtils/updateSearchTreeNode";

const query = gql`query {
  searchCriticals {
    freeText,
    productType,
    commonSearch {
      area {
        wards,
        districts,
        cities,
        price
        { min, 
          max 
        },
        status,
        author
      }
    },
    advanceSearch {
      investors,
      acreage { 
        min, 
        max 
      },
      beds,
      baths,
      directions,
      juridical
    },
    sectionSearch {
      type
    },
    orderBy {
      field,
      isDesc
    },
    pagination {
      pageIndex,
      pageSize
    }
  }
}
`;

const queryPage = gql`query {
  currentDomain
}`;


class searchCriticalRP extends React.Component {
  client = this.props.client;
  page = null;
  searchCriticals = null;
  searchCritical = null;

  constructor(props) {
    super(props);
    this.state = {
      page: this.page,
      getSearchCritical: this.getSearchCritical.bind(this),
      updateSearchCritical: this.updateSearchCritical.bind(this)
    }
  }

  componentWillMount() {
    this.page = this.client.readQuery({ query: queryPage }).currentDomain;
  }

  getSearchCritical(field) {
    this.searchCriticals = this.client.readQuery({ query }).searchCriticals;

    switch (this.page) {
      case FO:
        this.searchCritical = this.searchCriticals[0];
        break;
      case BO:
        this.searchCritical = this.searchCriticals[1];
        break;
      default:
        this.searchCritical = this.searchCriticals[2];
        break;
    }

    return getPropOfObject(this.searchCritical, field);
  }

  updateSearchCritical(field, value, isObj) {
    if (isObj)
      updateValueOfObject(field, value)
    else
      updatePropOfObject(this.searchCritical, field, value);

    switch (this.page) {
      case FO:
        this.searchCriticals[0] = this.searchCritical;
        break;
      case BO:
        this.searchCriticals[1] = this.searchCritical;
        break;
      default:
        this.searchCriticals[2] = this.searchCritical;
        break;
    }

    // this.client.writeQuery({
    //   query,
    //   data: {
    //     searchCriticals: this.searchCriticals
    //   }
    // })

    this.client.writeData({
      data: {
        searchCriticals: this.searchCriticals
      }
    })
  }

  render() {
    this.getSearchCritical();
    return (<Fragment>
      {this.props.render(this.state)}
    </Fragment>);
  }
}

const withSearchCritical = withApollo(searchCriticalRP);

export default withSearchCritical;