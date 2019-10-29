import React, { Component } from "react";
import { Query } from "react-apollo";
import { SD_BO } from "constants/domainType";
import { GET_PRODUCTS } from "./query";

class ProductSearchRf extends Component {        
    render() {
        let Title = "Từ ECOE";
        let TypeGrid = "2";
        let DomainType = SD_BO;
        let IsEnable = true;
        console.log("search Critical",this.props.searchCritical);
        return (
            <Query query={GET_PRODUCTS} variables={this.props.searchCritical}
                            fetchPolicy='cache-and-network'>
                {
                    ({ loading, error, data }) => {                        
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error...</p>;                        
                        return (
                            <div>
                                {this.props.render(data.searchProducts)}
                            </div>
                        )
                    }
                }
            </Query>
        )
    }
}

export default ProductSearchRf;