import React, { Fragment } from 'react';
import { TitleCard, AddressCard } from '../../../elements/Typography';
import { WrapperBorderCard, InfoCard, DrapCard, DrapCardContainer, FrameFooter, DropdownBorder } from './Wrapper';
import PropTypes from 'prop-types';

import ImageProductCard from './ImageProductCard';
import UtilitiesCard from './UtilitiesCard';
import FooterCard from './FooterCard';
import ProductActionBar from './ProductActionBar';
import { SD_FO } from "constants/domainType";

const CardHide = (props) => {
    let domainType = props.domainType;
    let { images, name, address, utilities, status } = props.product;

    let viewCard;    
    if(domainType!==SD_FO) {
        viewCard = (
            <FrameFooter>
                <ImageProductCard images={images} /*tagState={status}*/ status={status} />
                <InfoCard>
                    <Fragment>
                        <TitleCard>{name}</TitleCard>
                        <AddressCard>{address}</AddressCard>
                    </Fragment>
                    <UtilitiesCard utilities={utilities} domainType={domainType} />
                    <FooterCard product={props.product} domainType={domainType} />
                </InfoCard>
                <DrapCard>
                    <DrapCardContainer>
                        <DropdownBorder>
                            <ProductActionBar />
                        </DropdownBorder>
                        
                    </DrapCardContainer>                    
                </DrapCard>
            </FrameFooter>
        )    
    }

    return (
        <WrapperBorderCard>
            {viewCard}
        </WrapperBorderCard>
    );
}

CardHide.propTypes = {
    product: PropTypes.object,
    domainType: PropTypes.string,
};

export default CardHide;