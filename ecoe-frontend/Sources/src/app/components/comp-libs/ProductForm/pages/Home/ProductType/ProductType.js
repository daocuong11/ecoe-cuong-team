import React, { PureComponent } from 'react';
import {Card, Icon, Wrapper} from "../../../ui/OptionCard";
import { withRouter } from 'react-router-dom';
import {PROJECT} from "constants/domainType";

import * as _ from 'lodash';

class ProductType extends PureComponent {


	goNextStep = (step) => {
		let {match, history} = this.props;

		history.push(_.join([match.url, step],'/'));
	};

	render() {
		return (
			<Wrapper>
				<Card onClick={() => this.goNextStep('project')}>
					<Icon type="project"/>
					<div className="title">Dự án</div>
					<p className="description">
						Bất động sản phân phối trực tiếp từ chủ đầu tư
					</p>
				</Card>

				<Card onClick={() => this.goNextStep('property')}>
					<Icon type="property"/>
					<div className="title">Nhà đất</div>
					<p className="description">
						Bất động sản được ký gửi từ người khác
					</p>
				</Card>
			</Wrapper>
		)
	}
}

export default withRouter(ProductType);