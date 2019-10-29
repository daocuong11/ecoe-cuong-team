import React, { Component, Fragment } from 'react';
import {Collapse} from 'UIElement/Collapse';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import {
	BtnLink,
	FormControl,
	FormGroup,
	Label,
	FlexWrap,
	FlexItem,
	FormInline,
	Text
} from '../../../../../ui';
import {Gallery} from '../../../../../ImagePicker';
import {FormSection } from './Wrapper';
import Select from 'UIElement/Select';
class Detail extends Component {

	static propTypes = {
		list: PropTypes.array,
		onChange: PropTypes.func
	};

	constructor(props, context) {
		super(props, context);
		this.state = this.getDefaultState();
	}


	getDefaultState = () => {
		return {
			list: []
		}
	};

	componentDidMount() {
		let {list} = this.props;
		if(list){
			this.setState({
				list
			});
		}
	}

	add = () => (e) => {
		let data = {};

		this.setState(({list}) => {
			return {
				list: list.concat(data)
			}
		});
	};

	remove = (index) => (e) => {
		let {list} = this.state;
		_.remove(list, (item, i) => i === index);

		this.setState({
			list
		})
	};

	updateField = (section) => (e) => {
		let {name, value} = e.target;

		this.setState((state) => {
			if(section)
			{
				_.set(state, section, value);
			}
			else
			{
				_.set(state, name, value);
			}
			return state;
		});

		setTimeout(() => {
			this.onChange();
		}, 0);
	};

	onChange = () => {
		let { onChange } = this.props;
		if(_.isFunction(onChange)) {
			onChange({
				target: {
					name: _.get(this.props, 'name'),
					value: this.state.list
				}
			});
		}
	};

	render() {
		let {state: {list}, add, props: {children}} = this;

		return (
			<Fragment>
				{children({list, add})}
				<FormSection>
					{
						_.map(list, (item, index) => (
							<Collapse key={index} defaultActive={true} remove={this.remove(index)}>
								<FlexWrap>
									<FlexItem>
										<Label>Mặt bằng</Label>
										<Gallery limit={1} defaultValue={_.get(item, 'images', [])} onChange={this.updateField(['list', index, 'images'])}/>
									</FlexItem>
									<div>
										<FormInline>
											<FormGroup>
												<Label>Loại hình</Label>
												<div>
													<Select value={_.get(item, 'type', '')} onChange={this.updateField(['list', index, 'type'])}>
														<option value="DEPARTMENT">Căn hộ</option>
														<option value="OFFICETEL">Officetel</option>
														<option value="DUPLEX">Duplex</option>
														<option value="PENTYHOUSE">Penthouse</option>
													</Select>
												</div>
											</FormGroup>
											<FormGroup>
												<Label>Số lượng</Label>
												<FormControl width={80} value={_.get(item, 'total', '')} onChange={this.updateField(['list', index, 'total'])} block/>
											</FormGroup>
											<FormGroup>
												<Label>Giá (triệu/m2)</Label>
												<div>
													<FormControl width={180} value={_.get(item, ['price', 0], '')} onChange={this.updateField(['list', index, 'price', 0])}/>
													<Text small bold>đến</Text>
													<FormControl width={180} value={_.get(item, ['price', 1], '')} onChange={this.updateField(['list', index, 'price', 1])}/>
												</div>
											</FormGroup>
										</FormInline>
										<FormInline>
											<FormGroup>
												<Label>Phòng ngủ</Label>
												<FormControl width={80} value={_.get(item, 'totalBedRoom', '')} onChange={this.updateField(['list', index, 'totalBedRoom'])} block/>
											</FormGroup>
											<FormGroup>
												<Label>Phòng tắm</Label>
												<FormControl width={80} value={_.get(item, 'totalBathRoom', '')} onChange={this.updateField(['list', index, 'totalBathRoom'])} block/>
											</FormGroup>
											<FormGroup>
												<Label>Diện tích thông thuỷ (m2)</Label>
												<FormControl width={180} value={_.get(item, 'carpetArea', '')} onChange={this.updateField(['list', index, 'carpetArea'])} block/>
											</FormGroup>
											<FormGroup>
												<Label>Diện tích tim tường (m2)</Label>
												<FormControl width={180} value={_.get(item, 'builtUpArea', '')} onChange={this.updateField(['list', index, 'builtUpArea'])} block/>
											</FormGroup>
										</FormInline>
									</div>
								</FlexWrap>
							</Collapse>
						))
					}
				</FormSection>

			</Fragment>
		)
	}
}

export default Detail;