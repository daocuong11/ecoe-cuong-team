import { searchCritical } from "constants/productSearchCritical";
import { SD_FO, SD_BO } from "constants/domainType";
import {
    updateJsonObject    
  } from "globalUtils/updateSearchTreeNode";

export const updateFilterByCategory = function (categoryKey) {
    let searchCriticals = JSON.parse(localStorage.getItem("searchCriticals"));
    let index = localStorage.getItem("productType") === "PROJECT" ? 0 : 1;
    let newSearchCritical = searchCritical;

    let domainType = localStorage.getItem("domainType");
    updateJsonObject(newSearchCritical, "category", categoryKey);
    switch (domainType) {
        case SD_FO:
            searchCriticals[0][index] = newSearchCritical;
            break;
        case SD_BO:
            searchCriticals[1][index] = newSearchCritical;
            break;
        default:
            searchCriticals[2][index] = newSearchCritical;
            break;
    }

    localStorage.setItem(
        "searchCriticals",
        JSON.stringify(searchCriticals)
    );

}
