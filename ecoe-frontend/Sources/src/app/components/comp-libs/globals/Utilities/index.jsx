import React from 'react';
import PropTypes from 'prop-types';
import { Utility, UtilityStyle } from './Wrapper';

import { SD_FO } from "constants/domainType";

import IconBed from '../../../../images/icons/icon-bed.svg';
import IconBath from '../../../../images/icons/icon-bath.svg';
import IconArea from '../../../../images/icons/icon-area.svg';
import IconDirection from '../../../../images/icons/icon-direction.svg';

const Utilities = (props) => {
  let domainType = props.domainType;
  let {beds, baths, areas, direction} = props.utilities;

  return (
    <UtilityStyle>
      <Utility typeIcon={IconBed}>{beds ? beds : "-"}</Utility>
      <Utility typeIcon={IconBath}>{baths ? baths : "-"}</Utility>
      <Utility typeIcon={IconArea}>{areas ? areas : "-"}</Utility>
      {domainType === SD_FO && ( 
        <Utility typeIcon={IconDirection}>{direction ? direction : "-"}</Utility>
      )}      
    </UtilityStyle>
  );
}

Utilities.propTypes = {
  domainType: PropTypes.string,
  utilities: PropTypes.object,
};

export default Utilities;