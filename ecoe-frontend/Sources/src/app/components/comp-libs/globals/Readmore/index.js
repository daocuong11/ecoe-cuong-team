import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {getSearchCategoryUrl} from "globalUtils/getSearchCategoryUrl";
import {updateFilterByCategory} from "globalUtils/updateFilterByCategory";

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
`;

const ButtonStyle = styled.div`
    display: inline-block;
    height: 40px;
    background: ${props => props.theme.background.white};
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSize.normal};
    color: ${props => props.theme.textColor.primaryGreen};

    padding-left: 15px;
    padding-right: 15px;
    border: 1px solid ${props => props.theme.background.primaryGreen};
    cursor: pointer;

    &:hover{
        background: ${props => props.theme.background.primaryGreen};
        color: ${props => props.theme.textColor.white};
    }
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-transform: uppercase;
  font-weight: 700;
`;


class Readmore extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        let url = getSearchCategoryUrl();
        return (
            <Wrapper>
                <ButtonStyle as="a" href={url} onClick={()=>{
                    localStorage.setItem("categorySearch",this.props.category);
                    updateFilterByCategory(this.props.category);
                    }}>
                    <Label>{`Xem tất cả (${this.props.number}+ sản phẩm)`}</Label>
                </ButtonStyle>
            </Wrapper >
        )
    }

};

Readmore.propTypes = {
    number: PropTypes.number
}

export default Readmore;