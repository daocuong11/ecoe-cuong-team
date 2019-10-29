import React from 'react';
import PropTypes from 'prop-types';
import Wrapper, { TitleSection, Line, Item, SubTitle, WrapperContent } from './Wrapper';
import * as _ from "lodash";
import ShowInfo from '../ShowInfo';

const Investor = (props) => {
    return (
        <Wrapper>
            <TitleSection>{_.get(props, 'title')}</TitleSection>
            <SubTitle>{_.get(props, 'subTitle')}</SubTitle>
            <WrapperContent>
                <Item hard column={6}>
                    <Line border>
                        <Item hard column={5}>
                            <ShowInfo label="Tên chủ đầu tư" text={_.get(props.item, 'name')}></ShowInfo>
                        </Item>
                        <Item hard column={5}>
                            <ShowInfo label="Chủ đầu tư" text={_.get(props.item, 'type')}></ShowInfo>
                        </Item>
                    </Line>
                    <Line>
                        <Item hard column={5}>
                            <ShowInfo label="Số năm kinh nghiệm" text={_.get(props.item, 'experience')}></ShowInfo>
                        </Item>
                        <Item hard column={5}>
                            <ShowInfo link={_.get(props.item, 'website')} label="Website chủ đầu tư" text={_.get(props.item, 'website')}></ShowInfo>
                        </Item>
                    </Line>
                </Item>
                <Item hard column={5} src={_.get(props.item, 'image')}>
                </Item>
            </WrapperContent>

        </Wrapper>
    );
}

Investor.propTypes = {
    item: PropTypes.object,
};

export default Investor;