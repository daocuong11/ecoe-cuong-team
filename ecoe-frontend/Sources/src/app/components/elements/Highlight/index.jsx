import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './Wrapper';
import { ACT_HIGHLIGHT } from 'constants/labelActionForCard';
const Highlight = (props) => {
    return (
      <Label>{props.text ? props.text : ACT_HIGHLIGHT}</Label>
    );
}

Highlight.propTypes = {
    text: PropTypes.string,
};

export default Highlight;