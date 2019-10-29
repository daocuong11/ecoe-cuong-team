import React , { Component } from 'react';
import {Wrapper,FormSection, Description} from './Wrapper';
import {Collapse} from 'UIElement/Collapse';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
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
import Radio from 'UIElement/Radio';
import Detail from './Detail';
import {Datepicker} from "../../../../../Datepicker";


const PRJ_OPENING_SOON = 'PRJ_OPENING_SOON';
const PRJ_OPENING = 'PRJ_OPENING';
const PRJ_SOLD = 'PRJ_SOLD';
class Department extends Component {

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
			blocks: [],
			totalBlock: ''
		}
	};

	addBlock = () => {

		let data = {};

		this.setState(({blocks}) => {
			return {
				blocks: blocks.concat(data)
			}
		});
	};

	removeBlock = (index) => (e) => {
		let {blocks} = this.state;
		_.remove(blocks, (item, i) => i === index);

		this.setState({
			blocks
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

		let { blocks, totalBlock } = this.state;

		return (
			<Wrapper>
				<FormGroup>
					<Label>Số tháp/ block</Label>
					<FormControl maxWidth={150} value={totalBlock} name="totalBlock" onChange={this.updateField()} block/>
				</FormGroup>
				{
					_.map(blocks, (item, index) => (
						<Collapse title={_.get(item, 'name', `Tháp/Block ${index + 1}`)} key={index} remove={this.removeBlock(index)} defaultActive={true}>
							<Wrapper>
								<FormSection>
									<Label>Thông tin tổng quan</Label>
									<FlexWrap>
										<FlexItem>
											<Label>Hình ảnh toà tháp</Label>
											<Gallery limit={1} defaultValue={_.get(item, 'images')} onChange={this.updateField(['blocks', index, 'images'])} />
										</FlexItem>
										<FlexItem>
											<FormGroup>
												<Label>Tên tháp</Label>
												<FormControl value={_.get(item, 'name', '')} onChange={this.updateField(['blocks', index, 'name'])} block/>
											</FormGroup>
											<FormGroup>
												<Label>Trạng thái </Label>
												<div>
													<Radio name={`department.${index}.status`} value={PRJ_OPENING_SOON}
													       checked={_.isEqual(_.get(item, 'status'), PRJ_OPENING_SOON)}
													       onChange={this.updateField(['blocks', index, 'status'])}
													>
														Sắp mở bán
													</Radio>
													<Radio name={`department.${index}.status`} value={PRJ_OPENING}
													       checked={_.isEqual(_.get(item, 'status'), PRJ_OPENING)}
													       onChange={this.updateField(['blocks', index, 'status'])}
													>
														Đang mở bán
													</Radio>
													<Radio name={`department.${index}.status`} value={PRJ_SOLD}
													       checked={_.isEqual(_.get(item, 'status'), PRJ_SOLD)}
													       onChange={this.updateField(['blocks', index, 'status'])}
													>
														Đã bàn giao
													</Radio>
												</div>
											</FormGroup>
											<FormInline>
												<FormGroup>
													<Label>Phí giữ chỗ (triệu)</Label>
													<FormControl value={_.get(item, 'keepingFee', '')} onChange={this.updateField(['blocks', index, 'keepingFee'])} block/>
												</FormGroup>
												<FormGroup>
													<Label>Số thang máy</Label>
													<FormControl value={_.get(item, 'totalElevator', '')} onChange={this.updateField(['blocks', index, 'totalElevator'])} block/>
												</FormGroup>
											</FormInline>
											<FormInline>
												<FormGroup>
													<Label>Số tầng</Label>
													<FormControl value={_.get(item, 'totalFloor', '')} onChange={this.updateField(['blocks', index, 'totalFloor'])} block/>
												</FormGroup>
												<FormGroup>
													<Label>Số tầng hầm</Label>
													<FormControl value={_.get(item, 'totalBasement', '')} onChange={this.updateField(['blocks', index, 'totalBasement'])} block/>
												</FormGroup>
												<FormGroup>
													<Label>Tầng giữ xe</Label>
													<FormControl value={_.get(item, 'totalParkingFloor', '')} onChange={this.updateField(['blocks', index, 'totalParkingFloor'])} block/>
												</FormGroup>
											</FormInline>

											<FormInline>
												<FormGroup>
													<Label> Số căn hộ</Label>
													<FormControl value={_.get(item, 'totalDepartment', '')} onChange={this.updateField(['blocks', index, 'totalDepartment'])} block/>
												</FormGroup>
												<FormGroup>
													<Label>Số Officetel</Label>
													<FormControl value={_.get(item, 'totalOfficetel', '')} onChange={this.updateField(['blocks', index, 'totalOfficetel'])} block/>
												</FormGroup>
												<FormGroup>
													<Label>Số Shophouse</Label>
													<FormControl value={_.get(item, 'totalShophouse', '')} onChange={this.updateField(['blocks', index, 'totalShophouse'])} block/>
												</FormGroup>
											</FormInline>

											<FormInline>
												<FormGroup>
													<div>
														<Label>Mở bán</Label>
													</div>
													<Datepicker width={180}  value={_.get(item, 'openSaleDate', '')} onChange={this.updateField(['blocks', index, 'openSaleDate'])}/>
												</FormGroup>
											</FormInline>
											<FormInline>
												<FormGroup>
													<div>
														<Label>Bàn giao</Label>
													</div>
													<Datepicker width={180}  value={_.get(item, 'handoverDate', '')} onChange={this.updateField(['blocks', index, 'handoverDate'])}/>
												</FormGroup>
											</FormInline>

										</FlexItem>
									</FlexWrap>
								</FormSection>
								<FormSection>

									<Detail name="details" list={_.get(item, 'details')} onChange={this.updateField(['blocks', index, 'details'])}>
										{
											({add}) => {
												return (
													<div>
														<FlexWrap noGutter>
															<div style={{marginRight: 'auto'}}><Label>Chi tiết loại hình sản phẩm</Label></div>
															<BtnLink onClick={add()}>Thêm loại hình</BtnLink>														
														</FlexWrap>
														<Description>Điền thông tin các loại hình sản phẩm sơ cấp hiện có thuộc tháp/ block</Description>
													</div>
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
					<BtnLink onClick={this.addBlock}>Thêm Tháp/Block</BtnLink>
				</div>

			</Wrapper>
		)
	}
}

export default Department;