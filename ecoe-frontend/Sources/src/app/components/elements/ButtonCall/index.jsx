import React from 'react';
import PropTypes from 'prop-types';
import { Phone } from './Wrapper';
import Hyperlink from '../Hyperlink';

const ButtonCall = (props) => {
    return (
      <Hyperlink url={"tel:"+ props.hotline}>
        <Phone/>
      </Hyperlink>
    );
}

ButtonCall.propTypes = {
    hotline: PropTypes.string,
};

export default ButtonCall;