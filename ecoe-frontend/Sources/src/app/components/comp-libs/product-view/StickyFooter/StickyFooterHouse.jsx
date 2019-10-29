import React from 'react';
import PropTypes from 'prop-types';

import { ContainerBoder, Container, TitleProject, AddressProject, Line, Item } from './Wrapper'
import { LABEL_PROJECT, ACT_GET_FOR_SALE } from "constants/labelActionForCard";

import Tag from '../../../elements/Tag';
import ShowInfo from '../ShowInfo';
import RButtonCard from '../../globals/Buttons/RButtonCard';
import { Likes, IconEye } from '../../../elements/Icon';
import { Unit } from '../Wrapper';

const StickyFooterHouse = (props) => {
    let houseDetail = props.productDetail;

    return (
        <ContainerBoder>
            <Container>
                <Line>
                    <Tag tagStyle={houseDetail.status === "Đã bán" ? 0 : 1} text={houseDetail.status} />
                </Line>
                <Line>
                    <Item column={6}>
                        <Item column={12}>
                            <TitleProject productType={LABEL_PROJECT}>{houseDetail.name}</TitleProject>
                        </Item>
                        <Item column={12}>
                            <AddressProject>{houseDetail.address}, {houseDetail.ward}, {houseDetail.district}</AddressProject>
                        </Item>
                        <Item noted column={12}>
                            <Item column={3}>
                                {houseDetail.publicDate}
                            </Item>
                            <Item column={3}>
                                <IconEye width={14} height={14} fill="#b9c0cc" /> {" " + houseDetail.totalView}
                            </Item>
                            <Item column={3}>
                                <Likes width={14} /> {" " + houseDetail.totalLike + " "} k
                            </Item>
                            <Item column={3}>
                                MSP {" " + houseDetail.codeProject}
                            </Item>
                        </Item>
                    </Item>
                    <Item column={1} />
                    <Item column={3}>
                        <Item column={6}>
                            <ShowInfo number label="Giá" text={houseDetail.Price / 1000000000}> <Unit>tỉ</Unit> </ShowInfo>
                        </Item>

                        <Item column={6}>
                            <ShowInfo number label="Hoa hồng" text={houseDetail.commission}> <Unit>%</Unit> </ShowInfo>
                        </Item>
                    </Item>

                    <Item center column={2}>
                        <RButtonCard type="1" label={ACT_GET_FOR_SALE} onClick={() => alert('It works!')} />
                    </Item>
                </Line>

            </Container>
        </ContainerBoder>
    );
}

StickyFooterHouse.propTypes = {
    productDetail: PropTypes.object,
};

export default StickyFooterHouse;