import React, { Component } from 'react';
import { RadioButton, CheckMark } from './Wrapper';
import * as _ from 'lodash';

class Radio extends Component {
	render() {
		return (
			<RadioButton className={this.props.className}>
				<input type="radio" {..._.omit(this.props, ['children'])} />
				<CheckMark />
				<span>{this.props.children}</span>
			</RadioButton>
		)
	}
}

export default Radio;