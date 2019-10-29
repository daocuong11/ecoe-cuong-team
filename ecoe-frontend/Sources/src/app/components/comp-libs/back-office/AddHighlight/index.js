import React from 'react';
import PropTypes from 'prop-types';

import Wrapper, { Label } from './Wrapper';
import { AdditionSign } from 'UIElement/Icon'

const AddHighlight = (props) => {
    return (
        <Wrapper group="Management" onClick={props.onClick}>
            <AdditionSign width={36} height={36} stroke="#00837b" />
            <Label>{props.label}</Label>
        </Wrapper>
    );
}

AddHighlight.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
  };

export default AddHighlight;

