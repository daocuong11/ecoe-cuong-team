import React, { Component, Fragment } from 'react';
import {Collapse} from 'UIElement/Collapse';
import PropTypes from 'prop-types';
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
				<FormSection padding>
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
												<Label>Số lượng</Label>
												<FormControl width={80} value={_.get(item, 'total', '')} onChange={this.updateField(['list', index, 'total'])} block/>
											</FormGroup>
											<FormGroup>
												<Label>Giá (triệu/m2)</Label>
												<div>
													<FormControl width={180} value={_.get(item, ['price', 0], '')} onChange={this.updateField(['list', index, 'price', 0])} />
													<Text small bold>đến</Text>
													<FormControl width={180} value={_.get(item, ['price', 1], '')} onChange={this.updateField(['list', index, 'price', 1])}/>
												</div>
											</FormGroup>
											<FormGroup>
												<Label>Số tầng hầm</Label>
												<FormControl width={80} value={_.get(item, 'totalBasement', '')} onChange={this.updateField(['list', index, 'totalBasement'])} block/>
											</FormGroup>
											<FormGroup>
												<Label>Số tầng nổi</Label>
												<FormControl width={80} value={_.get(item, 'totalMezzanine', '')} onChange={this.updateField(['list', index, 'totalMezzanine'])} block/>
											</FormGroup>
										</FormInline>
										<FormInline>
											<FormGroup>
												<Label>Diện tích lô đất (m2)</Label>
												<FormControl width={180} value={_.get(item, 'masterArea', '')} onChange={this.updateField(['list', index, 'masterArea'])} block/>
											</FormGroup>
											<FormGroup>
												<Label>Diện tích sử dụng (m2)</Label>
												<FormControl width={180} value={_.get(item, 'usableArea', '')} onChange={this.updateField(['list', index, 'usableArea'])} block/>
											</FormGroup>
											<FormGroup>
												<Label>Tổng diện tích sàn (m2)</Label>
												<FormControl width={180} value={_.get(item, 'floorArea', '')} onChange={this.updateField(['list', index, 'floorArea'])} block/>
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