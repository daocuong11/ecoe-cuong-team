import React from "react";

import ContainerCps from "globalComponents/ContainerCps";
import Navbar, { SectionWrapper } from "globalComponents/Section/";
import HeadGrid from "globalComponents/HeadGrid";
import GridCardRPF from "globalComponents/GridCardRPF";
import GridCard from "globalComponents/GridCard";
import { DescriptionSection } from "UIElement/Typography";
import Readmore from "../globals/Readmore";
import { SD_BO } from "constants/domainType";
import Wrapper, { WrapperItem, LinkSubdomain } from "./Wrapper";
import PageCPS from "globalComponents/PageCPS";
import Highlight from "./Highlight";
import Others from "./Others";
import Hided from "./Hided";

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
    label: "Đã ẩn",
    target: "hidden"
  },
];

//const sectionHighlinghtSearch = { sectionSearch: { dk: "Nổi bật" } };
const sectionOrderProductsSearch = { sectionSearch: { dk: "Sản phẩm khác" } };
const sectionHiddenSearch = { sectionSearch: { dk: "Đã ẩn" } };

const BOHomePage = () => {
  let productType = localStorage.getItem("productType");
  let typeGrid = productType==="PROJECT" ? 2 : 3;

  return (
    <PageCPS domainType={SD_BO}>

      <ContainerCps>
        <Wrapper>
          <Navbar top='470px' items={navbarItems} offset={-80} duration={500} delay={0} topTop={600}></Navbar>
        </Wrapper >
      </ContainerCps>

      <SectionWrapper items={navbarItems}>

        <WrapperItem name="highlight">
          <Highlight />
        </WrapperItem>

        <WrapperItem>
          <ContainerCps>
            <Wrapper>
              <HeadGrid name="orderProducts" title={`Sản phẩm khác (${25})`} />
              <DescriptionSection padding>Các nhà đất khác bạn đang trưng bày trên <LinkSubdomain as="a" href="/front-office">giao diện người mua</LinkSubdomain></DescriptionSection>
              <Others></Others>
              
            </Wrapper>
          </ContainerCps>
        </WrapperItem>

        <WrapperItem>
          <ContainerCps>
            <Wrapper>
              <HeadGrid name="hidden" title="Đã ẩn" />
              <DescriptionSection padding>Các nhà đất khác bạn đang tạm ẩn khỏi <LinkSubdomain as="a" href="/front-office">giao diện người mua</LinkSubdomain></DescriptionSection>
              <Hided></Hided>
              
            </Wrapper>
          </ContainerCps>
        </WrapperItem>

      </SectionWrapper>
      <div style={{ height: "500px" }}></div>
     
    </PageCPS>
  )
}
export default BOHomePage;