import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PROJECT } from 'constants/domainType';
import Wrapper from './Wrapper';

import StickyFooterProject from './StickyFooterProject';
import StickyFooterHouse from './StickyFooterHouse';

let lastScrollY = 0;
let lastScrollYDown;
let ticking = false;

class StickyFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixed: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll = () => {
        lastScrollYDown = lastScrollY;
        lastScrollY = window.scrollY;

        if (!ticking) {
            if (lastScrollYDown > lastScrollY) {
                //Scroll Up
                window.requestAnimationFrame(() => {
                    this.setState({ fixed: true });
                    ticking = false;
                });
            } else {
                //Scroll Down
                window.requestAnimationFrame(() => {
                    this.setState({ fixed: false });
                    ticking = false;
                });
            }
            ticking = true;
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        let productDetail = this.props.productDetail;

        return (
            <Wrapper fixed={this.state.fixed}>
                {
                    productDetail.productType===PROJECT ?
                        <StickyFooterProject productDetail={productDetail}/> : 
                        <StickyFooterHouse productDetail={productDetail}/>                    
                }
                
            </Wrapper>
        );
    }
}


StickyFooter.propTypes = {
    productDetail: PropTypes.object,
};

export default StickyFooter;