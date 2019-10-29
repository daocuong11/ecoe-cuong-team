import React, { Fragment } from "react";
import CategorySearch from "apolloComponents/CategorySearch";
import GridCard from "globalComponents/GridCard";
import { SD_BO, PROJECT } from "constants/domainType";
import { HIDED } from "constants/categorySearch";


const Hided = (props) => {
    return (
        <CategorySearch isHomePage={true} category={HIDED}
            render={data => {                
                return (
                    <GridCard
                        category={HIDED}
                        products={data.searchCritical.products}
                        typeGrid={4}
                        domainType={SD_BO}
                        productType={data.productType}
                        readMore={() => { }}
                        isEnable={false}
                    />)
            }
            }
        ></CategorySearch>
    )
}

export default Hided;