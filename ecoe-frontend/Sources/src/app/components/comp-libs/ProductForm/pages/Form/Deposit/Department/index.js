import React, { Component, Fragment } from 'react';

import {Container, Header, Main, Footer, Title, SubTitle, Wrapper} from "./Wrapper";

import TabNavs from "../../../../Tabs/TabNavs";
import Navigation from "../../../../Navigation";
import * as _ from 'lodash';

import DepartmentTitle from "./DepartmentTitle";
import DepartmentInfo from "./DepartmentInfo/";
import Media from './Media';
import DepartmentPrice from './DepartmentPrice';
import { withForm } from './../../Project/withForm';

class Department extends Component {

	steps = [
		{name: 'TIÊU ĐỀ', watermark: 'BƯỚC 1', component: DepartmentTitle, enable: true},
		{name: 'GIÁ & HOA HỒNG', watermark: 'BƯỚC 2', component: DepartmentPrice, enable: false},
		{name: 'HÌNH ẢNH', watermark: 'BƯỚC 3', component: Media, enable: false},
		{name: 'THÔNG TIN CHI TIẾT', watermark: 'BƯỚC 4', component: DepartmentInfo, enable: false}
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

			let step = _.get(this.steps, nextStep);
			_.set(step, 'enable', true)
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
			<Wrapper>
				<Header light>
					<Container>
						<div>
							<TabNavs steps={this.steps} index={stepIndex} activeTab={this.setStep} />
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
			</Wrapper>
		)
	}
}

export default Department;