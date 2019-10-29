import React from 'react';
import Wrapper, { ItemBorder, Label, SubLabel } from './Wrapper';
import PropTypes from 'prop-types';
import Img from '../../../elements/Img';

const HotArea = (props) => {
  return (
    <Wrapper type={props.type}>
      <ItemBorder header={props.header}>
        <Img src={props.icon} alt="Bất động sản cùng ECOE" />
        <Label header={props.header}>{props.label}</Label>
        <SubLabel header={props.header}>{props.subLabel}</SubLabel>
      </ItemBorder>
    </Wrapper>
  );
};

HotArea.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  subLabel: PropTypes.string,
};

export default HotArea;