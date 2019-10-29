import React, { Component } from 'react';
import {Wrapper} from './Wrapper';
import {Collapse} from 'UIElement/Collapse';
import * as _ from 'lodash';

import {
	BtnLink,
	FormControl,
	FormGroup,
	Label,
	FormSection,
	FlexWrap,
	FlexItem,
	FormInline,
	Text
} from '../../../../../ui';
import {Gallery} from '../../../../../ImagePicker';
import Radio from 'UIElement/Radio';
import Detail from './Detail';
import PropTypes from "prop-types";
import {Datepicker} from "../../../../../Datepicker";


const PRJ_OPENING_SOON = 'PRJ_OPENING_SOON';
const PRJ_OPENING = 'PRJ_OPENING';
const PRJ_SOLD = 'PRJ_SOLD';
class House extends Component {


	static propTypes = {
		data: PropTypes.object,
		onChange: PropTypes.func
	};

	constructor(props, context) {
		super(props, context);
		this.state = this.getDefaultState();
	}

	getDefaultState = () => {
		return {
			subAreas: []
		}
	};

	addBlock = () => {

		let data = {};

		this.setState(({subAreas}) => {
			return {
				subAreas: subAreas.concat(data)
			}
		});
	};

	removeBlock = (index) => (e) => {
		let {subAreas} = this.state;
		_.remove(subAreas, (item, i) => i === index);

		this.setState({
			subAreas
		});
	};

	componentWillMount() {
		let { data } = this.props;
		if(data) {
			this.setState(data);
		}
	}

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
					name: _.get(this.props, 'data.type'),
					value: this.state
				}
			});
		}
	};

	render() {
		let { subAreas, totalSubArea } = this.state;

		return (
			<Wrapper>
				<FormGroup>
					<Label>Số tiểu khu</Label>
					<FormControl maxWidth={150} value={totalSubArea} name="totalSubArea" onChange={this.updateField()} block/>
				</FormGroup>
				{
					_.map(subAreas, (item, index) => (
						<Collapse title={_.get(item, 'name', `Tiểu khu ${index + 1}`)} key={index} remove={this.removeBlock(index)} defaultActive={true}>
							<Wrapper>
								<FormSection>
									<Label>Thông tin tổng quan</Label>
									<FlexWrap>
										<FlexItem>
											<Label>Hình ảnh tiểu khu</Label>
											<Gallery limit={1} defaultValue={_.get(item, 'images')} onChange={this.updateField(['subAreas', index, 'images'])} />
										</FlexItem>
										<FlexItem>
											<FormGroup>
												<Label>Tên tiểu khu</Label>
												<FormControl value={_.get(item, 'name', '')} onChange={this.updateField(['subAreas', index, 'name'])} block/>
											</FormGroup>
											<FormGroup>
												<Label>Trạng thái </Label>
												<div>
													<Radio name={`house.${index}.status`} value={PRJ_OPENING_SOON}
													       checked={_.isEqual(_.get(item, 'status'), PRJ_OPENING_SOON)}
													       onChange={this.updateField(['subAreas', index, 'status'])}
													>
														Sắp mở bán
													</Radio>
													<Radio name={`house.${index}.status`} value={PRJ_OPENING}
													       checked={_.isEqual(_.get(item, 'status'), PRJ_OPENING)}
													       onChange={this.updateField(['subAreas', index, 'status'])}
													>
														Đang mở bán
													</Radio>
													<Radio name={`house.${index}.status`} value={PRJ_SOLD}
													       checked={_.isEqual(_.get(item, 'status'), PRJ_SOLD)}
													       onChange={this.updateField(['subAreas', index, 'status'])}
													>
														Đã bàn giao
													</Radio>
												</div>
											</FormGroup>
											<FormInline>
												<FormGroup>
													<Label>Phí giữ chỗ (triệu)</Label>
													<FormControl value={_.get(item, 'keepingFee', '')} onChange={this.updateField(['subAreas', index, 'keepingFee'])} block/>
												</FormGroup>
												<FormGroup>
													<Label>Số nhà phố</Label>
													<FormControl value={_.get(item, 'totalHouse', '')} onChange={this.updateField(['subAreas', index, 'totalHouse'])} block/>
												</FormGroup>
												<FormGroup>
													<Label>Số shophouse</Label>
													<FormControl value={_.get(item, 'totalShophouse', '')} onChange={this.updateField(['subAreas', index, 'totalShophouse'])} block/>
												</FormGroup>
											</FormInline>
											<FormInline>
												<FormGroup>
													<div>
														<Label>Mở bán</Label>
													</div>
													<Datepicker width={180}  value={_.get(item, 'openSaleDate', '')} onChange={this.updateField(['subAreas', index, 'openSaleDate'])}/>
												</FormGroup>
											</FormInline>
											<FormInline>
												<FormGroup>
													<div>
														<Label>Bàn giao</Label>
													</div>
													<Datepicker width={180}  value={_.get(item, 'handoverDate', '')} onChange={this.updateField(['subAreas', index, 'handoverDate'])}/>
												</FormGroup>
											</FormInline>

										</FlexItem>
									</FlexWrap>
								</FormSection>
								<FormSection>
									<Detail name="details" list={_.get(item, 'details')} onChange={this.updateField(['subAreas', index, 'details'])}>
										{
											({add}) => {
												return (
													<FlexWrap noGutter>
														<div style={{marginRight: 'auto'}}><Label>Chi tiết loại hình sản phẩm</Label></div>
														<BtnLink onClick={add()}>Thêm loại hình</BtnLink>
													</FlexWrap>
												)
											}
										}
									</Detail>
								</FormSection>
							</Wrapper>
						</Collapse>
					))
				}

				<div>
					<BtnLink onClick={this.addBlock}>Thêm tiểu khu</BtnLink>
				</div>
			</Wrapper>
		)
	}
}

export default House;