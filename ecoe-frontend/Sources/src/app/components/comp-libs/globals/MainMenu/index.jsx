import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../../../../../../src/constants/theme';
import A from '../../../elements/A';

const Ul = styled.ul`
  width: 70%;
  text-align: right;
  font-size: 1em;
  font-weight: 700;
  color: ${props => theme.textColor.secondaryMe};
`;

const Li = styled.li`
  display: inline-block;
  list-style-type: none;
  text-transform: uppercase;
  padding: 0 30px;
`;

const MainMenuNew = (props) => {
  return (
    <Ul>
      {    
          props.listMenu.map((item,index) =>
            
            <Li key={index}>

              <A url={item.link} value={item.name} />
            </Li>
          )
      }
    </Ul>
  );
}

MainMenuNew.propTypes = {
  listMenu: PropTypes.array
};

export default MainMenuNew;
















/*

///////////////////
// MenuContainer //
///////////////////
const MenuContainer = (props) => {()
  constructor(props) {
    super(props)
    
    this.state = {
      activeItem: '',
      activeItemPosition: 0,
      activeItemColor: '',
      menuItems: [
        { text: 'Home' },
        { text: 'Gallery' },
        { text: 'About' },
        { text: 'Blog' },
        { text: 'Contact' },
      ],
    }
    
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(activeItem) {
    return e => {
      e.preventDefault()
    
      this.setState({
        activeItem,
        activeItemPosition: document.getElementById(activeItem).offsetTop,
        activeItemColor: window.getComputedStyle(document.getElementById(activeItem)).getPropertyValue('background-color'),
      })
    }
  }
  
  render() {
    const menuItems = this.state.menuItems.map(item => <MenuItem item={ item } handleClick={ this.handleClick }/>)
    return (
      <div className='menu-container'>
        <span className='menu-item--active' style={{ top: this.state.activeItemPosition, backgroundColor: this.state.activeItemColor }}/>
        { menuItems }
      </div>
    )
  }
}

///////////////////
// MenuItem      //
///////////////////
const MenuItem = (props) => {
  return (
    <div 
      className='menu-item'
      id={ props.item.text }
      onClick={ props.handleClick(props.item.text) }
    >
      { props.item.text.toUpperCase() }
    </div>
  )
}
*/