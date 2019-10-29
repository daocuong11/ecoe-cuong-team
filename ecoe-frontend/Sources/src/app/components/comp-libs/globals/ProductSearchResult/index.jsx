import React, { Component } from "react";
import GridCard from "globalComponents/GridCard";
import { SD_BO, SD_FO, PROJECT } from "constants/domainType";
import { GET_PRODUCTS } from "globalComponents/GridCard/GridCardGQ/query";
import { ApolloConsumer } from "react-apollo";
import { QueryManager } from "apollo-client/core/QueryManager";
import ProductSearchRf from "./ProductSearchRf";
import TypeSearch from "../ProductSearch/CommonSearch/TypeSearch";



class ProductSearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            searchCritical: {
                test: 1
            }
        });

        this.updateSearchCritical = this.updateSearchCritical.bind(this);
    }
    updateSearchCritical(count) {
        this.setState({
            searchCritical: {
                test: count
            }
        });
    }
    count= 0;
    render() {
        return (
            <div>
                <TypeSearch></TypeSearch>
                <button onClick={() => {
                    this.count++;                    
                    this.updateSearchCritical(this.count);
                }}>
                    Load more
                    </button>
                <ProductSearchRf searchCritical={this.state.searchCritical}
                    render={getProducts=> <GridCard products={getProducts}
                    productType={PROJECT}
                    domainType={SD_BO}
                    typeGrid={3}
                    title="Ket qua"
                    readMore={()=>{}}
                    onClick={()=>{}}
                    isEnable={true}
                >
                </GridCard>
                }></ProductSearchRf>

            </div >
        )
    }


}

export default ProductSearchResult;