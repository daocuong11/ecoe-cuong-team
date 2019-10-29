import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Wrapper, { TitleProject, AddressProject, Line, Item, TitleSection,WrapperBG } from './Wrapper';
import { Unit } from '../Wrapper';
import { LABEL_PROJECT, ACT_GET_FOR_SALE, ACT_COMPARISONS } from "constants/labelActionForCard";
import * as _ from "lodash";
import Tag from '../../../elements/Tag';
import ShowInfo from '../ShowInfo';
import RButtonCard from '../../globals/Buttons/RButtonCard';
import LButtonCard from '../../globals/Buttons/LButtonCard';
import MenuSection from '../MenuSection';

const IntroProject = (props) => {
    let projectDetail = props.productDetail;
    return (
        <Wrapper>
            <WrapperBG>
            <Tag tagStyle={projectDetail.status === "Đã bán" ? 0 : 1} text={projectDetail.status} />
            <TitleProject productType={LABEL_PROJECT}>{projectDetail.name}</TitleProject>
            <AddressProject>{projectDetail.address}, {projectDetail.ward}, {projectDetail.district}</AddressProject>
            <Line border>
                <Item hard column={6} noPadding>
                    <ShowInfo number label="Giá" text={projectDetail.fromPrice / 1000000000 + "-" + projectDetail.toPrice / 1000000000}> <Unit>tỉ</Unit> </ShowInfo>
                </Item>
                <Item hard column={3} noPadding>
                    <ShowInfo number label="Giá giữ chỗ" text={projectDetail.keepingFee}> <Unit>triệu</Unit> </ShowInfo>
                </Item>
                <Item hard column={3} noPadding>
                    <ShowInfo number label="Hoa hồng" text={projectDetail.commission}> <Unit>%</Unit> </ShowInfo>
                </Item>
            </Line>

            <Line>
                <Item hard column={6} noPadding>
                    <RButtonCard type="1" label={ACT_GET_FOR_SALE} onClick={() => alert('It works!')} />
                </Item>
                <Item hard column={6} style={{ textAlign: "right" }} noPadding>
                    <LButtonCard label={ACT_COMPARISONS} onClick={() => alert('It works!')} />
                </Item>
            </Line>
            </WrapperBG>
            <Line paddingTop>
                {props.isMobile && 
                <Fragment>
                    <MenuSection items={props.menuSectionProductView}></MenuSection>
                    <TitleSection paddingTop>Tổng quan</TitleSection>
                </Fragment>
                }
               
                <Item hard column={12} noPadding>
                    <ShowInfo label="Chủ đầu tư" text={projectDetail.investorNm}></ShowInfo>
                </Item>
                <Item hard column={6} noPadding>
                    <ShowInfo number label="Tổng số vốn đầu tư" text={projectDetail.acreageTotal}> <Unit>tỉ</Unit> </ShowInfo>
                </Item>
                <Item hard column={6} noPadding>
                    <ShowInfo number label="Diện tích toàn dự án" text={projectDetail.projectArea}> <Unit>m2</Unit> </ShowInfo>
                </Item>
                <Item hard column={6} noPadding>
                    <ShowInfo number label="Mật độ xây dựng" text={projectDetail.buildingDensity}> <Unit>%</Unit> </ShowInfo>
                </Item>
                <Item hard column={6} noPadding>
                    <ShowInfo number label="Mật độ cây xanh" text={projectDetail.treeDensity}> <Unit>%</Unit> </ShowInfo>
                </Item>
                <Item hard column={6} noPadding>
                    <ShowInfo label="loại hình trong dự án" text={projectDetail.typePU}></ShowInfo>
                </Item>
                <Item hard column={6} noPadding>
                    <ShowInfo label="Tình trạng giao nhà" text={""}></ShowInfo>
                </Item>
                <Item hard column={6} noPadding>
                    <ShowInfo number label="Khởi công" text={projectDetail.startDate}></ShowInfo>
                </Item>
                <Item hard column={6} noPadding>
                    <ShowInfo number label="Bàn giao" text={projectDetail.handoverDate}></ShowInfo>
                </Item>
            </Line>

        </Wrapper>
    );
}

IntroProject.propTypes = {
    productDetail: PropTypes.object,
    onClick: PropTypes.func
};

export default IntroProject;