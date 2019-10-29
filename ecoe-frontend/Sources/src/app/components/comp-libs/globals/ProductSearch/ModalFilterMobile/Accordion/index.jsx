import React from 'react';
import PropTypes from 'prop-types';
import Wrapper, { Title, Container, ItemSearchChildContainer } from './Wrapper';
import CheckBox3 from "../../../../../elements/CheckBox/Checkbox3";
import Open from 'images/icons/search-component/open.svg';
import Close from 'images/icons/search-component/close.svg';
import withListing from "../../withListing";
import * as _ from "lodash";


class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.initiallyCollapsed ? false : true,
            padding: 0,
            margin: 0,
        }
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }
    ref = React.createRef()

    componentDidMount() {
        if (!this.props.initiallyCollapsed) {
            this.ref.current.style.height = `${this.ref.current.scrollHeight}px`
        } else {
            this.ref.current.style.height = `0px`
        }
    }

    toggleCollapse = () => {
        if (this.ref.current.style.height !== '0px') {
            this.ref.current.style.height = '0px'
            this.setState({
                isOpen: false,
                padding: 0,
                margin: 0,
            });
        } else {
            this.ref.current.style.height = `${this.ref.current.scrollHeight}px`
            this.setState({
                isOpen: true,
                padding: '15px 0',
                margin: '15px 0',
            });
        }
    }

    render() {
        //let title = this.props.title ? this.props.title : "Title";
        let itemHeader = _.first(this.props.arrFilter);
        return (
            <Wrapper>
                <Title                 
                    icon={this.state.isOpen ? Open : Close}
                    marginBottom={this.props.marginBottom}
                >
                    {/* {title} */}                   
                    <CheckBox3
                        filterMobile={this.props.filterMobile}
                        key={itemHeader.key}
                        filter={itemHeader.filter}
                        name={itemHeader.name}
                        value={itemHeader.value}
                        updateCheckbox={this.props.updateCheckbox}
                        handleClick={this.toggleCollapse}
                    />
                </Title>

                <Container
                    ref={this.ref}
                    style={{
                        overflow: 'hidden',
                        transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    }}
                    margin={this.state.margin}
                    padding={this.state.padding}
                // onClick={this.toggleCollapse}
                >
                    {/* {this.props.children} */}
                   {
                       this.props.arrFilter.map((itemFilter, index) => {
                           if(index >0)
                            return (
                                <ItemSearchChildContainer
                                filterMobile={this.props.filterMobile}
                                openModalButton={this.props.openModalButton}
                                accordionButton={this.props.accordionButton}
                                itemFilter={itemFilter}
                                key={itemFilter.filter}
                                value={itemFilter.value}
                                hideIcon={this.props.hideIcon}
                                hideCheckAll={this.props.hideCheckAll}
                                displayFlex={this.props.displayFlex}
                                col={this.props.col}
                                >
                                <CheckBox3
                                    filterMobile={this.props.filterMobile}
                                    key={itemFilter.key}
                                    filter={itemFilter.filter}
                                    name={itemFilter.name}
                                    value={itemFilter.value}
                                    updateCheckbox={this.props.updateCheckbox}
                                    handleClick={this.props.handleClick}
                                />
                                </ItemSearchChildContainer>
                            );
                   })
                }
                </Container>
            </Wrapper>
        )
    }
}

Accordion.propTypes = {
    title: PropTypes.string,
};

export default withListing(Accordion);