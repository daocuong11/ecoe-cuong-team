import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//import styled from 'styled-components';

import { SD_FO, SD_BO } from "constants/domainType";
import { PRODUCT_STATUS } from "globalConstants/productStatus";
import { LABEL_PROJECT, LABEL_HOUSE } from "constants/labelActionForCard";
import ProductStatus from 'globalComponents/ProductStatus';
import Tag from '../../../elements/Tag';

const ProjectStatus = [
    {
        key: "SMB",
        name: PRODUCT_STATUS.SMB,
        value: false
    },

    {
        key: "DMB",
        name: PRODUCT_STATUS.DMB,
        value: true
    },

    {
        key: "DBG",
        name: PRODUCT_STATUS.DBG,
        value: false
    }
];
const LandStatus = [
    {
        key: "DgB",
        name: PRODUCT_STATUS.DgB,
        value: true
    },
    {
        key: "DB",
        name: PRODUCT_STATUS.DB,
        value: false
    }
];

const StatusProduct = (props) => {
    let domainType = props.domainType;
    return (
        <Fragment>
            {
                ((props.product.productType === LABEL_PROJECT && domainType !== SD_FO && props.product.isOwner) ? (
                    <ProductStatus label={PRODUCT_STATUS.DMB} productStatusList={ProjectStatus} TypeDropdown={1} />
                ) : (
                (props.product.productType === LABEL_HOUSE && domainType !== SD_FO && props.product.isOwner) ? (
                    <ProductStatus label={PRODUCT_STATUS.DgB} productStatusList={LandStatus} TypeDropdown={1} />) : (
                    <Tag tagStyle={props.product.status === "Đã bán" ? 0 : 1} text={props.product.status} />
                )))
            }
        </Fragment>
    );
}

StatusProduct.propTypes = {
    product: PropTypes.object,
    domainType: PropTypes.object,
};

export default StatusProduct;