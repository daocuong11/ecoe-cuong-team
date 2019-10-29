import React from 'react';
import styled from 'styled-components';
import { FilterMobile } from 'UIElement/Icon';
import { LABEL_FILTER } from 'constants/labelActionForCard';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    position: relative;
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-size: ${props => props.theme.fontSize.normal};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.textColor.primaryBlue};
    > span {
        line-height: 1;
        padding-left: 10px;
    }
    cursor: pointer;
`;

const ButtonFilterMobile = (props) => {
    return (
        <Wrapper onClick={props.onClick}>
            <FilterMobile width={16} height={16} fill="#00837c" />
            <span>{LABEL_FILTER}</span>
        </Wrapper>
    );
}

ButtonFilterMobile.propTypes = {
    onClick: PropTypes.func,
};

export default ButtonFilterMobile;