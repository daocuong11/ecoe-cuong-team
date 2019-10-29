import React, { Component } from "react";
import PropTypes from "prop-types";

import { default as VerticalSectionWrapper } from "./Wrapper";
import SectionNav from "./SectionNav";
import styled from 'styled-components';

import './styles/nav.css';

const NavbarStyle = styled.div.attrs(({ top = 75, fix = "block" }) => ({

}))`
    height: ${props => props.height ? props.height : "auto"};
    position: ${props => props.fix};
    top: ${props => props.top};
    width: 170px;
    
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "#fff"};
    box-shadow: 0 0 30px #ccc;
    z-index: 9;
`;

let lastScrollY = 0;
//let lastScrollYDown;
let menuHeight = 0;
let ticking = false;
class VerticalNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: props.top,
            fix: props.fix
        };
        this.updateTop = this.updateTop.bind(this);
    }

    handleScroll = () => {
        //lastScrollYDown=lastScrollY;
        lastScrollY = window.scrollY;
        
        if (!ticking) {
            if (lastScrollY > menuHeight /*&& lastScrollYDown > lastScrollY*/) {
                window.requestAnimationFrame(() => {
                    //update properties for menu section
                    this.updateTop(this.props.top, 'fixed');
                    ticking = false;
                });
            } else {
                window.requestAnimationFrame(() => {
                    this.updateTop(menuHeight + 'px');
                    ticking = false;
                });
            }
            ticking = true;
        }
    }
    updateTop = (top, fixed) => {
        this.setState({
            top: top,
            fix: fixed
        });
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        let { 
            items,
            children,
            coverWidth,
            navWidth,
            linkClass,
            activeLinkClass } = this.props;
        let offset = this.props.offset ? this.props.offset : -80;
        let duration = this.props.duration ? this.props.duration : 500;
        let delay = this.props.delay ? this.props.delay : 0;
        menuHeight = this.props.topTop ? this.props.topTop : 95;

        return (
            <NavbarStyle top={this.state.top} topTop={this.props.topTop} fix={this.state.fix}>
                <SectionNav items={items} offset={offset} duration={duration} delay={delay}
                    coverWidth={coverWidth} navWidth={navWidth}
                    linkClass={linkClass ? linkClass : "verticalLink"}
                    activeLinkClass={activeLinkClass ? activeLinkClass : "active_verticalLink"} />
                {children}
            </NavbarStyle>

        )
    }
}


VerticalNavbar.propTypes = {
    items: PropTypes.array.isRequired,
    offset: PropTypes.number,
    duration: PropTypes.number,
    delay: PropTypes.number,
    navbarStyle: PropTypes.object,
    height: PropTypes.number,
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    coverWidth: PropTypes.number,
    navWidth: PropTypes.number,
    topTop: PropTypes.number,
}

export default VerticalNavbar;

export { VerticalSectionWrapper };
