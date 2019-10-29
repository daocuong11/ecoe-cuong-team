import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Wrapper, { TitleProject, AddressProject, Line, Item,WrapperBG,TitleSection} from './Wrapper';
import { Unit } from '../Wrapper';
import { LABEL_PROJECT, ACT_GET_FOR_SALE, ACT_COMPARISONS } from "constants/labelActionForCard";

import Tag from '../../../elements/Tag';
import ShowInfo from '../ShowInfo';
import RButtonCard from '../../globals/Buttons/RButtonCard';
import LButtonCard from '../../globals/Buttons/LButtonCard';
import TagBroker from '../../globals/TagBroker';
import MenuSection from '../MenuSection';

const IntroApartment = (props) => {
    let apartmentDetail = props.productDetail;

    return (
        <Wrapper>
            <WrapperBG>
            <Tag tagStyle={apartmentDetail.status === "Đã bán" ? 0 : 1} text={apartmentDetail.status} />
            <TitleProject productType={LABEL_PROJECT}>{apartmentDetail.name}</TitleProject>
            <AddressProject>{apartmentDetail.address}, {apartmentDetail.ward}, {apartmentDetail.district}</AddressProject>
            <Line border>
                <Item hard column={4} noPadding>
                    <ShowInfo number label="Giá" text={apartmentDetail.basePrice / 1000000}> <Unit>tr/m2</Unit> </ShowInfo>
                </Item>
                <Item hard column={4} noPadding>
                    <ShowInfo number label="Hoa hồng" text={apartmentDetail.commission}> <Unit>%</Unit> </ShowInfo>
                </Item>
            </Line>

            <Line border>
                <TagBroker />
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
            <Line border>
                {props.isMobile && 
                <Fragment>
                    <MenuSection items={props.menuSectionProductView}></MenuSection>
                    <TitleSection paddingTop>Tổng quan</TitleSection>
                </Fragment>
                }
                <Item hard column={3} noPadding>
                    <ShowInfo number labelIcon="Phòng ngủ" text={apartmentDetail.soPhongNgu}></ShowInfo>
                </Item>
                <Item hard column={3} noPadding>
                    <ShowInfo number labelIcon="Toilet" text={apartmentDetail.soToilet}></ShowInfo>
                </Item>
                <Item hard column={3} noPadding>
                    <ShowInfo number labelIcon="Diện tích" text={apartmentDetail.dienTich}> <Unit>m2</Unit> </ShowInfo>
                </Item>
            </Line>

            <Line border>
                <Item hard column={3} noPadding>
                    <ShowInfo number label="Tầng" text={apartmentDetail.tang}></ShowInfo>
                </Item>
                <Item hard column={3} noPadding>
                    <ShowInfo number label="Tháp/ Block" text={apartmentDetail.thapBlock}></ShowInfo>
                </Item>
                <Item hard column={3} noPadding>
                    <ShowInfo label="Pháp lý" text={apartmentDetail.phapLy}></ShowInfo>
                </Item>
                <Item hard column={3} noPadding>
                    <ShowInfo label="Năm sở hữu" text={apartmentDetail.namSoHuu}></ShowInfo>
                </Item>
            </Line>

            <Line border>
                <Item hard column={6} noPadding>
                    <ShowInfo label="Hướng cửa chính" text={apartmentDetail.huongCuaChinh}></ShowInfo>
                </Item>
                <Item hard column={6} noPadding>
                    <ShowInfo label="Hướng ban công" text={apartmentDetail.huongBanCong}></ShowInfo>
                </Item>
                <Item hard column={6} noPadding>
                    <ShowInfo label="Tình trạng bàn giao" text={apartmentDetail.tinhTrangBanGiao}></ShowInfo>
                </Item>
            </Line>

        </Wrapper>
    );
}

IntroApartment.propTypes = {
    productDetail: PropTypes.object,
    onClick: PropTypes.func
};

export default IntroApartment;