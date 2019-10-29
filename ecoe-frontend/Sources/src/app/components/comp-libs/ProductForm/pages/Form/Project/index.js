import React, { Component, Fragment } from 'react';

import {Container, Header, Main, Footer, Title, SubTitle} from "../../../Wrapper";
import TabNavs from "../../../Tabs/TabNavs";
import Navigation from "../../../Navigation";
import * as _ from 'lodash';

import ProjectInfo from "./ProjectInfo";
import { ProjectCost } from './ProjectCost';
import { Media } from './Media';
import { ProjectDetail } from './ProjectDetail';
import { withForm } from './withForm';
import Model from '../../../store/Project';

class Project extends Component {

	steps = [
		{name: 'TÊN DỰ ÁN', watermark: 'BƯỚC 1', component: ProjectInfo, enable: true},
		{name: 'GIÁ & HOA HỒNG', watermark: 'BƯỚC 2', component: ProjectCost, enable: false},
		{name: 'HÌNH ẢNH', watermark: 'BƯỚC 3', component: Media, enable: false},
		{name: 'THÔNG TIN CHI TIẾT', watermark: 'BƯỚC 4', component: ProjectDetail, enable: false}
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

	componentDidMount() {
		console.log(Model.$watch);

		Model.$watch.subscribe((eventName) => {
			console.log('Model has been updated', eventName);
			this.forceUpdate();
		});
	}

	onSubmit = () => ()=> {
		Model.applyStore();
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
						<Navigation onSubmit={this.onSubmit()}/>
					</Container>
				</Footer>
			</Fragment>
		)
	}
}

export default Project;