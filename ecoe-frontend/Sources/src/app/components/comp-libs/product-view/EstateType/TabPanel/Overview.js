import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SD_BO } from "constants/domainType";

import demoPic from "images/demoPic.jpg";
import StatusProduct from '../../../globals/StatusProduct';
import { ContentSection } from '../../Wrapper';
import ShowInfo from '../../ShowInfo';
import { devices } from "globalUtils/styledUtils";
import { APPARTMENT } from "constants/projectDetail";

const Wrapper = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    background: #f2f8ff;

    ${devices.sm`
    margin: -20px;
    `}
`;

const Left = styled.div`
    display: inline-block;
    width: 50%;
    height: 270px;
    padding-right: 30px;
    /* background: #fff url(${demoPic}) center no-repeat; */

    > img{
        height: 100%;
        width: 100%;
    }
    ${devices.sm`
    width: 100%;
    height: 270px;
    padding-right: 0;
    padding-bottom: 25px;
    `}
`;

const Right = styled.div`
    display: inline-block;
    flex-grow: 1;
    flex: 1 1 30%;
    width: 50%;
    height: 100%;
    ${devices.sm`
    padding: 20px;
    `}
`;

const NameProduct = styled.div`
    font-size: ${props => props.theme.fontSize.large};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.textColor.primaryBlue};
    padding-top: 10px;
`;

const BorderItem = styled.div`
    border-top: 1px dashed #ccc;
    padding-top: 20px;
    margin-top: 20px;
`;

const Item = styled(ContentSection)``;

const Overview = (props) => {
    let projectUnit = props.productUnit;
    return (
        <Wrapper>
            <Left>
                <img src={projectUnit.images} alt="" />
            </Left>
            <Right>
                <StatusProduct product={projectUnit} domainType={SD_BO} />
                <NameProduct>{projectUnit.projectUnitNm}</NameProduct>
                <BorderItem>
                    <Item hard column={3} noPadding>
                        <ShowInfo label="Số tầng" text={projectUnit.totalFloor}></ShowInfo>
                    </Item>
                    <Item hard column={3} noPadding>
                        <ShowInfo label="Căn hộ" text={projectUnit.totalApartment}></ShowInfo>
                    </Item>
                    {
                        projectUnit.type === APPARTMENT && (
                            <Item hard column={3} noPadding>
                                <ShowInfo label="Officetel" text={projectUnit.totalOfficetel}></ShowInfo>
                            </Item>
                        )
                    }
                    <Item hard column={3} noPadding>
                        <ShowInfo label="Shophouse" text={projectUnit.totalShophouse}></ShowInfo>
                    </Item>
                    {
                        projectUnit.type === APPARTMENT && (
                            <Item hard column={3} noPadding>
                                <ShowInfo label="Thang máy" text={projectUnit.totalLift}></ShowInfo>
                            </Item>
                        )
                    }
                    <Item hard column={3} noPadding>
                        <ShowInfo label="Tầng hầm" text={projectUnit.totalBasement}></ShowInfo>
                    </Item>
                    <Item hard column={3} noPadding>
                        <ShowInfo label="Mở bán" text={projectUnit.salesDate}></ShowInfo>
                    </Item>
                    <Item hard column={3} noPadding>
                        <ShowInfo label="Bàn giao" text={projectUnit.handoverDate}></ShowInfo>
                    </Item>
                </BorderItem>
            </Right>

        </Wrapper>

    );
}

Overview.propTypes = {
    product: PropTypes.object,
};

export default Overview;