import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { LABEL_PROJECT } from "constants/labelActionForCard";
import LogoInvestor from "images/logo-investor/logo-novaland.svg";
import Logo from '../../../elements/Logo';
import { PAGE_PRODUCT_DETAIL } from "constants/page";
import {getDomainUrl} from "globalUtils/getDomainUrl";

const NameAddress = styled.div`
    display: inline-block;
    max-width: ${props => props.productType === LABEL_PROJECT ? "calc(100% - 60px)" : "100%"};
`;

const Investor = styled.div`
    display: inline-flex;
    flex-direction: ${(props =>
        (props.typeGrid === 1) ? "row-reverse" :
            (props.typeGrid === 4) ? "row" : "column"
    )};
    float: right;
    text-align: -webkit-right;
`;

const TitleCard = styled.div`
    font-family: ${props => props.theme.fontTypeFace.fontMuli};
    font-weight: ${props => props.theme.fontWeight.extraBold};
    color: ${props => props.theme.textColor.primaryBlue};
    font-size: ${props => props.productType === LABEL_PROJECT ? props.theme.fontSize.projectTitle : props.theme.fontSize.medium};
    line-height: 1.7;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
`;

const AddressCard = styled.div`
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-size: ${props => props.theme.fontSize.small};
    font-weight: ${props => props.theme.fontWeight.regular};
    color: ${props => props.theme.textColor.primaryBlue};
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const NameProduct = (props) => {
    let { id, name, address, productType } = props.product;        
    let subDomain = localStorage.getItem("domainName");
    let pageName = getDomainUrl(localStorage.getItem("domainType"));
    let url = `/${subDomain}/${pageName}/${PAGE_PRODUCT_DETAIL}` ;
    return (
        <Fragment>
            <NameAddress productType={productType} as="a" href={url}>
                <TitleCard
                    // as="a" href="/ecoe/product-detail"
                    productType={productType}
                    onClick={() => {
                        let visitedCard = `${id}. ${name}`;
                        let add = true;
                        let key = "MU_LATEST_VIEW";
                        let latestViews = JSON.parse(localStorage.getItem(key));

                        if (latestViews === "" || latestViews === null) {
                            latestViews = [];
                        } else {
                            latestViews.map((item) =>
                                ((item === visitedCard) && (add = false))
                            )
                        }
                        if (latestViews.length > 5) {
                            latestViews.pop();
                        }
                        if (add) {
                            latestViews.unshift(visitedCard);
                            localStorage.setItem(key, JSON.stringify(latestViews));
                        }
                        //window.open("/ecoe/product-detail")
                    }
                    }
                >{id}. {name}
                </TitleCard>

                <AddressCard>{address}</AddressCard>
            </NameAddress>
            {productType === LABEL_PROJECT && (
                <Investor typeGrid={2}>
                    <Logo source={LogoInvestor} label="Novaland" />
                </Investor>
            )}

        </Fragment>
    );
}

NameProduct.propTypes = {
    product: PropTypes.object,
};

export default NameProduct;