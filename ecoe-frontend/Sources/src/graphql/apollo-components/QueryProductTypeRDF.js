import React, { Fragment } from "react";
import { Query, withApollo } from "react-apollo";
import gql from "graphql-tag";

const queryPage = gql`query {
  productType
}`;

class QueryProductTypeRDF extends React.Component {


  render() {
    return (
      <Query query={queryPage} >
        {({ data }) => {
          return (<Fragment>
            {this.props.render(data)}
          </Fragment>)
        }}
      </Query>);
  }
}

export default QueryProductTypeRDF;