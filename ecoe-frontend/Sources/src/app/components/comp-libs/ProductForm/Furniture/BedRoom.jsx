import React, { Component } from 'react';
import Furniture from './Furniture';
import * as _ from 'lodash';

class BedRoom extends Component {

	getData = () => {
		let list = ['Giường','Tủ quần áo','Gối/nệm','Bàn làm việc','Bàn trang điểm'];
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
			<Furniture {...props} title="Phòng ngủ" data={this.getData()}/>
		);
	}
}

export default BedRoom;