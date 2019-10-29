import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from './Tab';

import { devices } from "globalUtils/styledUtils";

const TabList = styled.ol`
position: relative;
z-index: 2;
width: 96px;
background-color:#F4F9FA;
box-shadow: 0 0 5px 1px #ccc inset;
${devices.sm`

`}
`;
const TabTitle = styled.div`
font-size: ${props => props.theme.fontSize.medium18};
font-weight: ${props => props.theme.fontWeight.extraBold};
color: #183253;
text-transform: uppercase;
padding-bottom: 36px;
`;

const WrapperContent = styled.div`
padding: 46px 46px;
`;

const TabContent = styled.div`
  background: #fff;
  padding: 0 0 50px;
  box-shadow: 0 0px 3px #ccc;
  ${props => props.showTab ? `width: 367px;` : `width:0;`}
  top: 0;
  position: absolute;
  left: 95px;
  right: 0;
  z-index: 1;
  bottom: 0;
`;

const Content = styled.div`
${props => props.showTab ? `display: block;` : `display: none;`}
`;

const ShowHideTabContent = styled.div`
width: 21px;
height: 89px;
background: #FFF;
position: absolute;
right: -21px;
z-index: 9999;
top: 43%;
border-radius: 0px 5px 5px 0px;
cursor: pointer;
box-shadow: 5px 1px 7px #ccc;
  &:after{
    content: "";
    position: relative;
    border: 6px solid transparent;
    ${props => props.showTab ? `border-right-color: ${props.theme.textColor.primaryGreen};right: 8px;` : `border-left-color: ${props.theme.textColor.primaryGreen};left: 8px;`}
    display: flex;
    top: 45%;
  }
`;


class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    level: PropTypes.number,
    showButtonTab: PropTypes.bool
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
      showTab: true
    };
    this.showHideTabContent = this.showHideTabContent.bind(this);

  }

  showHideTabContent(e) {
    let showTab = !this.state.showTab;
    this.setState({
      showTab: showTab
    },()=>{
      this.props.onTabShowHide && this.props.onTabShowHide(showTab);
    });
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
        level,
        isPopup
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <Fragment>
        <TabList>
          {children.map((child) => {
            const { label, icon, disabled } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                icon={icon}
                level={level}
                onClick={onClickTabItem}
                disabled={disabled}
                isPopup={isPopup}
              />
            );
          })}
        </TabList>
        <TabContent level={level} showTab={this.state.showTab} >

          <Content showTab={this.state.showTab}>
            {children.map((child) => {
              if (child.props.label !== activeTab) return undefined;
              return (
                <WrapperContent key={child.props.label}>
                  {child.props.disabled !== true && <TabTitle>{child.props.label}</TabTitle>}
                  {child.props.children}
                </WrapperContent>
              )
            })}
          </Content>
          {this.props.showButtonTab && <ShowHideTabContent showTab={this.state.showTab} onClick={this.showHideTabContent} />}
        </TabContent>
      </Fragment>
    );
  }
}

export default Tabs;