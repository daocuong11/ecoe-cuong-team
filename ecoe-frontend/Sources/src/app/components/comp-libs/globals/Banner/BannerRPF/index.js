import React from "react";
import Banner from "../";
import gql from "graphql-tag";
import {Query} from "react-apollo";

const DOMAIN_TYPE = gql`query {
   
    domainType

}`;
const BannerRPF = () => {
    return (
        <Query query={DOMAIN_TYPE}>
            {({ data }) => {
                debugger
                let domainType = data.domainType;
                return (
                    <Banner domainType={domainType}></Banner>
                );
            }}
        </Query>
    )
}

export default BannerRPF;