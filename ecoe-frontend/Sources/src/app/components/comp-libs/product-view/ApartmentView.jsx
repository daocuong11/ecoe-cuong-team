import React, { Component, Fragment, lazy } from "react";

import Wrapper, { WidthFull, BG, SectionItem, ContentSection } from "./Wrapper";
import ContainerCps from "../globals/ContainerCps";
import VerticalNavbar, { VerticalSectionWrapper } from "../globals/VerticalSection";
import { IntroApartment } from "./IntroProduct";
import MediaView from "../globals/MediaView";
import { projectDetail } from "constants/projectDetail";
import StickyFooter from "./StickyFooter";
import * as _ from "lodash";

export const menuSectionProductView = [
    { target: "1", label: "Ưu điểm nổi bật" },
    { target: "2", label: "Vị trí" },
    { target: "3", label: "Cơ sở vật chất" },
    { target: "4", label: "Thông tin dự án" },
    { target: "5", label: "Ước tính khoản vay" }
];

export const menuSectionProductViewMobile = [
    { target: "-1", label: "Tổng quan" },...menuSectionProductView
];

const Advantages = lazy(() => import("./Advantages"));
const MapUtilities = lazy(() => import("globalComponents/MapUtilities"));
const Facilities = lazy(() => import("./Facilities"));
const ProjectInformation = lazy(() => import("./ProjectInformation"));
const LoanEstimates = lazy(() => import("globalComponents/LoanEstimates"));


class HouseView extends Component {
    render() {
        let productDetail = {
            ...projectDetail[0],
            productType: "APARTMENT",
            name: 'Căn hộ the tresor 2 phòng ngủ, tầng cao TS1',
            commission: "1.2",
            soPhongNgu: 2, soToilet: 2, dienTich: 75,
            tang: 18, thapBlock: "TS 1", phapLy: "Sổ đỏ", namSoHuu: "Lâu dài",
            huongCuaChinh: "Đông Bắc", huongBanCong: "Tây", tinhTrangBanGiao: "Hoàn thiện nội thất"
        }

        return (
            <Fragment>


                <WidthFull>
                    <BG />
                    <ContainerCps>
                        <Wrapper fix>

                            <ContentSection column={4} paddingRight style={{ paddingTop: "30px" }} order={2}>
                                <IntroApartment productDetail={productDetail} menuSectionProductView={menuSectionProductViewMobile} isMobile={_.get(this.props,'isMobile')}/>
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
                            <VerticalNavbar items={menuSectionProductView} offset={-80} duration={500} delay={0} top='300px' topTop={1175} />
                        </ContentSection>}

                        <ContentSection column={9} paddingLeft>
                            <VerticalSectionWrapper items={menuSectionProductView} >

                                <SectionItem name="1">
                                    <Advantages title="Ưu điểm nổi bật" advantages={productDetail.advantagesProject} />
                                </SectionItem>

                                <SectionItem name="2">
                                    <MapUtilities title="Vị trí" subTitle="Tiện ích xung quanh" utilities={productDetail.utilities} />
                                </SectionItem>

                                <SectionItem name="3">
                                    <Facilities title="Cơ sở vật chất" facilities={productDetail.facilities} />
                                </SectionItem>

                                <SectionItem name="4">
                                    <ProjectInformation title="Thông tin dự án" item={productDetail.investor} />
                                </SectionItem>

                                <SectionItem name="5">
                                    <LoanEstimates title="Ước tính khoản vay" />
                                </SectionItem>

                            </VerticalSectionWrapper>

                            <SectionItem >
                                <div>Tương tự</div>
                            </SectionItem>

                        </ContentSection>
                    </Wrapper>

                </ContainerCps>

                {!_.get(this.props,'isMobile') && <StickyFooter productDetail={productDetail} />}
            </Fragment>
        )
    }
}

export default HouseView;