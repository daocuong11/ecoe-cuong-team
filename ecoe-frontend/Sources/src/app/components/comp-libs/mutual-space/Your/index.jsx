import React, { Fragment } from "react";
import CategorySearch from "apolloComponents/CategorySearch";
import GridCard from "globalComponents/GridCard";
import { MS, SD_BO, PROJECT } from "constants/domainType";
import { YOUR } from "constants/categorySearch";
const sectionYourselfSearch = { sectionSearch: { dk: "Dành cho bạn, cùng khu vực?" } };

const Your = (props) => {
    return (
        <CategorySearch isHomePage={true} category={YOUR}
            search={sectionYourselfSearch}
            render={data => {
                let typeGrid = data.productType === PROJECT ? 2 : 3;
                return (<GridCard
                    category={YOUR}
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

export default Your;