import React, {Component} from "react";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import * as _ from 'lodash';

export const withData = (WrappedComponent) => {

    return class extends Component {

        constructor(props) {
            super(props);
            this.state = this.initState();
        }

        initState = () => {
            return {
                data: []
            };
        };

        getQuery = () => {
            return gql`
            query {
                productList {
                    name
                    id
                    images {
                        alt
                       src
                    }
                    branchType
                    productType
                    isOwner
                    userId
                    address
                    utilities {
                      beds
                      baths
                      areas
                      direction
                      balcons
                    }
                    basePrice
                    totalPrice
                    commission
                    status
                    contactPhone
                    likes
                    views
                    shareSocials
                    investor {
                      avatarURL
                      name
                      description
                    }
                    numberOfUnits
                    projectArea
                    scale
                    model
                    broker {
                      id
                      brokerAvatar
                      brokerName
                    }
                    isEnable
                    isSharing
                    isReceive
                }
            }
        `;
        };

        loadMore = (fetchMore) => {
            fetchMore({
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return Object.assign({}, prev, {
                        productList: [...prev.productList, ...fetchMoreResult.productList]
                    });
                }
            });
        };

        render() {
            return (
                <Query query={this.getQuery()} >
                    {({data, fetchMore}) => (
                        <WrappedComponent data={_.get(data, 'productList', [])} loadMore={() => this.loadMore(fetchMore)} {...this.props} />
                    )}
                </Query>
            )
        }
    }
};