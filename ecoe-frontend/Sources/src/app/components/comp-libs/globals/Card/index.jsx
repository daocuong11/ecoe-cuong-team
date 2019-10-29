import React from 'react';
import { WrapperBorderCard, InfoCard, ListView, Left, Right, FrameFooter } from './Wrapper';
import PropTypes from 'prop-types';

import ImageProductCard from './ImageProductCard';

import UtilitiesCard from './UtilitiesCard';
import FooterCard from './FooterCard';
import NameProduct from './NameProduct';
import { SD_FO } from "constants/domainType";
import { LABEL_HOUSE } from "constants/labelActionForCard";

import FinanceCard from './FinanceCard';

const VIEW_MODE_LIST = 1;
  
const Card = (props) => {
    let domainType = props.domainType;
    let viewType = props.viewType;
    let { images, utilities, status, isEnable, productType, isOwner, isHightLight } = props.product;
    let viewCard;

    if (isEnable) {
        viewCard = (
            <FrameFooter>
                <ImageProductCard images={images} productType={productType} status={status} isEnable={isEnable} domainType={domainType} isOwner={isOwner} />
                <InfoCard>
                    <NameProduct product={props.product} />
                    {(domainType!==SD_FO) && (
                        <FinanceCard product={props.product} domainType={domainType} />
                    )}
                    {productType===LABEL_HOUSE && (
                        <UtilitiesCard utilities={utilities} product={props.product} domainType={domainType} />
                    )}
                    <FooterCard product={props.product} domainType={domainType} />
                </InfoCard>
            </FrameFooter>
        )
        if (viewType === VIEW_MODE_LIST) {
            viewCard = (
                <ListView>
                    <Left>
                        <ImageProductCard images={images} status={status} isEnable={isEnable} isOwner={isOwner} />
                    </Left>
                    <Right>
                        <NameProduct product={props.product} />

                        <UtilitiesCard utilities={utilities} domainType={domainType} product={props.product} typeGrid={viewType} />


                        <FooterCard product={props.product} domainType={domainType} />
                    </Right>
                </ListView>
            )
        }
    }

    return (
        <WrapperBorderCard couldAddition={props.couldAddition} isHightLight={isHightLight} domainType={domainType}>
            {viewCard}
        </WrapperBorderCard>
    );
}

Card.propTypes = {
    product: PropTypes.object,
    domainType: PropTypes.string,
    viewType: PropTypes.number
};

export default Card;