import React, { Component, Fragment } from 'react';
import { createStore, withStore } from './store';
import Model from '../models/commerce';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

class FormData extends Component {

	static propTypes = {
		name: PropTypes.string.isRequired,
		root: PropTypes.bool
	};

	componentDidMount() {
		this.initState();
	}

	componentWillUpdate(nextProps, nextState, nextContext) {

		let {store} = nextProps;
		let data = store.getAll();
		this.saveLocalStorage(data);
	}

	saveLocalStorage = (data) => {
		let {name, root} = this.props;

		if(root) {
			Model.setInfo(name, {...data});
		}
	};

	initState = () => {
		let name = _.get(this.props, 'name');
		let data = Model.getInfo(name);

		_.each(data, (value, key) => {
			key && this.props.store.set(key, value);
		});
	};

	render() {

		let {children} = this.props;

		return (
			<Fragment>
				{children}
			</Fragment>
		)
	}
}

export default createStore(withStore(FormData));