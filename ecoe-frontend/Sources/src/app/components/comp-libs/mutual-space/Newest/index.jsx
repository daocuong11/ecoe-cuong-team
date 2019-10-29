import React, { Fragment } from "react";
import CategorySearch from "apolloComponents/CategorySearch";
import GridCard from "globalComponents/GridCard";
import { MS, PROJECT } from "constants/domainType";
import { NEWEST } from "constants/categorySearch";

const Newest = (props) => {
    return (
        <CategorySearch isHomePage={true} category={NEWEST}
            render={data => {
                let typeGrid = data.productType === PROJECT ? 2 : 3;
                return (

                    <GridCard
                        category={NEWEST}
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

export default Newest;