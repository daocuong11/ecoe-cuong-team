import React from "react";
import Wrapper, { WrapperMenu, WrapperContent } from "./Wrapper";
import SlickImageProduct from "../../SlickImageProduct";
import Header from "./Header";
import Footer from "./Footer";
import *  as _ from 'lodash';
import PropTypes from 'prop-types';

class ContainerPhotoBorder extends React.Component {
    static propTypes = {
        items: PropTypes.array
    }
    constructor(props) {
        super(props);
        let item =  _.first(props.items);
        this.state = {
            currentKey: item.key,
            item: item,
            curenIndex: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.changeIndex = this.changeIndex.bind(this);
        this.slideIndex = this.slideIndex.bind(this);
       
    }

    handleClick(data, e) {       
        this.setState({
            currentKey: data.key,
            item: data
        });
    }
    changeIndex(index, e) {
        this.setState({
            curenIndex: index
        }, () => {
            this.slider.slickGoTo(index);
        });


    }
    slideIndex(index) {
        this.setState({
            curenIndex: index
        });
    }

    render() {
        console.log(this.state.item);
        return (
            <Wrapper>
                <WrapperContent>
                    <WrapperMenu>
                        <Header listMenu={this.props.items} active={this.state.currentKey} onClick={this.handleClick} />
                    </WrapperMenu>
                    <SlickImageProduct
                        images={this.state.item.data}
                        ref={slider => this.slider = slider}
                        slideIndex={this.slideIndex}
                        updateInitialSlide={this.slideIndex}
                    />
                    <div style={{ marginTop: '50px' }}>
                        <Footer items={this.state.item.data} activeIndex={this.state.curenIndex} onClick={this.changeIndex} />
                    </div>
                </WrapperContent>
            </Wrapper>

        )
    }
}


export default ContainerPhotoBorder;