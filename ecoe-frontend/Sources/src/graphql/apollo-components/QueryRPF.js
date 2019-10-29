import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
// variables ={this.props.variables}
const QueryRPF = (props) => {
  return <Query query={props.query} fetchPolicy='cache-and-network'>
    {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Loading...</p>

        return (
          <Fragment>
            {props.render(data)}
          </Fragment>
        )
      }

    }
  </Query>

}

export default QueryRPF;