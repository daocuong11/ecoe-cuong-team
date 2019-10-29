import React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';
import ItemsCarousel from './ItemsCarousel';

import GridLatestView from '../../../elements/GridLatestView';
import Card from '../Card';
import Prev from 'images/icons/icon-prev.svg'
import Next from 'images/icons/icon-next.svg'
import Img from '../../../elements/Img';
import AddHighlight from 'backOffice/AddHighlight';

const noOfItems = 12;
const noOfCards = window.innerWidth > 640 ?  4 : 1;
const autoPlayDelay = 4000;
const chevronWidth = 60;
const gutter = 30;

const Wrapper = styled.div`
  /* 
  padding: 0 ${chevronWidth}px; 
  */
  margin: 0 auto;
`;

class LatestViewCarousel extends React.Component {
    state = {
        activeItemIndex: 0,
    };

    componentDidMount() {
        this.interval = setInterval(this.tick, autoPlayDelay);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => this.setState(prevState => ({
        activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1),
    }));

    onChange = value => this.setState({ activeItemIndex: value });

    render() {

        let { products } = this.props;

        let productItems = _.map(products, item => {
            item.isEnable = true;
            return (
                <GridLatestView type={1} key={item.id} >
                    {item.add ? (
                        <AddHighlight
                            label={"Thêm nhà đất nổi bật"}
                            onClick={() => alert('Thêm nhà đất nổi bật')}
                        />
                    )
                        : <Card viewType={4} product={item} couldAddition={this.props.couldAddition} />
                    }

                </GridLatestView>
            );
        })

        return (
            <Wrapper>
                <ItemsCarousel
                    gutter={gutter}
                    numberOfCards={noOfCards}

                    activeItemIndex={this.state.activeItemIndex}
                    activePosition={'center'}
                    requestToChangeActive={this.onChange}

                    rightChevron={<Img src={Next}></Img>}
                    leftChevron={<Img src={Prev}></Img>}
                    chevronWidth={chevronWidth}
                    outsideChevron={false}
                    children={productItems}

                    showSlither={true}
                    firstAndLastGutter={true}

                    couldAddition={this.props.couldAddition}
                    domainType={this.props.domainType}
                />
                {this.props.children}
            </Wrapper>
        );
    }
}

export default LatestViewCarousel;
