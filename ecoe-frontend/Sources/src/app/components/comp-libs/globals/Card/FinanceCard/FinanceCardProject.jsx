import React from 'react';
import PropTypes from 'prop-types';
import { SD_FO } from "constants/domainType";
import Wrapper, { CommissionStyle, FinanceStyle, Span } from './Wrapper';



const FinanceCardProject = (props) => {
  let { basePrice, commission } = props.product;
  let domainType = props.domainType;
  return (
    <Wrapper>
      {!(domainType === SD_FO) && (
          <CommissionStyle> {commission} </CommissionStyle>
      )}
      <FinanceStyle> {basePrice} <Span>triệu/m2</Span> </FinanceStyle>      
    </Wrapper>
  );
}

FinanceCardProject.propTypes = {
  product: PropTypes.object,
  domainType: PropTypes.string,
};

export default FinanceCardProject;