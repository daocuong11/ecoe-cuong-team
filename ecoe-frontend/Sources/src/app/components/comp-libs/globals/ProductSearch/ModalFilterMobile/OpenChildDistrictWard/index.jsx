import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import { NextArrow } from 'UIElement/Icon';

class OpenChildDistrictWard extends Component {
    render() {
        let title = this.props.title ? this.props.title : "Title";
        
        return (
            <Wrapper title={title} onClick={this.props.onClick}>
                <span>{title}</span>
                <NextArrow width={6} height={10} stroke="#748cad" />
            </Wrapper>
        )
    }
}

OpenChildDistrictWard.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
};

export default OpenChildDistrictWard;