import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

import { TabContent } from './Wrapper';

class Tab extends Component {

	static propTypes = {
		addTab: PropTypes.func,
		active: PropTypes.bool
	};

	constructor(props) {
		super(props);
		this.id = this.props.id || _.join(['tab', _.random(0, Number.MAX_SAFE_INTEGER)], '-');
	}

	componentDidMount() {
		this.props.addTab({
			id: this.id,
			title: this.props.title,
			active: this.props.active
		});
	}

	render() {
		return (
			<TabContent show={_.get(this.props, 'activeTab.id') === this.id}>
				{this.props.children}
			</TabContent>
		)
	}
}

export default Tab;