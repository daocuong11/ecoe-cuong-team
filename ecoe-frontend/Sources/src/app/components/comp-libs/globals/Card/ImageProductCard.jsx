import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SlickLazyLoad from '../SlickLazyLoad';
import Tag from '../../../elements/Tag';
import ProductStatus from 'globalComponents/ProductStatus';
import { PRODUCT_STATUS } from "globalConstants/productStatus";
import ButtonCall from '../../../elements/ButtonCall';

import { SD_FO } from "constants/domainType";
import { NUMBER_HOTLINE, LABEL_PROJECT, LABEL_HOUSE } from "constants/labelActionForCard";
import Favorite from '../../../elements/Favorite'; 

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

const ImgProduct = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.productType === LABEL_PROJECT ? "226px" : "190px"};
  /* overflow: hidden; */
`;

const TagState = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
`;

const FavoriteBorder = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
`;

const ContactPhone = styled.div`
  position: absolute;
  bottom: -18px;
  right: 15px;
`;

const handleClick=()=>{
  alert('It works!')
}

const ImageProductCard = (props) => {
  let domainType = props.domainType;
  return (
    <ImgProduct productType={props.productType}>
      <SlickLazyLoad Images={props.images} IsEnable={props.isEnable} ProductType={props.productType} />
      {
        ((props.productType === LABEL_PROJECT && domainType !== SD_FO && props.isOwner) ? (
          <TagState>
            <ProductStatus label={PRODUCT_STATUS.DMB} productStatusList={ProjectStatus} TypeDropdown={1} />
          </TagState>
        ) : (
          (props.productType === LABEL_HOUSE && domainType !== SD_FO && props.isOwner) ? (
            <TagState>
              <ProductStatus label={PRODUCT_STATUS.DgB} productStatusList={LandStatus} TypeDropdown={1} />
            </TagState>
          ) : (
            // domainType === SD_FO && 
              <TagState><Tag tagStyle={props.status === "Đã bán" ? 0 : 1} text={props.status} /></TagState>
        )))
      }
      
      {(domainType !== SD_FO && !props.isOwner && props.isEnable) && (
          <ContactPhone>
            <ButtonCall hotline={NUMBER_HOTLINE} />
          </ContactPhone>
      )}
      <FavoriteBorder><Favorite width={64} onClick={handleClick}/></FavoriteBorder>
    </ImgProduct>
  );
}

ImageProductCard.propTypes = {
  domainType: PropTypes.string,
  isOwner: PropTypes.bool,
  productType: PropTypes.string,
  status: PropTypes.string,
  images: PropTypes.array,
  isEnable: PropTypes.bool
};

export default ImageProductCard;