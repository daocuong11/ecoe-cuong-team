import React from 'react';
import Wrapper, {Label,ImgCustom, Overlay } from './Wrapper';
import PropTypes from 'prop-types';
import * as _ from "lodash";

const ItemCategory = (props) => {
  return (
    <Wrapper onClick={props.onClick.bind(this,props.item)}>
        <ImgCustom src={_.get(props,'thumb')} alt={_.get(props,'alt')} />
        <Overlay/>
        <Label>{_.get(props,'label')}</Label>
    </Wrapper>
  );
};

ItemCategory.propTypes = {
  thumb: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string,
};

export default ItemCategory;