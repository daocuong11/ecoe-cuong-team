import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Options from './Options';
import Department from './Department';
import Villa from './Villa';
import House from './House';
import Soil from './Soil';

import * as _ from "lodash";

class Deposit extends Component {
	render() {
		let {match} = this.props;
		let type = _.get(match, 'params.type');

		return (
			<Fragment>
				{
					_.get({
						property: <Options />,
						department: <Department/>,
						villa: <Villa />,
						house: <House />,
						soil: <Soil />
					}, type)
				}
			</Fragment>
		)
	}
}

export default withRouter(Deposit);