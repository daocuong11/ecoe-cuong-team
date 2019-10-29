
import React from 'react';
import PropTypes from 'prop-types';
import Wrapper, { Li } from './Wrapper';
import { Link, animateScroll as scroll } from 'react-scroll';
import * as _ from "lodash";

let lastScrollY = 0;
let menuHeight = 900;
let ticking = false;

class MenuSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
        this.handleSetActive = this.handleSetActive.bind(this);
        this.navsNode = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleClick(index, e) {
        this.setState({
            active: index
        }, () => {
            if (index === 0) scroll.scrollToTop();
        })
    }

    handleScroll = () => {
        lastScrollY = window.scrollY;

        if (!ticking) {
            if (lastScrollY > menuHeight) {
                window.requestAnimationFrame(() => {
                    this.updateTop('0px', 'fixed');
                    ticking = false;
                });
            } else {
                window.requestAnimationFrame(() => {
                    this.updateTop(menuHeight + 'px');
                    ticking = false;
                });
                this.setState({
                    active: 0
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
    handleSetActive(to) {
        let index = _.findIndex(this.props.items, { target: to });
        this.setState({
            active: index
        });

        if (this.navsNode.current) {
            var w = window.innerWidth;
            var wClient = this.navsNode.current.children[index].offsetWidth
            this.navsNode.current.scrollLeft = this.navsNode.current.children[index].offsetLeft - ((w - wClient) / 2);
        }
    }

    render() {
        const { active } = this.state;

        return (
            <Wrapper ref={this.navsNode} top={this.state.top} fix={this.state.fix} active={active}>
                {

                    this.props.items.map((item, i) => (
                        <Li active={i === active}>
                            <Link
                                to={item.target}
                                spy={true}
                                onSetActive={this.handleSetActive}
                                offset={-70}
                                smooth={true}
                                isDynamic={true}
                                onClick={this.handleClick.bind(this, i)}
                            >{item.label}</Link>
                        </Li>
                    ))
                }
            </Wrapper>
        );
    }
}

MenuSection.propTypes = {
    items: PropTypes.array,
};

export default MenuSection;