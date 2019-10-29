import React, { Component } from 'react';
import { Wrapper, Header, Description, Main, Table  } from './Wrapper';
import {FormGroup, Label, FormControl, BtnLink, FormInline, CloseButton} from '../ui';
import PropTypes from 'prop-types';

import * as _ from 'lodash';

class CustomFields extends Component {

	static propTypes = {
		title: PropTypes.any,
		name: PropTypes.string,
		description: PropTypes.any,
		prototype: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
			title: PropTypes.string
		})).isRequired,
		data: PropTypes.arrayOf(PropTypes.object),
		limit: PropTypes.number,
		onChange: PropTypes.func
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
		let keys = _.map(this.props.prototype, 'name');
		let obj = {};
		_.each(keys, item => {
			_.set(obj, item, '');
		});

		list.push(obj);

		this.setState({list});

		setTimeout(() => {
			this.onChange();
		},0);
	};

	removeAction = (index) => {
		this.setState(({list}) => {
			_.remove(list, (item, i) => index === i);
			return list;
		});
		setTimeout(() => {
			this.onChange();
		},0);
	};

	updateAction = (index, name, value) => {

		this.setState(({list}) => {
			let item = _.get(list, index);
			_.set(item, name, value);
			return list;
		});

		setTimeout(() => {
			this.onChange();
		},0);
	};

	getTitles = (name) => {
		let item = _.find(this.props.prototype, {name});

		return _.get(item, 'title');
	};

	componentWillMount() {
		let { data } = this.props;
		if(data) {
			this.setState({
				list: data
			});
		}
	}

	onChange() {
		let {onChange, name} = this.props;

		_.isFunction(onChange) && onChange({
			target: {
				name,
				value: _.get(this.state, 'list')
			}
		});
	}

	render() {
		let { title, description, limit, prototype } = this.props;
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
					<Table>
						<thead>
						{_.size(list) > 0 && (
							<tr>
								{_.map(prototype, (item, key) => (
									<td key={key}><Label>{_.get(item, 'title')}</Label></td>
								))}
							</tr>
						)}
						</thead>
						<tbody>
						{_.map(list, (item, index) => (
							<tr key={index}>
								{_.map(item, (value, key) => {
										if (!_.find(prototype, {name: key})) return null;

										return (
											<td key={_.join(key, index)}>
												<FormControl value={value} name={key} onChange={(e) => this.updateAction(index, key, e.target.value)} maxWidth={200} block={true}/>
											</td>
										)
									}
								)}
								<td><CloseButton onClick={() => this.removeAction(index)}/></td>
							</tr>
						))}
						</tbody>
					</Table>
				</Main>
			</Wrapper>
		);
	}
}

export default CustomFields;