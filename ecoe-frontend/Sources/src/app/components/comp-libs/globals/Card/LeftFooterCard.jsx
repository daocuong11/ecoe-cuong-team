import React, { Fragment } from 'react';
import Wrapper from './Wrapper';
import PropTypes from 'prop-types';
import LButtonCard from '../Buttons/LButtonCard';

import ShareMSButtonCard from './ShareMSButtonCard';
import GetForSaleButtonCard from './GetForSaleButtonCard';
import EnableButtonCard from "./EnableButtonCard";

import { SD_FO } from "constants/domainType";
import { ACT_SHARING_SOCIAL_NET, ACT_COMPARISONS } from "constants/labelActionForCard";

const LeftFooterCard = (props) => {
    let domainType = props.domainType;
    let { isOwner, isEnable } = props.product;

    let leftFooterCard = (
        <Fragment>
            {!isEnable ? (
                    <EnableButtonCard Product={props.product} /> 
                ) : (
                    <Fragment>
                        {isOwner ? (
                            <ShareMSButtonCard Product={props.product} />
                        ) : (
                                <GetForSaleButtonCard Product={props.product} />
                            )}
                    </Fragment>
                )
            }
        </Fragment>
    )
    if (domainType === SD_FO) {
        leftFooterCard = (
            isEnable && (
                <Fragment>
                    <LButtonCard label={ACT_SHARING_SOCIAL_NET} onClick={() => alert('It works! Sharing Social network')} />
                </Fragment>
            )
        )
    }

    return (
        <Wrapper>
            {leftFooterCard}
            {isEnable && (<LButtonCard label={ACT_COMPARISONS} onClick={() => alert('It works! Comparisons')} />)}
        </Wrapper>
    );
}

LeftFooterCard.propTypes = {
    product: PropTypes.object,
    domainType: PropTypes.string,
    onClick: PropTypes.func
};

export default LeftFooterCard;