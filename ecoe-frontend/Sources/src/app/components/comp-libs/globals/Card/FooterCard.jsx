import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import LeftFooterCard from './LeftFooterCard';
import RightFooterCard from './RightFooterCard';

const FooterCardStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    margin: 10px -15px 0 -15px;
    border-top: 1px #cfd9e6 dashed;
    
    @media (max-width: 640px) {
      margin: 10px 0 0 0;
    }
`;

const FooterLeft = styled.div`
    display: inline-block;
    /*padding-right: 15px;*/
`;

const FooterRight = styled.div`
    display: inline-block;
    /*padding-left: 15px;*/
    text-align: right;
`;

const FooterCard = (props) => {
    let domainType = props.domainType;

    let footerCard = (
        <FooterCardStyle>
            <FooterLeft>
                <LeftFooterCard product={props.product} domainType={domainType} />
            </FooterLeft>
            <FooterRight>
                <RightFooterCard product={props.product} domainType={domainType} />
            </FooterRight>
        </FooterCardStyle>
    )

    return (
        <Fragment>
            {footerCard}
        </Fragment>
    );
}

FooterCard.propTypes = {
    product: PropTypes.object,
    domainType: PropTypes.string,
    onClick: PropTypes.func
};

export default FooterCard;