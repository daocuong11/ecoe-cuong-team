import React, { Fragment } from "react";
import CategorySearch from "apolloComponents/CategorySearch";
import GridCard from "globalComponents/GridCard";
import { MS, PROJECT } from "constants/domainType";
import { ECOE } from "constants/categorySearch";

const sectionEcoeSearch = { sectionSearch: { isEcoe: true } };
const Ecoe = (props) => {
    return (
        <CategorySearch isHomePage={true} category="ECOE"
            search={sectionEcoeSearch}
            render={data => {
                let typeGrid = data.productType === PROJECT ? 2 : 3;
                return (<GridCard    
                    category={ECOE}                                    
                    products={data.searchCritical.products}
                    typeGrid={typeGrid}
                    domainType={MS}
                    productType={data.productType}
                    readMore={() => { }}
                    isEnable={true}
                />)
            }

            }
        ></CategorySearch>
    )
}

export default Ecoe;