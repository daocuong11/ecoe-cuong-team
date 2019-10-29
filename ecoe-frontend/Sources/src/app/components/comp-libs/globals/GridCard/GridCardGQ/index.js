import React from "react";
import { Query } from "react-apollo";

import GridCard from "globalComponents/GridCard";
import {GET_PRODUCTS} from "./query";

const GridCardGQ = (props) => (
    <Query query={GET_PRODUCTS} searchCritical={props.searchCritical}>
        {
            ({ loading, error, data }) => {
                console.log("Query product");
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error...</p>;
                console.log(data);
                return (
                    <GridCard products={data.getProducts}
                        productType={props.ProductType}
                        domainType={props.DomainType}
                        typeGrid={props.TypeGrid}
                        title={props.Title}
                        readMore={props.ReadMore}
                        onClick={props.onClick}
                        isEnable={props.IsEnable}
                    >
                    </GridCard>
                )
            }
        }
    </Query>
);

export default GridCardGQ;