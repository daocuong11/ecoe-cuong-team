import React, { Component, Fragment } from 'react';
import Select from 'UIElement/Select';
import _ from 'lodash';
import PropTypes from 'prop-types';

class Ward extends Component {

	static propTypes = {
		selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	};

	getList = () => {
		return _.map(_.range(1, 20), item => {
			return {
				name: 'Phường ' + item,
				id: item
			}
		});
	};

	render() {

		let { selected } = this.props;

		return (
			<Fragment>
				<Select value={selected} {...this.props}>
					{
						_.map(this.getList(), (item) => (
							<option key={_.get(item, 'id')} value={_.get(item, 'id')}>
								{_.get(item, 'name', '')}
							</option>
						))
					}
				</Select>
			</Fragment>
		);
	}
}

export default Ward;