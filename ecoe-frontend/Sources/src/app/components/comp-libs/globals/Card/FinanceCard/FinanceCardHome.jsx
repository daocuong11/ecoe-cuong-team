import React from 'react';
import PropTypes from 'prop-types';
import { SD_FO } from "constants/domainType";
import Wrapper, { CommissionStyle, FinanceStyle, Span } from './Wrapper';

const FinanceCardHome = (props) => {
  let { totalPrice, commission } = props.product;
  let domainType = props.domainType;
  
  return (
    <Wrapper>
      {!(domainType === SD_FO) && (
          <CommissionStyle> {commission} </CommissionStyle>
      )}
      <FinanceStyle> {totalPrice} <Span>tỷ</Span> </FinanceStyle>
    </Wrapper>
  );
}

FinanceCardHome.propTypes = {
  product: PropTypes.object,
  domainType: PropTypes.string,
};

export default FinanceCardHome;