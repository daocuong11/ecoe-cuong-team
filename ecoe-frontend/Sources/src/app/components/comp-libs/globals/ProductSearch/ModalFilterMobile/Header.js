import React from "react";
import PropTypes from 'prop-types';
import { HeaderWrapper, Left, Right } from "./Wrapper";
import { Return } from 'UIElement/Icon';


const Header = (props) => {
    let title = props.title ? props.title : "Quay lại";

    return (
        <HeaderWrapper>
            <Left onClick={props.backHandler}>
                <Return width='16px' height='16px' stroke='#748cad' />
                <span>{title}</span>
            </Left>

            <Right onClick={props.actApply}>
                Áp dụng
            </Right>
        </HeaderWrapper>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    actReturn: PropTypes.func,
    actApply: PropTypes.func,
};

export default Header;