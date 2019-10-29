import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IconLogin } from "UIElement/Icon";

const BorderLogin = styled.div`
    float: right;
    height: 100%;
    display: inline-flex;
    align-items: center;    
`;

const Wrapper = styled.div`
    display: inline-block;
    cursor: pointer;
`;

const Text = styled.div`
    display: inline-block;
    /* 
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    */
    font-size: ${props => props.theme.fontSize.normal};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.textColor.white};
    margin-left: 10px;
`;



const ButtonLogin = (props) => {
    return (
      <BorderLogin>
        <Wrapper
            className={props.className}
            isPush={props.isPush}
            type={props.type}
            onClick={props.onClick}
            isSearchResultPage={props.isSearchResultPage}
            domainType={props.domainType}
        >
            <IconLogin width={12} height={12} fill="#fff" />
            <Text>{props.label}</Text>
        </Wrapper>
      </BorderLogin>
    );
}

ButtonLogin.propTypes = {
    class: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func
};

export default ButtonLogin;