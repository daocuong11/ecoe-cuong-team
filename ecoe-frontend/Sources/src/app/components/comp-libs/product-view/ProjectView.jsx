import React, { Component, lazy, Fragment } from "react";

import ContainerCps from "../globals/ContainerCps";
import Wrapper, { WidthFull, BG, SectionItem, ContentSection } from "./Wrapper";

import { SD_FO } from "constants/domainType";
import PageCPS from "globalComponents/PageCPS";

import { menuSectionProductView,menuSectionProductViewMobile } from "../../../../constants/dataTest";
import VerticalNavbar, { VerticalSectionWrapper } from "../globals/VerticalSection";
import IntroProduct from "./IntroProduct";
import MediaView from "../globals/MediaView";
import * as _ from "lodash";
import { projectDetail, ProjectUnits, HOUSE, VILLA, APPARTMENT, LAND } from "constants/projectDetail";

import StickyFooter from "./StickyFooter";

const Advantages = lazy(() => import("./Advantages"));
const ShortInfo = lazy(() => import("./ShortInfo"));
const EstateType = lazy(() => import("./EstateType"));
const MapUtilities = lazy(() => import("globalComponents/MapUtilities"));
const InternalUtilities = lazy(() => import("./InternalUtilities"));
const Investor = lazy(() => import("./Investor"));
const ImplementedProjects = lazy(() => import("./ImplementedProjects"));
const CooperationUnit = lazy(() => import("./CooperationUnit"));
const InvestorDocument = lazy(() => import("./InvestorDocument"));
const LoanEstimates = lazy(() => import("globalComponents/LoanEstimates"));

class ProjectView extends Component {
  render() {
    let productDetail = projectDetail[0];
    
    return (
      <Fragment>

        <WidthFull>
          <BG />
          <ContainerCps>
            <Wrapper fix>

              <ContentSection column={4} paddingRight style={{ paddingTop: "30px" }} order={2}>
                <IntroProduct productDetail={productDetail} menuSectionProductView={menuSectionProductViewMobile} isMobile={_.get(this.props,'isMobile')}/>
              </ContentSection>

              <ContentSection column={8} paddingLeft order={1} noPadding>
                <MediaView items={productDetail.media} />
              </ContentSection>

            </Wrapper>
          </ContainerCps>
        </WidthFull>

        <ContainerCps>
          <Wrapper padding>
            {!_.get(this.props,'isMobile') && <ContentSection column={3} paddingRight>
              <VerticalNavbar items={menuSectionProductView} offset={-80} duration={500} delay={0} top='300px' topTop={925} />
            </ContentSection>}

            <ContentSection column={9} paddingLeft>
              <VerticalSectionWrapper items={menuSectionProductView} >

                <SectionItem name="1">
                  <Advantages title="Ưu điểm nổi bật" advantages={productDetail.advantagesProject} />
                </SectionItem>

                <SectionItem name="2">
                  <ShortInfo title={["Thông số", "Phí & thuế", "Pháp lý"]} project={productDetail} />
                </SectionItem>

                <SectionItem name="3">
                  <EstateType title="Loại hình" projectUnits={ProjectUnits} />
                </SectionItem>

                <SectionItem name="4">
                  <MapUtilities title="Vị trí" subTitle="Tiện ích xung quanh" utilities={productDetail.utilities} />
                </SectionItem>

                <SectionItem name="5">
                  <InternalUtilities title="Tiện ích nội khu" items={productDetail.internalUtilities} />
                </SectionItem>

                <SectionItem name="6">
                  <Investor title="Chủ đầu tư" subTitle="Thông tin chủ đầu tư" item={productDetail.investor} />
                  <ImplementedProjects subTitle="Dự án đã thực hiện" url={productDetail.implemented_projects} />
                </SectionItem>

                <SectionItem name="7">
                  <CooperationUnit title="Đơn vị hợp tác" items={productDetail.cooperationUnit} />
                </SectionItem>

                <SectionItem name="8">
                  <InvestorDocument title="Tài liệu từ chủ đầu tư" items={productDetail.investorDocuments} />
                </SectionItem>
              </VerticalSectionWrapper>

              <SectionItem >
                <LoanEstimates title="Ước tính khoản vay" />
              </SectionItem>

            </ContentSection>
          </Wrapper>

        </ContainerCps>

        {!_.get(this.props,'isMobile') && <StickyFooter productDetail={productDetail} />}

      </Fragment>
    )
  }
}

export default ProjectView;