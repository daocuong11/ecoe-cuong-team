import React, { Component } from 'react';

import * as _ from 'lodash';

export const withForm = (WrappedComponent, {nextStep}) => {
	return class extends Component {
		nextStep = () => {
			_.isFunction(nextStep) && nextStep();
		};

		render() {
			return (
				<WrappedComponent {...this.props} nextStep={this.nextStep} />
			)
		}
	}
};