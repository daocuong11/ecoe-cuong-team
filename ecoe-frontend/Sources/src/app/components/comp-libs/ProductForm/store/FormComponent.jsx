import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

import { withStore } from './store';

class FormComponent extends Component {
	static propTypes = {
		children: PropTypes.element.isRequired,
	};

	onChange = (child) => (e) => {
		let {store} = this.props;
		e.target.name && store.set(e.target.name, e.target.value);

		let onChange = _.get(child, 'props.onChange');
		_.isFunction(onChange) && onChange(e);
	};

	getValue = (child) => {
		let name = _.get(child, 'props.name');
		let store = _.get(this.props, 'store');

		return store.get(name);
	};

	render() {
		return (
			<Fragment>
				{
					React.Children.map(this.props.children, child =>
						React.cloneElement(child, {
							onChange: this.onChange(child),
							defaultValue: this.getValue(child)
						})
					)
				}
			</Fragment>
		)
	}
}

export default withStore(FormComponent);