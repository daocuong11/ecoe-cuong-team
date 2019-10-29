import React, {Component, Fragment } from "react";

import ContainerCps from "../globals/ContainerCps";
import Wrapper, { SectionFull, WrapperItem } from "./Wrapper";
import Navbar, { SectionWrapper } from "../globals/Section";
import HeadGrid from "../globals/HeadGrid";
import GridCard from "globalComponents/GridCard";
import GridCardRPF from "../globals/GridCardRPF";
import Buttons from "../../elements/Buttons";
import LatestViewCarousel from "globalComponents/LatestViewCarousel";

import { SD_FO } from "constants/domainType";
import { DescriptionSection } from "../../elements/Typography";
import PageCPS from "globalComponents/PageCPS";
import Other from "./Others";
import Highlight from "./Highlight";
import Viewed from "./Viewed";

const navbarItems = [
  {
    label: "Nổi bật",
    target: "highlight"
  },
  {
    label: "Sản phẩm khác",
    target: "orderProducts"
  },
  {
    label: "Xem gần đây",
    target: "latestView"
  },
];

const sectionHighlinghtSearch = { sectionSearch: { dk: "Nổi bật" } };
const sectionOrderProductsSearch = { sectionSearch: { dk: "Sản phẩm khác" } };
const keyView = "MU_LATEST_VIEW";
const latestViewsList = JSON.parse(localStorage.getItem(keyView));
if(latestViewsList!==null){
  const list = [];
  latestViewsList.forEach(function (item) {
    list.push(item.split(".", 1)[0]);
  });
 
}
const sectionLatestViewSearch = { sectionSearch: { dk: "Xem gần đây" } };

class FOHomePage extends Component {
  render(){
    let productType = localStorage.getItem("productType");
    let typeGrid = productType==="PROJECT" ? 2 : 3;

    return (
      <PageCPS domainType={SD_FO} fromEcoe={window.location.href.indexOf("/ecoe")}>
  
        <ContainerCps>
          <Wrapper>
            <Navbar top='470px' items={navbarItems} offset={-80} duration={500} delay={0} topTop={600}></Navbar>
          </Wrapper >
        </ContainerCps>
  
        <SectionWrapper items={navbarItems}>
  
          <WrapperItem name="highlight">
            <ContainerCps>
              <Wrapper padding>
                <HeadGrid title={`Nổi bật (${12})`} />
                <DescriptionSection>Những bất động sản sôi động ở những vị trí đắc địa</DescriptionSection>
              </Wrapper>
            </ContainerCps>
            <SectionFull>
              <ContainerCps>
                <Wrapper>
                  <Highlight></Highlight>
                </Wrapper>
              </ContainerCps>
            </SectionFull>
          </WrapperItem>
  
          <WrapperItem>
            <ContainerCps>
              <Wrapper padding>
                <HeadGrid name="orderProducts" title={`Sản phẩm khác (${25})`} />
                <DescriptionSection>Những sản phẩm mà bạn có thể sẽ thích</DescriptionSection>
                <Other></Other>
              </Wrapper>
            </ContainerCps>
          </WrapperItem>
  
          <WrapperItem>
            <ContainerCps>
              <Wrapper padding>
                <HeadGrid name="latestView" title="Xem gần đây" />
                <DescriptionSection>Những sản phẩm mà bạn đã xem gần đây</DescriptionSection>
              </Wrapper>
            </ContainerCps>
            <Viewed></Viewed>
            <div style={{height: "500px"}}></div>
          </WrapperItem>
        </SectionWrapper>
      </PageCPS>
    )
  }
  
}
export default FOHomePage;