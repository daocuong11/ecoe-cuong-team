import React, { Component } from 'react';
import { Wrapper, Header, Description, Main, Table, Input, CloseButton } from './Wrapper';
import {FormGroup, Label, BtnLink, FormInline } from '../ui';
import PropTypes from 'prop-types';

import * as _ from 'lodash';

class AddFields extends Component {

	static propTypes = {
		title: PropTypes.any,
		description: PropTypes.any,
		prototype: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
			title: PropTypes.string
		})).isRequired,
		data: PropTypes.arrayOf(PropTypes.object),
		limit: PropTypes.number
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
	};

	removeAction = (index) => {
		this.setState(({list}) => {
			_.remove(list, (item, i) => index === i);
			return list;
		});
	};

	updateAction = (index, name, value) => {

		this.setState(({list}) => {
			let item = _.get(list, index);
			_.set(item, name, value);
			return list;
		});
	};

	getTitles = (name) => {
		let item = _.find(this.props.prototype, {name});

		return _.get(item, 'title');
	};

	render() {
		let { limit } = this.props;
		let { list } = this.state;

		return (
			<Wrapper>
				<Main>
					<Table>

						<tbody>
						{_.map(list, (item, index) => (
							<tr key={index}>
								{_.map(item, (value, key) => (
									<td key={_.join(key, index)}>
										<Input value={value} name={key} onChange={(e) => this.updateAction(index, key, e.target.value)} block={true} maxWidth={150}/>
									</td>
								))}
								<td><CloseButton onClick={() => this.removeAction(index)}/></td>
							</tr>
						))}
						</tbody>
					</Table>
				</Main>
				<Header>
					<div>
						<BtnLink primary onClick={this.addAction} disabled={_.size(list) >= limit}>Thêm (Tối đa {limit})</BtnLink>
					</div>
				</Header>
			</Wrapper>
		);
	}
}

export default AddFields;