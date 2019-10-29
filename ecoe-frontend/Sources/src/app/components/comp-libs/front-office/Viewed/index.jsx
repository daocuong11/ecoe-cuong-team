import React, { Fragment } from "react";
import CategorySearch from "apolloComponents/CategorySearch";
import GridCard from "globalComponents/GridCard";
import { SD_FO, PROJECT } from "constants/domainType";
import { FO_VIEWED } from "constants/categorySearch";
import LatestViewCarousel from "globalComponents/LatestViewCarousel";
import Readmore from "globalComponents/Readmore";

const Viewed = (props) => {
    return (
        <CategorySearch isHomePage={true} category={FO_VIEWED}
            render={data => {
                let typeGrid = data.productType === PROJECT ? 2 : 3;
                return (      
                    <Fragment>
                        <LatestViewCarousel products={data.searchCritical.products} />
                        <div style={{ paddingTop: "30px" }}>
                            <Readmore number={9} category={FO_VIEWED} />
                        </div>
                    </Fragment>             
                    
                    )
            }

            }
        ></CategorySearch>
    )
}

export default Viewed;