import React, { Component, Fragment } from 'react';
import * as _ from 'lodash';
import PropTypes from 'prop-types';

import { GalleryWrap } from './Wrapper';

export const withGallery = (WrappedComponent) => {

	return class extends Component {

		static propTypes = {
			limit: PropTypes.number,
			list: PropTypes.array,
			children: PropTypes.func,
			onUpdate: PropTypes.func
		};

		static defaultProps = {
			limit: Number.MAX_SAFE_INTEGER,
			list: []
		};

		constructor(props) {
			super(props);
			this.state = this.getDefaultState();
		}

		getDefaultState = () => {
			return {
				list: []
			}
		};

		onSelected = (data) => {
			let { list } = this.state;
			list.push(data);

			this.setState({
				list
			});

			_.isFunction(this.props.onUpdate) && this.props.onUpdate(data, list);
		};

		getList = () => {
			return this.state.list;
		};

		componentDidMount() {
			let {list} = this.props;

			this.setState({
				list
			})
		}

		remove = (index) => {
			let {list} = this.props;
			let data = _.get(list, index);

			list.splice(index, 1);
			this.setState({
				list
			});

			_.isFunction(this.props.onUpdate) && this.props.onUpdate(data, list);

		};

		render() {
			let {list} = this.state;
			let {limit} = this.props;

			return (
				<GalleryWrap>
					{this.props.children({list, remove: this.remove})}
					{(limit > _.size(list)) && <WrappedComponent onSelected={this.onSelected}/>}
				</GalleryWrap>
			)
		}
	}
};