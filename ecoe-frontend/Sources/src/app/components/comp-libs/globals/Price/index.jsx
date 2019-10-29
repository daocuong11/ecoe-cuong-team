import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LABEL_PROJECT } from "constants/labelActionForCard";

import Wrapper from './Wrapper';

const PriceStyle = styled.div`
  display: inline-block;
  text-align: left;
  font-size: ${props=>props.theme.fontSize.large};
  font-weight: ${props=>props.theme.fontWeight.bold};
  color: ${props=>props.theme.textColor.primaryBlue};
`;

const Span = styled.span`
  font-size: ${props=>props.theme.fontSize.unit};
`;

const Price = (props) => {
  let { BasePrice, TotalPrice } = props.Finance;
  return (
    <Wrapper>
      {props.ProductType.ProductType === LABEL_PROJECT ? (
        <PriceStyle> {BasePrice} </PriceStyle>
      ) : (
        <PriceStyle> {TotalPrice} <Span>tỷ</Span></PriceStyle>
      )}
    </Wrapper>
  );
}

Price.propTypes = {
  Finance: PropTypes.object,
  ProductType: PropTypes.string
};

export default Price;