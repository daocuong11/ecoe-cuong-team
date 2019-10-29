import React from 'react';
import PropTypes from 'prop-types';
import { APPARTMENT } from "constants/projectDetail";
import Wrapper, { TitleSection, WrapperItem, Item, Title } from './Wrapper';
import { Link } from "../Wrapper"
import * as _ from "lodash";

const InvestorDocument = (props) => {
    return (
        <Wrapper>
            <TitleSection>{_.get(props, 'title')}</TitleSection>
            <WrapperItem>
                {
                    _.map(props.items, function (item) {
                        return (
                            <Item key={_.get(item, 'id')}>
                                <Title>{_.get(item, 'name')}</Title>
                                <Link href={_.get(item, 'link')}>Tải tài liệu</Link>
                            </Item>
                        )
                    })
                }
            </WrapperItem>
        </Wrapper>
    );
}

InvestorDocument.propTypes = {
    items: PropTypes.array,
};

export default InvestorDocument;