import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PROJECT } from 'constants/domainType';
import Wrapper, { Border, Content } from './Wrapper';


let lastScrollY = 0;
let lastScrollYDown;
let ticking = false;


class FixBottomCPS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixed: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.totalHeight = 0;
        
    }
    
    handleScroll = () => {
        lastScrollYDown = lastScrollY;
        lastScrollY = window.scrollY;
        let body = document.getElementsByTagName('body')[0];
        this.totalHeight = body.clientHeight;        

        if (!ticking) {
            if ((lastScrollYDown < lastScrollY) && (lastScrollYDown < this.totalHeight - this.props.footer)) {
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
        return (
            <Wrapper fixed={this.state.fixed}>
                <Border>
                    <Content>
                        {
                            this.props.children                            
                        }
                    </Content>
                </Border>
            </Wrapper>
        );
    }
}


FixBottomCPS.propTypes = {
    productDetail: PropTypes.object,
};

export default FixBottomCPS;