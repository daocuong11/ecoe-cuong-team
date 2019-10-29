import React, { Component, Fragment } from 'react';
import Project from './Project';
import Deposit from './Deposit';
import * as _ from 'lodash';

class Form extends Component {

	render() {

		let {match} = this.props;

		let type = _.get(match, 'params.type');

		return (
			<Fragment>
				{_.get({
					project: <Project />,
					deposit: <Deposit />
				}, type, <Deposit />)}
			</Fragment>
		)
	}
}

export default Form;