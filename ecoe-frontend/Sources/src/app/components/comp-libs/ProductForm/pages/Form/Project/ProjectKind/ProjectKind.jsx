import React, { Component, Fragment } from 'react';
import {Tabs, Tab} from 'UIElement/Tabs';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Department from './Department';
import Villa from './Villa';
import House from './House';
import Soil from './Soil';

class ProjectKind extends Component {

	static propTypes = {
		data: PropTypes.arrayOf(PropTypes.object),
		onChange: PropTypes.func
	};

	constructor(props, context) {
		super(props, context);
		this.state = this.getDefaultState();
	}


	getDefaultState = () => {
		return {
			data: []
		};
	};

	componentWillMount() {
		let { data } = this.props;
		if(data) {
			this.setState({
				data
			})
		}
	}

	onChange = (type) => (e) => {
		let { data } = this.state;
		let { value } = e.target;
		let { onChange } = this.props;

		let index = _.findIndex(data, {type});
		_.set(data, index, value);

		if(_.isFunction(onChange)) {
			onChange({
				target: {
					name: 'kind',
					value: data
				}
			});
		}
	};


	render() {

		let department = _.find(this.state.data, {type: 'department'});
		let villa = _.find(this.state.data, {type: 'villa'});
		let house = _.find(this.state.data, {type: 'house'});
		let soil = _.find(this.state.data, {type: 'soil'});

		return (
			<Fragment>
				<Tabs>
					<Tab title="CĂN HỘ">
						<Department data={department} onChange={this.onChange('department')}/>
					</Tab>
					<Tab title="BIỆT THỰ">
						<Villa data={villa} onChange={this.onChange('villa')}/>
					</Tab>
					<Tab title="NHÀ PHỐ">
						<House data={house} onChange={this.onChange('house')}/>
					</Tab>
					<Tab title="ĐẤT NỀN" active={true}>
						<Soil data={soil} onChange={this.onChange('soil')}/>
					</Tab>
				</Tabs>
			</Fragment>
		)
	}
}

export default ProjectKind;