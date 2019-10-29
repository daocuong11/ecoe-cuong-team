import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { LABEL_PROJECT } from "constants/labelActionForCard";
import FinanceCardProject from './FinanceCardProject';
import FinanceCardHome from './FinanceCardHome';

const FinanceCard = (props) => {
  let { productType } = props.product;
  let domainType = props.domainType;
  
  return (
    <Fragment>
      {(productType === LABEL_PROJECT) ? (
        <FinanceCardProject product={props.product} domainType={domainType} />
      ) : (
        <FinanceCardHome product={props.product} domainType={domainType} />
      )}
    </Fragment>
  );
}

FinanceCard.propTypes = {
  product: PropTypes.object,
  domainType: PropTypes.string,
};

export default FinanceCard;