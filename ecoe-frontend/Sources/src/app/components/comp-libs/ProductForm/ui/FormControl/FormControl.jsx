import React, { Component, Fragment, createRef } from 'react';
import { FormControl as Input, Wrapper, Error } from './Wrapper';
import PropTypes from 'prop-types';
import Cleave  from 'cleave.js';
import _ from 'lodash';

const ERRORS = {
	REQUIRED: 'Thông tin bắt buộc',
	FORMAT: 'Thông tin không hợp lệ',
};

class FormControl extends Component {

	static propTypes = {
		number: PropTypes.bool,
		date: PropTypes.bool,
		onChange: PropTypes.func
	};

	constructor(props, context) {
		super(props, context);
		this.$input = createRef();
		this.$cleave = null;

		this.state = {
			error: null,
			isDirty: false
		};
	}


	componentDidMount() {

		this.onChange({target: this.$input.current});
	}


	numberFormat = (value) => {

		return new Cleave.NumeralFormatter().format(value);
	};

	dateFormat = (value) => {
		value = value.replace(/[^\d]/g, '');
		return Cleave.Util.getFormattedValue(value, [2, 4], 2, '/', []);
	};

	onChange = (e) => {
		let { validity } = e.target || e.current;
		let { onChange, number, date } = this.props;
		
		let state = {};

		if(!_.get(validity, 'valid'))
		{
			if(_.get(validity, 'valueMissing')) state.error = 'REQUIRED';
			else state.error = 'FORMAT';
		}
		else
		{
			state.error = null;
		}
		
		this.setState(state);

		if(number) {
			e.target.value = this.numberFormat(e.target.value);
		}

		if(date) {
			e.target.value = this.dateFormat(e.target.value);
		}

		_.isFunction(onChange) && onChange(e);
	};

	onFocus = () => {
		this.setState({
			isDirty: true
		});
	};

	componentWillUnmount() {
		if(this.$cleave) {
			this.$cleave.destroy();
		}
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {

		if(!_.isEqual(nextState, this.state)) {
			return true;
		}

		return nextProps.value !== this.props.value;
	}

	render() {
		let { error, isDirty } = this.state;
		let props = this.props;

		return (
			<Wrapper block={props.block}>
				<Input {...props} ref={this.$input} onChange={this.onChange} isDirty={isDirty} onFocus={this.onFocus} />

				{error && isDirty && (<Error>{_.get(ERRORS, error)}</Error>)}
			</Wrapper>
		);
	}
}

export default FormControl;