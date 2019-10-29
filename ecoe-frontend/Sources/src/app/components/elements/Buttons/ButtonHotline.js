import React from 'react';
import styled from 'styled-components';
import { IconHotline } from 'UIElement/Icon';
import PropTypes from 'prop-types';
import { relative } from 'path';

const Wrapper = styled.div`
    cursor: pointer;
`;

const Text = styled.div`
    display: inline-block;
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-size: ${props => props.theme.fontSize.normal};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.textColor.white};
    margin: auto 15px;
`;

const ButtonHotline = (props) => {
    return (
        <Wrapper as="a" href={"tel:" + props.brokerHotline}>
            <div style={{ display: "inline-block", position: "relative", left: "8px", bottom: "-4px" }}>
                <IconHotline width={16} height={16} fill="#fff" />
            </div>
            <Text>{props.brokerHotline}</Text>
        </Wrapper>
    );
}

ButtonHotline.propTypes = {
    brokerHotline: PropTypes.string,
};

export default ButtonHotline;