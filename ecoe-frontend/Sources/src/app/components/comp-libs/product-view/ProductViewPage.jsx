import React, { Fragment } from 'react';
import ProjectView from './ProjectView';
import HouseView from './HouseView';
import ApartmentView from './ApartmentView';
import { PROJECT, HOUSE, APARTMENT } from 'constants/domainType';
import { DETAIL } from "constants/domainType";
import PageCPS from "globalComponents/PageCPS";
import { categorySection } from "globalConstants/dataTest";
import StickyFooter from "./StickyFooter";
import withResolution from 'apolloComponents/withResolution';
import { SM, MD, LG_P } from "constants/resolutions";

const ProductViewPage = (props) => {
  let productType = localStorage.getItem("productType");
  let { resolution } = props;
  let isMobile = resolution === SM || resolution === MD || resolution === LG_P;
  return (
    <PageCPS domainType={DETAIL} isSearchResultPage={true} fromEcoe={window.location.href.indexOf("/ecoe/front-office")}>
      {
        productType===PROJECT ? <ProjectView isMobile={isMobile}/> : 
        productType===HOUSE ? <HouseView isMobile={isMobile}/> :
        productType===APARTMENT && <ApartmentView isMobile={isMobile}/>
      }        
    </PageCPS>
  );
}

ProductViewPage.propTypes = {

};


export default withResolution(ProductViewPage);