import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import *  as _ from 'lodash';
import { NavLink } from 'react-router-dom';
//import { SR } from "globalConstants/domainType";

const Nav = styled('ul')`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    justify-content: flex-end;
`;

const NavItem = styled('li').attrs(({ isSearchResultPage }) => ({
  color: isSearchResultPage ? "#0A2240" : "#fff",
  opacity: isSearchResultPage ? 1 : 0.6,
  activeColor: isSearchResultPage ? "#00837B" : "#fff",
}))`
    margin: auto 15px;
    color: ${props=>props.color};
    font-size: 14px;
    font-weight: bold;
    font-family: Quicksand, sans-serif;
    text-transform: uppercase;

    &:first-child {margin-left: 0;}

    &:last-child {margin-right: 0;}
    a {
      padding-bottom: 10px;
      opacity: ${props=>props.opacity};
      color: unset;
      &.active {
        color: ${props=>props.activeColor};
        opacity: 1;
        border-bottom: 2px solid ${props=>props.activeColor};
      }
    }
`;


const MainMenu = (props) => {
  let isSearchResultPage = props.isSearchResultPage;
  return (
    <Nav>
      {
        props.listMenu.map((item, index) =>
          <NavItem key={index} isSearchResultPage={isSearchResultPage} >
            <NavLink activeClassName="active" to={_.get(item, 'link')}>            
              {_.get(item, 'name')}
            </NavLink>
          </NavItem>
        )
    }
    </Nav>
  );
}

MainMenu.propTypes = {
  listMenu: PropTypes.array,
  isSearhResultPage: PropTypes.bool,
};

export default MainMenu;