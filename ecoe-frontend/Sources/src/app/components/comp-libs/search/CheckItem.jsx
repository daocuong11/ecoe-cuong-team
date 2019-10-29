import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import { CheckBoxWrap, CheckBox } from './Wrapper';

class CheckItem extends Component {

    static propTypes = {
        children: PropTypes.element,
        type: PropTypes.oneOf(['vertical', 'horizontal']),
        id: PropTypes.any,
        checked: PropTypes.bool,
        hidden: PropTypes.bool
    };


    onChange = (e) => {
        let id = this.props.id;
        return this.props.onChange(e.target.checked, id);
    };

    render() {
        return (
            <CheckBoxWrap vertical={_.get(this.props, 'type') === 'vertical'} horizontal={_.get(this.props, 'type') === 'horizontal'} hidden={_.get(this.props, 'hidden')}>
                {!_.get(this.props, 'hidden') && <CheckBox onChange={this.onChange} checked={_.get(this.props, 'checked')}/>}
                {this.props.children}
            </CheckBoxWrap>
        );
    }
}

export default CheckItem;