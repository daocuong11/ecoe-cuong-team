import React, { Component } from "react";
import PropTypes from "prop-types";

import { default as SectionWrapper } from "./Wrapper";
import SectionNav from "./SectionNav";

import styled from 'styled-components';
import './styles/nav.css';
import ButtonFavorite from "../../../elements/Buttons/ButtonFavorite";

const NavbarStyle = styled.div`
    height: ${props => props.height ? props.height + "px" : "75px"};
    position: ${props => props.fix};
    top: ${props => props.top};
    width: 1156px;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "#f4fbfc"};
    border-bottom: 1px solid rgba(204, 204, 204, .5);
    z-index: 99;

`;

let lastScrollY = 0;
//let lastScrollYDown;
let menuHeight = 75;
let ticking = false;
class Navbar extends Component {
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
                    this.updateTop('0px', 'fixed');
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
        menuHeight = this.props.topTop ? this.props.topTop : 75;

        return (
            <NavbarStyle top={this.state.top} topTop={this.props.topTop} fix={this.state.fix} height={42}>
                <SectionNav items={items} offset={offset} duration={duration} delay={delay}
                    coverWidth={coverWidth} navWidth={navWidth}
                    linkClass={linkClass ? linkClass : "link"}
                    activeLinkClass={activeLinkClass ? activeLinkClass : "active_link"}
                    FavoriteButton={this.props.FavoriteButton}
                />

                {children}

                <div style={{float:'right', position:'relative', bottom:'-4px'}}>
                {this.props.FavoriteButton === true && <ButtonFavorite url="/" />}
                </div>
            </NavbarStyle>
        )
    }
}


Navbar.propTypes = {
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

export default Navbar;

export { SectionWrapper };
