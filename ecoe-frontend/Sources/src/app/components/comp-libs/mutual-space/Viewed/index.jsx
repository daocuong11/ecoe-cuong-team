import React, { Fragment } from "react";
import CategorySearch from "apolloComponents/CategorySearch";
import GridCard from "globalComponents/GridCard";
import { PROJECT } from "constants/domainType";
import LatestViewCarousel from "globalComponents/LatestViewCarousel";
import Readmore from "globalComponents/Readmore";
import { VIEWED } from "constants/categorySearch";

const Viewed = (props) => {
    return (
        <CategorySearch isHomePage={true} category={VIEWED}            
            render={data => {
                let typeGrid = data.productType === PROJECT ? 2 : 3;
                return (
                    <Fragment>
                        <LatestViewCarousel products={data.searchCritical.products} />
                        <div style={{ paddingTop: "30px" }}>
                            <Readmore number={9} category={VIEWED} />
                        </div>
                    </Fragment>
                )
            }
            }           
        >
        </CategorySearch >
    )
}

export default Viewed;