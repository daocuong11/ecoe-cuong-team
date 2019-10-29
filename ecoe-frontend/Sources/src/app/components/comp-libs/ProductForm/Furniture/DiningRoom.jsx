import React, { Component } from 'react';
import Furniture from './Furniture';
import * as _ from 'lodash';

class DiningRoom extends Component {

	getData = () => {
		let list = ['Kệ bếp','Bồn rửa chén','Máy hút mùi','Lò vi sóng','Lò nướng','Tủ lạnh','Máy rửa chén','Bếp'];
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
			<Furniture {...props} title="Phòng bếp" data={this.getData()}/>
		);
	}
}

export default DiningRoom;