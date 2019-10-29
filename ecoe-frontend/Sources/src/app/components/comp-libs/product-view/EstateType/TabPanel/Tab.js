import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { relative } from 'path';

const Item = styled.li`
  display: inline-block;
  list-style: none;
  padding: ${props=>!props.level ? "20px 50px" : "30px 0 10px"};
  margin-right: ${props=>props.level && "30px"};
  min-width: ${props=>props.level && "130px"};
  color: ${props=>props.theme.textColor.primaryBlue};
  font-size: ${props=>props.theme.fontSize.medium18};
  font-weight: ${props=>props.theme.fontWeight.semiBold};
  text-transform: ${props=>!props.level && "uppercase"};
  cursor: pointer;

  &:last-child {
    margin-right: ${props=>props.level && "0"};
  }

  &:hover {
    color: ${props=>props.theme.textColor.primaryGreen};
  }
`;

class Tab extends Component {
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
        activeTab,
        label,
        level,
      },
    } = this;

    let activeStyle;

    if (activeTab === label && level===undefined) {
      activeStyle = {
        color: "#00837b",
        background: "#fff",
      }
    }

    if (activeTab === label && level) {
      activeStyle = {
        position: "relative",
        top: "2px",
        color: "#00837b",
        borderBottom: "2px solid #00837b",

      }
    }

    return (
      <Item
        level={level}
        style={activeStyle}
        onClick={onClick}
      >
        {label}
      </Item>
    );
  }
}

export default Tab;