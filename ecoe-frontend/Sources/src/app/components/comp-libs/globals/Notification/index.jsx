import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

const Notification = (props) => {
  return (
    <Wrapper 
      num={props.num} 
      isSearchResultPage={props.isSearchResultPage} 
      domainType={props.domainType}
    />
  )
}

Notification.propTypes = {
  num: PropTypes.number,
};

export default Notification;