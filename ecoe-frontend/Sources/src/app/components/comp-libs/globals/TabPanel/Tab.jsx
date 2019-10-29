import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Tab = (props) => {
  const { tabtext, activeTab, cardindex, onClick } = props,
        isActive = activeTab === cardindex ? ' active' : '';

  return (
    <div className={`tab${isActive}`} onClick={onClick}>
      {tabtext}
    </div>
  );
};

Tab.propTypes = {
    item: PropTypes.object
};

export default Tab;