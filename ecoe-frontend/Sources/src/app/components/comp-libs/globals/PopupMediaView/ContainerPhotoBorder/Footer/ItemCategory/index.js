import React from 'react';
import Wrapper, {Label,ImgCustom, Overlay } from './Wrapper';
import PropTypes from 'prop-types';

const ItemCategory = (props) => {
  return (
    <Wrapper onClick={props.onClick? props.onClick.bind(this,props.index): undefined}>
        <ImgCustom src={props.thumb} alt={props.name} />
        {!props.activeIndex && <Overlay/>}
    </Wrapper>
  );
};

ItemCategory.propTypes = {
  thumb: PropTypes.string,
  label: PropTypes.string,
  subLabel: PropTypes.string,
};

export default ItemCategory;