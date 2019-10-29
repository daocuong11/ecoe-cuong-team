import React from 'react';
import styled from 'styled-components';
import { IconEye } from 'UIElement/Icon';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    display: flex;
    width: 170px;
    height: 54px;
    background: ${props=>props.theme.background.white};
    align-items: center;
    justify-content: center;
    border-top-left-radius: 27px;
    border-bottom-left-radius: 27px;
    cursor: pointer;
`;

const Text = styled.div`
    display: inline-block;
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    color: ${props => props.theme.textColor.primaryBlue};
    font-weight: ${props => props.theme.fontWeight.semiBold};
    font-size: 13px;    
    line-height: 1;
    padding-left: 8px;
`;

const ButtonSubdomain = (props) => {
    return (
        <Wrapper as="a" href={props.link} target="_blank">
            <IconEye width={22} height={15} fill="#00837B"/>
            <Text>{props.label}</Text>
        </Wrapper>
    );
}

ButtonSubdomain.propTypes = {
    label: PropTypes.string,
    link: PropTypes.string
};

export default ButtonSubdomain;