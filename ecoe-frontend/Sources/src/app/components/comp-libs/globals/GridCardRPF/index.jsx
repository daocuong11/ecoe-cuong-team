import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { SD_BO } from "constants/domainType";
//import GridCard from "globalComponents/GridCard";
import { GET_PRODUCTS } from "./query";

const search = { sectionSearch: { isEcoe: true } };    //test

class GridCardRPF extends Component {

    render() {
        let data = JSON.stringify(this.props.search ? this.props.search : search);
        return (
            <Fragment>
                {this.props.children}
                <Query query={GET_PRODUCTS} variables={{ data }}
                    fetchPolicy='cache-and-network'>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>Error...</p>;
                            return (
                                <Fragment>
                                    {this.props.render(data.searchCritical)}
                                </Fragment>
                            )
                        }
                    }
                </Query>
            </Fragment>
        )
    }

}

export default GridCardRPF;