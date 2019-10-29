import React, { Fragment } from "react";
import CategorySearch from "apolloComponents/CategorySearch";
import GridCard from "globalComponents/GridCard";
import { SD_FO, PROJECT } from "constants/domainType";
import { HIGHLIGHT } from "constants/categorySearch";

const Highlight = (props) => {
    debugger
    return (
        <CategorySearch isHomePage={true} category={HIGHLIGHT}
            render={data => {
                let typeGrid = data.productType === PROJECT ? 2 : 3;
                return (
                    <GridCard
                        category={HIGHLIGHT}
                        products={data.searchCritical.products}
                        typeGrid={typeGrid}
                        domainType={SD_FO}
                        productType={data.productType}
                        readMore={() => { }}
                        isEnable={true}
                        couldAddition={true}
                    />)
            }

            }
        ></CategorySearch>
    )
}

export default Highlight;