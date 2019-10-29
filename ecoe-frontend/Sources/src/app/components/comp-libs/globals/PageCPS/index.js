import React, { Fragment } from "react";
import Banner from "globalComponents/Banner";
import ContainerCps from "globalComponents/ContainerCps";
import ProductSearch from "globalComponents/ProductSearch";
import { SeachBar } from "./Wrapper";
import {DETAIL} from "constants/domainType";

const PageCPS = (props) => {
  let domainType = localStorage.getItem('domainType');
  let token = localStorage.getItem('token');
  if (props.domainType === null || props.domainType === undefined) {    
  } else {
    localStorage.setItem('domainType', props.domainType);
    domainType = props.domainType;
  }  

  return (
    <Fragment >
      <Banner domainType={domainType} isSearchResultPage={props.isSearchResultPage} fromEcoe={props.fromEcoe} token={token}></Banner>
      <ContainerCps>
        <SeachBar isSearchResultPage={props.isSearchResultPage}>
        {domainType !== DETAIL && <ProductSearch isSearchResultPage={props.isSearchResultPage} />}
        </SeachBar>
      </ContainerCps>
            {props.children}
    </Fragment>
  );
};

export default PageCPS;
