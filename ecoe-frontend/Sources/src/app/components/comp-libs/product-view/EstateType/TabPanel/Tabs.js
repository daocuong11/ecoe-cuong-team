import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from './Tab';
import { devices } from "globalUtils/styledUtils";
const TabList = styled.ol`
  display: flex;
  border-bottom: ${props => props.level && "2px solid #ccc"};
  padding: ${props => props.level && "0 50px"};
  width: max-content;
`;

const WrapperScroll = styled.div`
overflow: auto;
overflow: -moz-scrollbars-none;
scrollbar-height: none; /* Firefox */
-ms-overflow-style: none;  /* IE 10+ */
-ms-overflow-style: none;
&::-webkit-scrollbar { height: 0 !important }

`;

const TabContent = styled.div`
  background: ${props => props.theme.background.white};
  padding: ${props => !props.level ? "0 0 50px" : "50px 20px"};

  box-shadow: ${props => !props.level && "0 0 30px #ccc"};
`;

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    level: PropTypes.number,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
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
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <Fragment>
        <WrapperScroll>
          <TabList level={level}>
            {children.map((child) => {
              const { label } = child.props;

              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  level={level}
                  onClick={onClickTabItem}
                />
              );
            })}
          </TabList>
        </WrapperScroll>
        <TabContent level={level}>
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </TabContent>

      </Fragment>
    );
  }
}

export default Tabs;