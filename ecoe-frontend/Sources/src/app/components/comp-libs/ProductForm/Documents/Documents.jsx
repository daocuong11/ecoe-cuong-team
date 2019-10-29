import React, { Component } from 'react';
import { Wrapper, Description, Header, Main, Table } from './Wrapper';
import * as _ from "lodash";
import {FormControl, CloseButton, BtnLink, Label, ImgCard} from "../ui";
import PropTypes from "prop-types";

class Documents extends Component {


	static propTypes = {
		title: PropTypes.any,
		description: PropTypes.any,
		data: PropTypes.arrayOf(PropTypes.object),
		limit: PropTypes.number,
		onChange: PropTypes.func,
		name: PropTypes.string
	};

	static defaultProps = {
		limit: Number.MAX_SAFE_INTEGER
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

	addAction = () => {
		let list = _.get(this.state, 'list');
		let obj = {
			file: null,
			name: ''
		};

		list.push(obj);

		this.setState({list});
	};

	updateAction = (index, name, value) => {

		this.setState(({list}) => {
			let item = _.get(list, index);
			_.set(item, name, value);
			return list;
		});

		setTimeout(() => {
			this.onChange();
		}, 0);
	};

	removeAction = (index) => {
		this.setState(({list}) => {
			_.remove(list, (item, i) => index === i);
			return list;
		});

		setTimeout(() => {
			this.onChange();
		}, 0);
	};

	selectFile = (index, e) => {
		let file = _.get(e.target, 'files.0');
		this.setState(({list}) => {
			let item = _.get(list, index);
			_.set(item, 'name', _.get(file, 'name'));
			_.set(item, 'file', file);

			return list;
		});

		setTimeout(() => {
			this.onChange();
		}, 0);
	};

	componentWillMount() {
		let { data } = this.props;

		if(data) {
			this.setState({
				list: data
			})
		}
	}


	onChange = () => {
		let { list } = this.state;
		let { onChange, name } = this.props;
		if(onChange) {
			onChange({
				target: {
					name,
					value: list
				}
			});
		}
	};

	render() {
		let { title, description, limit } = this.props;
		let { list } = this.state;
		return (
			<Wrapper>
				<Header>
					<div>
						<Label>{title}</Label>
						<Description>{description}</Description>
					</div>
					<div>
						<BtnLink primary onClick={this.addAction} disabled={_.size(list) >= limit}>Thêm</BtnLink>
					</div>
				</Header>
				<Main>
					<Table full>
						<tbody>
						{_.map(list, (item, index) => (
							<tr key={index}>
								<td width={200}>
									<ImgCard border button>
										<div><Description>PDF</Description></div>
										<div>
											<Description>Kích thước tối đa 5MB</Description>
										</div>
										<BtnLink primary as="label">Tải tài liệu dự án
											<FormControl type="file" onChange={(e) => this.selectFile(index, e)} style={{display: 'none'}} />
										</BtnLink>
									</ImgCard>
								</td>
								<td>
									<Label>Tên tài liệu</Label>
									<FormControl value={_.get(item, 'name')} name="name" onChange={(e) => this.updateAction(index, 'name', e.target.value)} block={true}/>
								</td>
								<td width={50} className="text-right"><CloseButton onClick={() => this.removeAction(index)}/></td>
							</tr>
						))}
						</tbody>
					</Table>
				</Main>
			</Wrapper>
		)
	}
}

export default Documents;