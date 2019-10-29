import React from 'react';
import PropTypes from 'prop-types';

import { ContainerBoder, Container, TitleProject, AddressProject, Line, Item } from './Wrapper'
import { LABEL_PROJECT, ACT_GET_FOR_SALE } from "constants/labelActionForCard";

import Tag from '../../../elements/Tag';
import ShowInfo from '../ShowInfo';
import RButtonCard from '../../globals/Buttons/RButtonCard';
import { Likes, IconEye } from '../../../elements/Icon';
import { Unit } from '../Wrapper';

const StickyFooterProject = (props) => {
    let project = props.productDetail;

    return (
        <ContainerBoder>
            <Container>
                <Line>
                    <Tag tagStyle={project.status === "Đã bán" ? 0 : 1} text={project.status} />
                </Line>
                <Line>
                    <Item column={6}>
                        <Item column={12}>
                            <TitleProject productType={LABEL_PROJECT}>{project.name}</TitleProject>
                        </Item>
                        <Item column={12}>
                            <AddressProject>{project.address}, {project.ward}, {project.district}, {project.city}</AddressProject>
                        </Item>
                        <Item noted column={12}>
                            <Item column={3}>
                                {project.publicDate}
                            </Item>
                            <Item column={3}>
                                <IconEye width={14} height={14} fill="#b9c0cc" />
                                {" " + project.totalView}
                            </Item>
                            <Item column={3}>
                                <Likes width={14} />
                                {" " + project.totalLike + " "} k
                                    </Item>
                            <Item column={3}>
                                MSP
                                        {" " + project.codeProject}
                            </Item>
                        </Item>
                    </Item>

                    <Item column={4}>
                        <Item column={4}>
                            <ShowInfo number label="Giá" text={project.fromPrice / 1000000000 + "-" + project.toPrice / 1000000000}> <Unit>tỉ</Unit> </ShowInfo>
                        </Item>
                        <Item column={4}>
                            <ShowInfo number label="Giá giữ chỗ" text={project.keepingFee}> <Unit>triệu</Unit> </ShowInfo>
                        </Item>
                        <Item column={4}>
                            <ShowInfo number label="Hoa hồng" text={project.commission}> <Unit>%</Unit> </ShowInfo>
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

StickyFooterProject.propTypes = {
    productDetail: PropTypes.object,
};

export default StickyFooterProject;