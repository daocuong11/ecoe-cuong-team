import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from "globalConstants/theme";

import { SD_BO } from "constants/domainType";
import IconSearch from "images/icons/icon-search.svg";
const placeholderLabel = 'Tìm kiếm sản phẩm, môi giới hoặc khách hàng ...';

const Form = styled.form`
    position: relative;
`;

const Input = styled.input.attrs(({ domainType }) => ({
    bg:  domainType === SD_BO ? theme.background.primaryBlue : theme.background.darkGreen,
}))`
    height: 54px;
    width: 100%;
    /* background: ${props => props.bg}; */
    background: rgba(0, 0, 0, .4);
    border: none;
    box-sizing: border-box;
    padding: 0 64px 0 20px;
    color: #fff;
    font-size: 13px;

    &::placeholder {
        color: #fff;
        opacity: .7;
    }
`;

const ButtonBoder = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    width: 34px;
    height: 34px;
    overflow: hidden;
`;

const ButtonSearch = styled.button`
    width: 34px;
    height: 34px;
    background: #fff url(${IconSearch}) no-repeat center;
    border: none;
    cursor: pointer;

    &:hover {
        transform: scale(1.8); 
    }
`;

const SearchContent = (props) => {
    let domainType = props.domainType;
    return (
        <Fragment>
            <Form action="" id="searchContent">
                <Input domainType={domainType} type="text" name="search" placeholder={placeholderLabel} autocomplete="on" />
                <ButtonBoder>
                    <ButtonSearch onClick={props.onClick} />
                </ButtonBoder>
            </Form>
        </Fragment>
    );
}

SearchContent.propTypes = {
    domainType: PropTypes.string,
    onClick: PropTypes.func
};

export default SearchContent;