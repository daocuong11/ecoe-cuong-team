import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

import IconListOff from 'images/icons/list-off.svg';
import IconListOn from 'images/icons/list-on.svg';
import IconGridOn from 'images/icons/grid-on.svg';
import IconGridOff from 'images/icons/grid-off.svg';
import DropdownFunctionCard from "../../elements/DropdownFunctionCard";

import {DropdownProductStatus } from 'UIElement/DropdownFunctionCard/Wrapper.jsx';
import CheckBorder from "../../elements/CheckBox/CheckBorder";

export const Nav = styled('ul')`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    justify-content: flex-end;
`;

export const NavItem = styled('li')`
    margin: auto 15px;
    color: #0A2240;
    font-size: 14px;
    font-weight: bold;
    font-family: Quicksand, sans-serif;
    
    a {
      padding-bottom: 10px;
      &.active {
        color: #00837B;
        border-bottom: 2px #00837B solid;
      }
    }
`;

export const BtnPost = styled('button')`
    font-size: 14px;
    font-weight: bold;
    font-family: Quicksand, sans-serif;
    background-color: #00837B;
    outline: 0;
    border: none;
    color: #fff;
    padding: 11px 22px;
`;

export const GroupSearch = styled('div')`
    display: inline-block;
    background: #F5F8F8;
    margin-left: 25px;
    input{
        height: 40px;
        border: none;
        background: transparent;
        width: 300px;
        outline: 0;
        padding: 15px;
    }
    
    button {
        height: 40px;
        width: 40px;
        border: none;
        background: transparent;
    }
`;

export const Navbar = styled('div')`
    background: #fff;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
`;

export const Container = styled('div')`
    max-width: 1366px;
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
`;

export const HeaderTop = styled('div')`
    height: 70px;
    background: #fff;
    display: flex;
    align-items: flex-end;
    padding-left: 30px;
    padding-right: 30px;
`;

export const BtnNav = styled('button')`

      background: transparent;
      border: 0;
      width: 30px;
      height: 30px;
      outline: 0;
      overflow: hidden;
      float: left;
      img {
         max-width: 30px;
         max-height: 30px;
         object-fit: fill;
      }
      
      && {
          margin-left: 25px;
      }
`;

export const Main = styled('div')`
    background: #F4FBFC;
    margin-top: 5px;
`;

export const FilterContainer = styled('div')`
    display: flex;
    height: 48px;
    line-height: 48px;
    background: #fff;
    border-bottom: 1px #E2E8F0 solid;
`;

export const Title = styled('span')`
    color: #0A2240;
    font-size: 24px;
    font-weight: 800;
`;

export const TitleBar = styled('div')`
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    position: relative;
`;

export const Total = styled('span')`
    color: #0A2240;
    font-size: 16px;
    
    margin-left: 24px;
`;

export const ListMode = styled('button')`
    outline: 0;
    border: 0;
    background: transparent;
    &::before {
        content: url(${props => props.active ? IconListOn : IconListOff});
        cursor: pointer;
    }
    
`;

ListMode.propTypes = {
    active: PropTypes.bool
};

export const GridMode = styled('button')`
    outline: 0;
    border: 0;
    background: transparent;
    &::before {
        content: url(${props => props.active ? IconGridOn : IconGridOff});
        cursor: pointer;
    }
    
    margin-left: 1rem;
    
`;

GridMode.propTypes = {
    active: PropTypes.bool
};

export const Right = styled('span')`
    float: right;
    margin-left: auto;
    line-height: normal;
`;

export const GridLayout = styled('div')`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(${props => props.columns > 0 ? props.columns : 'auto-fit'}, minmax(300px, 1fr));
   
    padding-bottom: 30px;
    column-gap: 35px;
    row-gap: 35px;
`;

GridLayout.propTypes = {
    columns: PropTypes.number
};


export const CheckBox  = styled(CheckBorder)``;
export const CheckBoxWrap = styled('div')`
    
    ${props => props.vertical && css`
        display: block;
       
        ${CheckBox} {
          margin-bottom: 10px;
        }
    `}
    
    ${props => props.horizontal && css`
        display: grid;
       grid-template-columns: ${props.hidden ? '100%' : '30px calc(100% - 30px)'};
       grid-template-rows: minmax(180px, auto);
    `}
    
    
`;

CheckBoxWrap.propTypes = {
    vertical: PropTypes.bool,
    horizontal: PropTypes.bool,
    hidden: PropTypes.bool
};


export const Div = styled('div')``;

export const MgLeft = styled('span')``;
export const RightSide = styled('div')`
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
` ;

export const CheckAllWrap = styled('div')`
    padding-top: 30px;
    padding-bottom: 30px;
    ${props => props.hidden && css`
        display: none;
    `}
`;

CheckAllWrap.propTypes = {
    hidden: PropTypes.bool
};

export const DropDown = styled(DropdownFunctionCard)`
    display: inline-block;
    background: transparent;
    
    ${DropdownProductStatus} {
        background: transparent;
        &::after {
            background: transparent;
        }
    }
`;
