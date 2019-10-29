import React, { Component } from "react";
import PropTypes from 'prop-types';

import { LABEL_CLEARALL } from 'constants/labelActionForCard';
import { ResetFilter } from 'UIElement/Icon';
import Wrapper from './Wrapper'

class ClearAll extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <Wrapper onClick={this.props.onClick}>
                <ResetFilter width='16px' height='16px' fill="#5d7a9e" />
                <span>{LABEL_CLEARALL}</span>
            </Wrapper>
        )
    }
}

ClearAll.propTypes = {
    onClick: PropTypes.func,
};

export default ClearAll;