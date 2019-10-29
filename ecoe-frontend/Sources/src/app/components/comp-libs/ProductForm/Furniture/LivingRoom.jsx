import React, { Component } from 'react';
import Furniture from './Furniture';
import * as _ from 'lodash';

class LivingRoom extends Component {

	getData = () => {
		let list = ["Sofa",'Tivi','Tủ giày dép','Kệ sách','Bộ bàn ăn','Bàn Sofa'];
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
			<Furniture {...props} title="Phòng khách" data={this.getData()}/>
		);
	}
}

export default LivingRoom;