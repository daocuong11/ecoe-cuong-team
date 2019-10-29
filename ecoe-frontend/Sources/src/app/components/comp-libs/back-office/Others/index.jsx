import React, { Fragment } from "react";
import CategorySearch from "apolloComponents/CategorySearch";
import GridCard from "globalComponents/GridCard";
import { SD_BO, PROJECT } from "constants/domainType";
import { OTHER } from "constants/categorySearch";

const Other = (props) => {
    return (
        <CategorySearch isHomePage={true} category={OTHER}
            render={data => {
                let typeGrid = data.productType === PROJECT ? 2 : 3;
                return (
                    <GridCard
                        category={OTHER}
                        products={data.searchCritical.products}
                        typeGrid={typeGrid}
                        domainType={SD_BO}
                        productType={data.productType}
                        readMore={() => { }}
                        isEnable={true}
                    />)
            }

            }
        ></CategorySearch>
    )
}

export default Other;