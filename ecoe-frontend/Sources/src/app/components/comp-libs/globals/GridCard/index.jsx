import React, { Fragment } from 'react';
import Wrapper from './Wrapper';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import Grid from '../../../elements/Grid';
import Card from '../Card';
import CardHide from '../Card/CardHide';
import { SD_FO,PROJECT } from "constants/domainType";
import Readmore from "globalComponents/Readmore";

const GridCard = (props) => {
    let domainType = props.domainType;
    let productType = props.productType;
    let numberItem = productType===PROJECT ? 4 : 6;
    var products;

    if (domainType === SD_FO) {
        products = props.products.filter(product => product.isEnable === props.isEnable && (product.isOwner === true || product.isReceive === true));
    } else {
        products = props.products.filter(product => product.isEnable === props.isEnable);
    }
    let gridCard = (
        <Fragment>
            {props.children}
            {
                products.map((item, index) =>
                    index < numberItem && (
                        <Grid type={props.typeGrid} key={item.id} >
                            {
                                props.isEnable ? (
                                    <Card viewType={props.typeGrid} product={item} domainType={domainType} couldAddition={props.couldAddition} />) : (
                                    <CardHide product={item} domainType={domainType} />
                                )
                            }
                        </Grid>
                    )
                )
            }
            <Readmore number={46} category={props.category}/>
        </Fragment>
    )
    return (
        <Wrapper>{gridCard}</Wrapper>
    );
}

GridCard.propTypes = {
    products: PropTypes.array,
    productType: PropTypes.string,
    domainType: PropTypes.string,
    typeGrid: PropTypes.number,    
    readMore: PropTypes.func,
    isEnable: PropTypes.bool,
    category: PropTypes.string
};

export default GridCard;