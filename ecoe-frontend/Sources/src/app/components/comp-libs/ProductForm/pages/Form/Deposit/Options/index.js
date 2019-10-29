import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Wrapper, Card, Icon } from '../../../../ui/OptionCard';
import * as _ from "lodash";

import {withLayout} from './withLayout';

class Options extends Component {

	goNextStep = (step) => {
		let {match, history} = this.props;
		let urls = _.split(match.url, '/');
		let lastIndex = _.size(urls) - 1;
		_.set(urls, lastIndex, step);

		history.push(_.join(urls, '/'));
	};

	render() {
		return (
			<Fragment>
				<Wrapper>
					<Card onClick={() => this.goNextStep('department')}>
						<Icon type="project"/>
						<div className="title">Căn hộ</div>
					</Card>

					<Card onClick={() => this.goNextStep('villa')}>
						<Icon type="property"/>
						<div className="title">Biệt thự</div>
					</Card>

					<Card onClick={() => this.goNextStep('house')}>
						<Icon type="property"/>
						<div className="title">Nhà phố</div>
					</Card>

					<Card onClick={() => this.goNextStep('soil')}>
						<Icon type="property"/>
						<div className="title">Đất nền</div>
					</Card>
				</Wrapper>
			</Fragment>
		)
	}
}

export default withRouter(withLayout(Options));
