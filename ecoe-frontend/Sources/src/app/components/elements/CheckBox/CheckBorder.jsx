import React, { Component } from 'react';

import { Checkbox, CheckMark, CheckTitle, Indeterminate } from './Wrapper';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

class CheckBorder extends Component {

    static propTypes = {
        indeterminate: PropTypes.bool
    };

    render() {
        return (
            <Checkbox className={this.props.className}>
                <input {..._.omit(this.props, 'indeterminate')} type="checkbox"/>
                { this.props.indeterminate ? <Indeterminate /> : <CheckMark/>}

                <CheckTitle style={{marginLeft: 30}}>{this.props.name}</CheckTitle>
            </Checkbox>
        );
    }
}


export default CheckBorder;