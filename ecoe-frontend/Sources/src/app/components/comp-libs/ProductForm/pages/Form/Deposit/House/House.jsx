import React, { Component, Fragment } from 'react';
import {Container, Header, Main, Footer, Title, SubTitle} from "../../../../Wrapper";
import * as _ from 'lodash';

import TabNavs from "../../../../Tabs/TabNavs";
import Navigation from "../../../../Navigation";
import { Wrapper } from './Wrapper';

import TitleForm from './Title';
import Price from './Price';
import Media from './Media';
import Detail from './Detail';
import {withForm} from "../../Project/withForm";

class House extends Component {

	steps = [
		{name: 'TIÊU ĐỀ', watermark: 'BƯỚC 1', component: TitleForm, enable: true},
		{name: 'GIÁ & HOA HỒNG', watermark: 'BƯỚC 2', component: Price},
		{name: 'HÌNH ẢNH', watermark: 'BƯỚC 3', component: Media},
		{name: 'THÔNG TIN CHI TIẾT', watermark: 'BƯỚC 4', component: Detail}
	];

	constructor(props) {
		super(props);
		this.state = this.initState();
	}

	initState = () => {
		return {
			stepIndex: 0,
		}
	};

	nextStep = () => {
		this.setState(({stepIndex}, props) => {
			let nextStep = stepIndex + 1;

			if(nextStep >= _.size(this.steps))
			{
				nextStep = _.size(this.steps) - 1;
			}

			/* Enable: user can be click on the navigate menu */
			let step = _.get(this.steps, nextStep);
			_.set(step, 'enable', true);

			return {
				stepIndex: nextStep,
			};
		});
	};

	setStep = (stepIndex) => {
		this.setState({
			stepIndex
		})
	};

	render() {
		let {stepIndex} = this.state;
		let FormStep = withForm(_.get(this.steps, [stepIndex, 'component']), {nextStep: this.nextStep});

		return (
			<Fragment>
				<Header light>
					<Container>
						<div>
							<TabNavs steps={this.steps} index={stepIndex} activeTab={this.setStep}/>
						</div>
					</Container>
				</Header>

				<Main white>
					<Container>
						<div>
							<FormStep />
						</div>
					</Container>
				</Main>
				<Footer>
					<Container>
						<Navigation />
					</Container>
				</Footer>
			</Fragment>
		)
	}
}

export default House;