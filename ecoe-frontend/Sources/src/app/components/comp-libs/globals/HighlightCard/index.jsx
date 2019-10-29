import React from 'react';
import Wrapper, { ItemBorder, Item, Label, Number, EffectItem } from './Wrapper';
import PropTypes from 'prop-types';
import ImageDefault from 'images/products/highlight-default.png';
//import IconDefault from 'images/icons/icon-interior.svg';
import Img from '../../../elements/Img';

const HighlightCard = (props) => {
  let ImageUrl = props.image ? props.image : ImageDefault;
  // let Icon = props.Icon !==null ? props.Icon : IconDefault;

  return (
    <Wrapper type={props.type}>
      <ItemBorder>
        <Item Image={ImageUrl}>
          <EffectItem>
            <Img src={props.icon} alt="Bất động sản cùng ECOE" />
          </EffectItem>
        </Item>
        
        <Label>{props.label}</Label>
        <Number>{props.number}</Number>
      </ItemBorder>
    </Wrapper>
  );
};

HighlightCard.propTypes = {
  image: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  number: PropTypes.string,
};

export default HighlightCard;