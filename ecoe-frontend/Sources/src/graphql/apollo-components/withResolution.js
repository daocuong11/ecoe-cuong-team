import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_RESOLTION = gql`query {
    resolution
  }
  `;
const withResolution = (WrappedComponent) => {
    return class ProductTypeGQL extends Component {        
        render() {            
            return (
                <Query query={GET_RESOLTION}>{
                    ({ loading, error, data }) => {                   
                        return (
                            <Fragment>
                                <WrappedComponent resolution={data.resolution} {...this.props} />
                            </Fragment>
    
                        )
                    }
                }
                </Query>
            )
        }
    }
}


export default withResolution;
