import React from 'react';
import PropTypes from 'prop-types';
import Wrapper, { TitleSection, Line, Item, SubTitle, WrapperContent } from './Wrapper';
import ShowInfo from '../ShowInfo';
import RButtonCard from '../../globals/Buttons/RButtonCard';
import * as _ from "lodash";


const ProjectInformation = (props) => {
    let url = _.get(props,'url')

    return (
        <Wrapper>
            <TitleSection>{_.get(props, 'title')}</TitleSection>
            <SubTitle>{_.get(props, 'subTitle')}</SubTitle>
            <WrapperContent>
                <Item hard column={6}>
                    <Line border>
                        <Item hard column={5}>
                            <ShowInfo label="Chủ đầu tư" text={_.get(props.item, 'name')}></ShowInfo>
                        </Item>
                        <Item hard column={5}>
                            <ShowInfo label="Nhà thầu xây dựng" text={_.get(props.item, 'type')}></ShowInfo>
                        </Item>
                    </Line>
                    <Line border>
                        <Item hard column={5}>
                            <ShowInfo label="Đơn vị thiết kế" text={_.get(props.item, 'name')}></ShowInfo>
                        </Item>
                        <Item hard column={5}>
                            <ShowInfo label="Đơn vị quản lý" text={_.get(props.item, 'type')}></ShowInfo>
                        </Item>
                    </Line>
                    <Line border>
                        <Item hard column={5}>
                            <ShowInfo label="Thời gian khởi công" text={_.get(props.item, 'name')}></ShowInfo>
                        </Item>
                        <Item hard column={5}>
                            <ShowInfo label="Thời gian bàn giao" text={_.get(props.item, 'type')}></ShowInfo>
                        </Item>
                    </Line>
                    <Line border>
                        <Item hard column={5}>
                            <ShowInfo label="Phí quản lý (m2/tháng)" text={_.get(props.item, 'name')}></ShowInfo>
                        </Item>
                        <Item hard column={5}>
                            <ShowInfo label="Phí gửi xe (xe/tháng)" text={_.get(props.item, 'type')}></ShowInfo>
                        </Item>
                    </Line>
                    <Line>
                    <Item>
                    <RButtonCard label="Xem thêm"></RButtonCard>
                    </Item>
                    </Line>
                </Item>
                <Item hard column={5} src={_.get(props.item, 'image')}>
                </Item>
            </WrapperContent>

        </Wrapper>
        
    );
}

ProjectInformation.propTypes = {
    url: PropTypes.string,
};

export default ProjectInformation;