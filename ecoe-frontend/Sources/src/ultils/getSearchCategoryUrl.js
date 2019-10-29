import { getDomainUrl } from "globalUtils/getDomainUrl";
export const getSearchCategoryUrl= function(){
    const domainType = localStorage.getItem("domainType");
    let pageName = getDomainUrl(domainType);
    let subDomain = localStorage.getItem("domainName");
    return `/${subDomain}/${pageName}/search`;
}
