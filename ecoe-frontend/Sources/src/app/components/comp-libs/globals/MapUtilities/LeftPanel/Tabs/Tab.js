import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.li`
    display: inline-block;
    list-style: none;
    padding: 15px 10px;
    min-width: 96px;
    border-radius: 2px;
    ${props=> props.active ?`
      color: ${props.disabled? '#ccc':props.theme.textColor.primaryGreen};
      background: #fff;
      box-shadow: ${props.isPopup?'none':'-8px 1px 9px #ccc'};`:`
      color: ${props.disabled? '#ccc':props.theme.textColor.hotArea};
      `
    }
    font-size: ${props=>props.theme.fontSize.small};
    font-family: ${props=>props.theme.fontTypeFace.fontQuicksand};
    font-weight: ${props=>props.theme.fontWeight.bold};
    text-align: center;
    cursor: pointer;
    svg path, svg circle, svg rect{
      ${props=> props.active ?`
        fill: ${props.disabled? '#ccc':props.theme.textColor.primaryGreen}`:`
        fill: ${props.disabled? '#ccc':props.theme.textColor.hotArea};`
      }
    }
`;

class Tab extends Component {
  constructor(props){
    super(props);
    this.state={
      active: props.activeTab === props.label
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    this.setState({
           active : nextProps.activeTab===nextProps.label
       })
  }
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        label,
        level,
        icon,
        disabled,
        isPopup
      },
    } = this;

    let activeStyle;    
    return (
      <Item
        level={level}
        style={activeStyle}
        onClick={onClick}
        active={this.state.active}
        disabled={disabled}
        isPopup={isPopup}
      >
        {icon}
        <div>{label}</div>
      </Item>
    );
  }
}


export default Tab;