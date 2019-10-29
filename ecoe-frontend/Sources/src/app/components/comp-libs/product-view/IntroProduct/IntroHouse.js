import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Wrapper, { TitleProject, AddressProject, Line, Item,TitleSection,WrapperBG } from './Wrapper'
import { LABEL_PROJECT, ACT_GET_FOR_SALE, ACT_COMPARISONS } from "constants/labelActionForCard";

import Tag from '../../../elements/Tag';
import ShowInfo from '../ShowInfo';
import RButtonCard from '../../globals/Buttons/RButtonCard';
import LButtonCard from '../../globals/Buttons/LButtonCard';
import TagBroker from '../../globals/TagBroker';
import { Unit } from '../Wrapper';
import MenuSection from '../MenuSection';
const IntroHouse = (props) => {
    let houseDetail = props.productDetail;

    return (
        <Wrapper>
             <WrapperBG>
            <Tag tagStyle={houseDetail.status === "Đã bán" ? 0 : 1} text={houseDetail.status} />
            <TitleProject productType={LABEL_PROJECT}>{houseDetail.name}</TitleProject>
            <AddressProject>{houseDetail.address}, {houseDetail.ward}, {houseDetail.district}</AddressProject>
            <Line border>
                <Item hard column={4} noPadding>
                    <ShowInfo number label="Giá" text={houseDetail.Price / 1000000000}> <Unit>tỉ</Unit> </ShowInfo>
                </Item>
                <Item hard column={4} noPadding>
                    <ShowInfo number label="Hoa hồng" text={houseDetail.commission}> <Unit>%</Unit> </ShowInfo>
                </Item>
            </Line>

            <Line border>
                <TagBroker />
            </Line>

            <Line>
                <Item hard column={6}noPadding>
                    <RButtonCard type="1" label={ACT_GET_FOR_SALE} onClick={() => alert('It works!')} />
                </Item>
                <Item hard column={6} style={{textAlign:"right"}} noPadding>
                    <LButtonCard label={ACT_COMPARISONS} onClick={() => alert('It works!')} />
                </Item>
            </Line>
            </WrapperBG>
            <Line border>
                {props.isMobile && 
                <Fragment>
                    <MenuSection items={props.menuSectionProductView}></MenuSection>
                    <TitleSection paddingTop>Tổng quan</TitleSection>
                </Fragment>
                }
                <Item hard column={3} noPadding>
                    <ShowInfo number labelIcon="Phòng ngủ" text={houseDetail.soPhongNgu} />
                </Item>
                <Item hard column={3} noPadding>
                    <ShowInfo number labelIcon="Toilet" text={houseDetail.soToilet} />
                </Item>
                <Item hard column={3} noPadding>
                    <ShowInfo number labelIcon="Diện tích" text={houseDetail.dienTich}> <Unit>m2</Unit> </ShowInfo>
                </Item>
            </Line>

            <Line border>
                <Item hard column={3} noPadding>
                    <ShowInfo number label="Chiều dài" text={houseDetail.chieuDai}> <Unit>m</Unit> </ShowInfo>
                </Item>
                <Item hard column={3} noPadding>
                    <ShowInfo number label="Chiều rộng" text={houseDetail.chieuRong}> <Unit>m</Unit> </ShowInfo>
                </Item>
                <Item hard column={3} noPadding>
                    <ShowInfo number label="Số tầng" text={houseDetail.soTang} />
                </Item>
                <Item hard column={3} noPadding>
                    <ShowInfo number label="Cao trần nhà" text={houseDetail.caoTranNha}> <Unit>m</Unit> </ShowInfo>
                </Item>
            </Line>

            <Line>
                <Item hard column={3} noPadding>
                    <ShowInfo label="Pháp lý" text={houseDetail.phapLy}></ShowInfo>
                </Item>
                <Item hard column={3} noPadding>
                    <ShowInfo label="Loại" text={houseDetail.loaiNhaPho}></ShowInfo>
                </Item>
                <Item hard column={3} noPadding>
                    <ShowInfo label="Hướng cửa chính" text={houseDetail.huongCuaChinh}></ShowInfo>
                </Item>
            </Line>

            <Line>
                <Item hard column={3} noPadding>
                    <ShowInfo label="Tầng lửng" text={houseDetail.tangLung}></ShowInfo>
                </Item>
                <Item hard column={3} noPadding>
                    <ShowInfo label="Tầng hầm" text={houseDetail.tangHam}></ShowInfo>
                </Item>
            </Line>            
        </Wrapper>
    );
}

IntroHouse.propTypes = {
    productDetail: PropTypes.object,
    onClick: PropTypes.func
};

export default IntroHouse;