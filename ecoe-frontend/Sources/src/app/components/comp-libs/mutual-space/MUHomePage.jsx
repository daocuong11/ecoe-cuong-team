import React, { Fragment } from "react";
import ContainerCps from "../globals/ContainerCps";
import Navbar, { SectionWrapper } from "../globals/Section/";
import { MS, SD_BO, PROJECT } from "constants/domainType";
import GridCard from "globalComponents/GridCard";
import GridCardRPF from "../globals/GridCardRPF";
import { Query } from "react-apollo";

import Wrapper from "./Wrapper";
import EcoeBanner from "./FromEcoe/EcoeBanner";

import HeadGrid from "../globals/HeadGrid";

import HotAreaGQ from "../globals/HotArea/HotAreaGQ";
import HighlightCardGQ from "../globals/HighlightCard/HighlightCardGQ";
import ProductTypeGQL from "apolloComponents/ProductTypeGQL";


import ButtonTest from "apolloComponents/ButtonTest";

import LatestViewCarousel from "../globals/LatestViewCarousel";

import { ProductList } from "constants/arrayProduct";
import ProductSearch from "../globals/ProductSearch";
import PageCPS from "globalComponents/PageCPS";

import gql from "graphql-tag";
import Newest from "./Newest";
import Ecoe from "./FromEcoe";
import QueryProductTypeRDF from "apolloComponents/QueryProductTypeRDF";
import Your from "./Your";
import Viewed from "./Viewed";

//import AutoLoadRPF from "apolloComponents/AutoLoadRPF";


// Test section vertical
// import { menuSectionProductView } from "../../../../constants/dataTest";
// import VerticalNavbar, { VerticalSectionWrapper } from "../globals/VerticalSection/";
// Test section vertical End


// notification
const query = gql`query {
  domainType 
}
`;

const MUHomePage = () => {
  const navbarItems = [
    {
      label: "Mới nhất",
      target: "newest"
    },
    {
      label: "Nổi bật",
      target: "highlight"
    },
    {
      label: "Từ ECOE",
      target: "ecoe"
    },
    {
      label: "Khu vực sôi động",
      target: "hotarea"
    },
    {
      label: "Dành cho bạn",
      target: "yourself"
    }
  ];

  const containerStyle = {
    width: "100%",
    marginTop: "75px",
  }

  const sectionNewestSearch = { sectionSearch: { dk: "Mới nhất" } };
  const sectionEcoeSearch = { sectionSearch: { isEcoe: true } };
  const sectionYourselfSearch = { sectionSearch: { dk: "Dành cho bạn, cùng khu vực?" } };

  // const NewestList = React.lazy(() => import(<ProductCard type="3" list={projectList}></ProductCard>));
  // const EcoetList = React.lazy(() => import(<ProductCard type="2" list={projectList}></ProductCard>));
  // const EommissionList = React.lazy(() => import(<ProductCard type="1" list={projectList}></ProductCard>));
  // const LandusecheckList = React.lazy(() => import(<ProductCard type="4" list={projectList}></ProductCard>));

  let productType = localStorage.getItem("productType");
  let typeGrid = productType === "PROJECT" ? 2 : 3;

  return (
    <PageCPS domainType={MS}>
      <Fragment>

        {/* <AppPage domainType={MS}></AppPage> */}
        <ContainerCps>
          <Wrapper>
            <Navbar top='75px' items={navbarItems} offset={-50} duration={500} delay={0} topTop={600} FavoriteButton={true} />
          </Wrapper>

          <SectionWrapper items={navbarItems} style={containerStyle}>
            <Wrapper name="newest">
              <HeadGrid title="Mới nhất" />
              <Newest></Newest>                            
            </Wrapper>
            {/*---------------------------------------------------------*/}
            <Wrapper name="highlight">
              <HeadGrid title="Nổi bật" />
              <HighlightCardGQ />
            </Wrapper>
            {/*---------------------------------------------------------*/}

            <Wrapper name="ecoe">
              <HeadGrid title="Từ ECOE" />              
              <EcoeBanner></EcoeBanner>
              <Ecoe></Ecoe>              
            </Wrapper>
            {/*---------------------------------------------------------*/}
            <Wrapper name="hotarea">
              <HeadGrid title="Khu vực sôi động" />
              <HotAreaGQ />
            </Wrapper>
            {/*---------------------------------------------------------*/}
            <Wrapper name="yourself">
              <HeadGrid title="Dành cho bạn" />
              <Your></Your>              
            </Wrapper>
          </SectionWrapper>
        </ContainerCps>

        <ContainerCps>
          <Wrapper>
            <HeadGrid title="Đã xem" />
          </Wrapper>
        </ContainerCps>
        <Viewed></Viewed>

        {/* <div>
         <Newest>
           
         </Newest>
        </div> */}
      </Fragment>
      <div style={{ height: "500px" }}></div>

    </PageCPS>
  )
}
export default MUHomePage;