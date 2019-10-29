import React from 'react';
import Wrapper, { Item, LabelButtonLeft, StyleLeftButton } from './Wrapper';
import PropTypes from 'prop-types';

const LButtonCard = (props) => {
  return (
    <Item group={props.group}>
      <StyleLeftButton onClick={props.onClick}>     
        <LabelButtonLeft label={props.label}> {props.label} </LabelButtonLeft>
      </StyleLeftButton>
    </Item >
  );
}

LButtonCard.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default LButtonCard;