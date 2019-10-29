import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { LogoStyle, LabelStyle } from './Wrapper';

import LogoDefault from "images/logo-ecoe/logo-ecoe-no-char.svg";

const Logo = (props) => {
    return (
        <Fragment>
            <LogoStyle src={props.source ? props.source: LogoDefault } size={props.size} />
            <LabelStyle>{props.label}</LabelStyle>
        </Fragment>
        
    );
}

Logo.propTypes = {
    source: PropTypes.string,
    type: PropTypes.string,
};

export default Logo;