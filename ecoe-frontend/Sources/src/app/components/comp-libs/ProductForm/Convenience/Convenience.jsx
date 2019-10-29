import React, { Component, Fragment } from 'react';
import {Wrapper, RowItem} from './Wrapper';
import {Label} from "../ui/Label";
import CheckBorder from 'UIElement/CheckBox/CheckBorder';
import {FlexColumn, FlexRow, FormGroup} from "../ui";
import * as _ from "lodash";
import PropTypes from 'prop-types';


class Convenience extends Component {

	static propTypes = {
		data: PropTypes.arrayOf(PropTypes.string),
		name: PropTypes.string,
		onChange: PropTypes.func
	};

	constructor(props, context) {
		super(props, context);
		this.state = {
			data: []
		};
	}


	getData = () => {
		let list =[
			{ "name": "Trường học", "id": "SCHOOL" },
			{ "name": "Bệnh viện", "id": "HOSPITAL" },
			{ "name": "Siêu thị/ Khu mua sắm", "id": "SUPPER-MARKET" },
			{ "name": "Nhà hàng/ Cafe", "id": "RESTAURANT" },
			{ "name": "Ngân hàng/ ATM", "id": "BANK" },
			{ "name": "Công viên", "id": "PARK" },
			{ "name": "Hồ bơi", "id": "SWIMMING-POOL" },
			{ "name": "Gym", "id": "GYM" },
			{ "name": "Phòng xông hơi/ Spa", "id": "SPA" },
			{ "name": "Sân thể thao đa năng", "id": "SPORTS-GROUND" },
			{ "name": "Khu BBQ", "id": "BBQ" },
			{ "name": "Phòng sinh hoạt cộng đồng", "id": "COMMUNITY-LIVING-ROOM" },
			{ "name": "Wifi miễn phí", "id": "WIFI" },
			{ "name": "Bãi để ôtô", "id": "OTO-PARKING" },
			{ "name": "Bãi để xe máy", "id": "BIKE-PARKING" }
		];

		return list;
	};

	componentWillMount() {
		let { data } = this.props;
		if(data) {
			this.setState({
				data
			});
		}
	}

	onChange = () => (e) => {
		let { checked, value } = e.target;
		let { data } = this.state;
		let { onChange, name } = this.props;

		if(checked)
		{
			data.push(value);
		}
		else
		{
			_.remove(data, item => item === value);
		}

		this.setState({
			data
		});

		setTimeout(() => {
			onChange({
				target: {
					name,
					value: data
				}
			});
		}, 0);
	};

	render() {

		let { data } = this.state;

		return (
			<Wrapper>
				<FormGroup>
					<Label>Tiện nghi</Label>
					<FlexRow full={true}>
						{
							_.map(_.chunk(this.getData(), 6), (column, index) => (
								<FlexColumn key={index}>
									{
										_.map(column, (item, index) => (
											<RowItem key={index}>
												<CheckBorder
													name={_.get(item, 'name')}
													value={_.get(item, 'id', '')}
													checked={_.includes(data, _.get(item, 'id'))}
													onChange={this.onChange()}
												/>
											</RowItem>
										))
									}
								</FlexColumn>

							))
						}
					</FlexRow>
				</FormGroup>
			</Wrapper>
		);
	}
}


export default Convenience;