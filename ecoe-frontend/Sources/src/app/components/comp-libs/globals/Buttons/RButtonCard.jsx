import React from 'react';
import Wrapper, { Item, LabelButtonRight, StyleRightButton } from './Wrapper';
import PropTypes from 'prop-types';

const RButtonCard = (props) => {
  return (
    <Item>
      <StyleRightButton type={props.type} onClick={props.onClick}>
        <LabelButtonRight>{props.label}</LabelButtonRight>
      </StyleRightButton>
    </Item >
  );
}

RButtonCard.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default RButtonCard;