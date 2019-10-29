import React, { Component, Fragment } from 'react';
import * as _ from 'lodash';
import PropTypes from 'prop-types';

import { Nav, NavItem, Watermark } from './Wrapper';

class TabNavs extends Component {

	static propTypes = {
		steps: PropTypes.array.isRequired,
		index: PropTypes.number.isRequired,
		activeTab: PropTypes.func
	};


	activeTab = (index) => () => {
		let { steps } = this.props;

		let item = _.get(steps, index);
		if(_.get(item, 'enable')) {
			_.isFunction(this.props.activeTab) && this.props.activeTab(index);
		}
	};

	render() {
		let {steps, index} = this.props;
		return (
			<Fragment>
				<Nav>
					{
						_.map(steps, (item, i) => (
							<NavItem key={i} active={index === i} enable={_.get(item, 'enable')} onClick={this.activeTab(i)}>
								<Watermark>{_.get(item, 'watermark')}</Watermark>
								{_.get(item, 'name')}
							</NavItem>
						))
					}
				</Nav>
			</Fragment>
		)
	}
}

export default TabNavs;