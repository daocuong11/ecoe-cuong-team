import React, { Component, Fragment, createRef } from 'react';
import {FormControl} from "../ui/FormControl";
import Cleave from 'cleave.js';

class Datepicker extends Component {

	constructor(props) {
		super(props);
		this.input = createRef();
	}

	// componentDidMount() {
	// 	let cleave = new Cleave(this.input.current, {
	// 		date: true,
	// 		delimiter: '/',
	// 		datePattern: ['m', 'Y'],
	// 		onValueChanged: e => {
	// 			e.target.name = this.props.name;
	// 			this.props.onChange(e);
	// 		}
	// 	});
	// }

	render() {
		return (
			<Fragment>
				<FormControl {...this.props} ref={this.input} date/>
			</Fragment>
		);
	}
}

export default Datepicker;