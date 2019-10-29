import React, { Component, Fragment } from 'react';
import Tab from './Tab';
import './style.css';

class TabPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: props.activeTab
        };
    };
    static defaultProps = {
        activeTab: 0,
        className: '',
        position: 'top'
    };

    

    onTabClick(activeTab) {
        this.setState({
            activeTab
        });
    }

    render() {
        const { children, className, position } = this.props;
        const { activeTab } = this.state;

        return (
            <Fragment>

                <div {...this.props} className={`${className} tab-panel ${position}`}>
                    <div className={`tab-strip`}>
                        {React.Children.map(children, (child, i) => (
                            <Tab
                                onClick={this.onTabClick.bind(this, i)}
                                {...child.props}
                                cardindex={i}
                                activeTab={activeTab}
                            />
                        ))}
                    </div>
                    <div className="card-ct">
                        {React.Children.map(children, (child, i) => {
                            let { className } = child.props;
                            className = className ? ` ${className}` : '';

                            const isActive = i === activeTab ? ' active' : '';
                            const cardProps = {
                                ...child.props,

                                className: `card${className}${isActive}`,
                                cardindex: i,
                                activeTab: activeTab
                            };

                            return React.cloneElement(child, cardProps);
                        })}
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default TabPanel;