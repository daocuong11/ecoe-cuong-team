
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Utilities from '../Utilities';
import HeadlineInfoProject from '../HeadlineInfoProject';

import { LABEL_PROJECT } from "constants/labelActionForCard";

const UtilitiesCard = (props) => {
    let domainType = props.domainType;
    let productType = props.product;

    return (        
        <Fragment>
            {(props.typeGrid===1 && productType===LABEL_PROJECT) ? (
                <HeadlineInfoProject product={props.product} />
            ) : (
                <Utilities utilities={props.utilities} domainType={domainType} />                    
            )}
        </Fragment>
    );
}

UtilitiesCard.propTypes = {
    product: PropTypes.object,
    utilities: PropTypes.object,
    domainType: PropTypes.string,
    typeGrid: PropTypes.number,
};

export default UtilitiesCard;