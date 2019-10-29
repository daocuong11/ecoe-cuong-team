import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import *  as _ from 'lodash';
import { devices } from "globalUtils/styledUtils";

const Nav = styled('ul')`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    justify-content: flex-start;
    position: relative;
    top: 1px;
    ${devices.sm`
      padding-left: 15px;
    `}
    ${devices.md`
      padding-left: 15px;
    `}
    ${devices.lg`
      padding-left: 15px;
    `}
`;

const NavItem = styled('li').attrs(({ active }) => ({
  color: "#fff",
  activeColor: "#fff",
}))`
    margin: auto 15px;
    color: ${props=>props.color};
    font-size: 14px;
    font-weight: bold;
    font-family: Quicksand, sans-serif;
    text-transform: uppercase;
    padding-bottom: 17px;
    ${props => props.active && `color: #fff;
      opacity: 1;
      border-bottom: 2px solid #fff;`
    }

    &:first-child {margin-left: 0;}

    &:last-child {margin-right: 0;}
    cursor: pointer;

`;


const Header = (props) => {
  return (
    <Nav>
      {
        props.listMenu.map((item, index) =>
          <NavItem key={index} active={item.key===props.active} onClick={props.onClick && props.onClick.bind(this, item)}>
              {_.get(item, 'name')}
          </NavItem>
        )
    }
    </Nav>
  );
}

Header.propTypes = {
  listMenu: PropTypes.array,
};

export default Header;