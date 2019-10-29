import { MS, SD_BO, SD_FO, DETAIL } from "constants/domainType";
import {
    PAGE_HOME
    , PAGE_FO
    , PAGE_BO
    , PAGE_MS
    , PAGE_PRODUCT_DETAIL
    , PAGE_PRODUCT_FORM
} from "constants/page";


export const getDomainUrl = function (key) {
    switch (key) {
        case MS:
            return PAGE_MS;
            break;
        case SD_BO:
            return PAGE_BO;
            break;
        case SD_FO:
            return PAGE_FO;
        case DETAIL:
            return PAGE_PRODUCT_DETAIL;
            break;
        default: return PAGE_HOME
    }

};