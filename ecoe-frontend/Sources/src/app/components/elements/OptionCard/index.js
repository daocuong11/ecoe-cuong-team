import React, { Component } from 'react';
import {CheckMark, Checkbox, Icon, Title} from './Wrapper';
import * as _ from 'lodash';
import centered from 'images/icons/utilities/centered.svg';
import certificate from 'images/icons/utilities/house-certificate.svg';
import riverView from 'images/icons/utilities/river-view.svg';
import furnished from 'images/icons/utilities/furnished.svg';
import school from 'images/icons/utilities/school.svg';
import hospital from 'images/icons/utilities/hospital.svg';
import market from 'images/icons/utilities/market.svg';
import populated from 'images/icons/utilities/populated.svg';
import greenDesign from 'images/icons/utilities/green-design.svg';
import smartHome from 'images/icons/utilities/smart-home.svg';
import cityView from 'images/icons/utilities/city-view.svg';
import cornered from 'images/icons/utilities/cornered.svg';

import defaultIcon from 'images/icons/utilities/default.svg';

class OptionCard extends Component {

	getIcon = (name) => {
		return _.get({
			centered,
			certificate,
			riverView,
			furnished,
			school,
			hospital,
			market,
			populated,
			greenDesign,
			smartHome,
			cityView,
			cornered
		}, name);
	};

	render() {
		return (
			<Checkbox className={this.props.className}>
				<input type="checkbox" {...this.props}/>
				<CheckMark>
					<Icon width={80}>
						<img src={this.getIcon(this.props.icon)} alt=""/>
					</Icon>
					<Title>{this.props.title}</Title>
				</CheckMark>
			</Checkbox>
		)
	}
}

export default OptionCard;