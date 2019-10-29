import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSearch from "images/icons/icon-search-white.svg";

export const Form = styled.form `
    position: relative;
`;

export const Input = styled.input`
    height: 74px;
    width: 70%;
    /* background: ${props => props.bg}; */
    background: #fff;
    border: none;
    box-sizing: border-box;
    padding: 0 64px 0 20px;
    color: rgba(0, 0, 0, .4);
    font-size: 13px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.175);
    &::placeholder {
        color: rgba(0, 0, 0, .4);
        opacity: .7;
    }
`;

export const ButtonBoder = styled.div `
    position: absolute;
    right: 33%;
    top: 19px;
    width: 34px;
    height: 34px;
    overflow: hidden;
`;

export const ButtonSearch = styled.button `
    width: 34px;
    height: 34px;
    background: #00837B url(${IconSearch}) no-repeat center;
    border: none;
    cursor: pointer;
`;