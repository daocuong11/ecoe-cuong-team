import React, { Component } from 'react';
import Furniture from './Furniture';
import * as _ from 'lodash';

class BathRoom extends Component {

	getData = () => {
		let list = ['Toilet','Lavabo','Bồn tắm nằm','Quạt hút mùi','Máy nước nóng','Máy giặt'];
		return _.map(list, (item, index) => {
			return {
				id: index,
				name: item
			}
		})
	};

	render() {
		let props = this.props;

		return (
			<Furniture {...props} title="Phòng tắm" data={this.getData()}/>
		);
	}
}

export default BathRoom;