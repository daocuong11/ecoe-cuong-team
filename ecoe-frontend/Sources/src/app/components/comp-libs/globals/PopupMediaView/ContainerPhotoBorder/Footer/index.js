import React from 'react';
import * as _ from 'lodash';
import ItemsCarousel from './ItemsCarousel';
import Prev from 'images/icons/icon-prev-1.svg'
import Next from 'images/icons/icon-next-1.svg'
import Wrapper,{Chevron} from './Wrapper';
import ItemCategory from './ItemCategory';
import PropTypes from 'prop-types';

const noOfItems = 6;
const noOfCards = 6;
const chevronWidth = 60;
const gutter = 0;
// screen.width > 640 ? 4 : 1
class CategoryViewCarousel extends React.Component {
    static propTypes = {
        items: PropTypes.array
    }
    state = {
        activeItemIndex: this.props.activeIndex || 0,
    };
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            activeItemIndex: nextProps.activeIndex
        });
    }

    tick = () => this.setState(prevState => ({
        activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1),
    }));

    onChange = value => this.setState({ activeItemIndex: value });

    render() {

        let productItems = _.map(this.props.items, (item, index) => {
            return (
                <ItemCategory
                    thumb={item.thumb}
                    label={item.name}
                    item={item}
                    index={index}
                    activeIndex={index===this.props.activeIndex}
                    onClick={this.props.onClick}
                />
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

                    rightChevron={<Chevron src={Next}></Chevron>}
                    leftChevron={<Chevron src={Prev}></Chevron>}
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

export default CategoryViewCarousel;
