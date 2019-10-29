import React from 'react';
import styled from 'styled-components';
import { BorderLike } from 'UIElement/Icon';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    display: inline-block;
    cursor: pointer;
`;

const Button = styled.div`
    display: inline-flex;
    align-items: center;
    position: relative;
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-size: ${props => props.theme.fontSize.normal};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.textColor.primaryBlue};
    background: #fff;
    padding: 10px 20px;
    > span {
        line-height: 1;
        padding-left: 10px;
    }
`;

const ButtonFavorite = (props) => {
    return (
        <Wrapper as="a" href={props.url}>
            <Button>
                <BorderLike width={16} height={16} fill="#cc2f00" />
                <span>Yêu thích</span>
            </Button>
        </Wrapper>
    );
}

ButtonFavorite.propTypes = {
    url: PropTypes.string,
};

export default ButtonFavorite;