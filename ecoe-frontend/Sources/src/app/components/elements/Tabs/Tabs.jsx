import React, { Component, cloneElement } from 'react';
import {ListTabs, ReactTabs, TabAnchorItem, TabsContainer, TabTitleItem} from "./Wrapper";
import * as _ from 'lodash';


class Tabs extends Component{

	state = {
		tabs: [],
		prevActiveTab: {},
		activeTab: this.props.activeTab,
		tabsElements: []
	};

	addTab = newTab => {

		if (!_.find(this.state.tabs, {id: newTab.id})) {
			this.setState((prevState, props) => {
				return {
					tabs: prevState.tabs.concat(newTab)
				};
			});
		}
	};


	onClick = tab => event => {
		this.setState((prevState, props) => {
			return {
				prevActiveTab: prevState.activeTab,
				activeTab: tab
			};
		});
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if(!_.get(this.state, 'activeTab.id')) {
			let activeTab = _.find(this.state.tabs, {active: true}) ||  _.first(this.state.tabs);
			this.setState({
				activeTab: activeTab
			});
		}
	}

	render() {

		let {tabs, activeTab} = this.state;

		return (
			<ReactTabs>
				<TabsContainer>
					<ListTabs>
						{
							_.map(tabs, (tab, index) => (
								<TabTitleItem
									key={index}
									onClick={this.onClick(tab)}

									isActiveTab={_.get(activeTab, 'id') === tab.id}
								>
									<TabAnchorItem>{tab.title}</TabAnchorItem>
								</TabTitleItem>
							))
						}
					</ListTabs>
				</TabsContainer>

				{
					React.Children.map(this.props.children, child =>
						cloneElement(child, {
							activeTab: this.state.activeTab,
							addTab: this.addTab
						})
					)
				}
			</ReactTabs>
		);
	}
}

export default Tabs;