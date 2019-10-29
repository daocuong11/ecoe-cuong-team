import styled from 'styled-components';
//import iconApartment from '../../../../../images/icons/icon-apartment.svg';

import nhaPho from 'images/icons/search-component/nha-pho.svg';
import canHo from 'images/icons/search-component/can-ho.svg';
import bietThu from 'images/icons/search-component/biet-thu.svg';
import datNen from 'images/icons/search-component/dat-nen.svg';

const Wrapper = styled.div``;

const ItemSearchChildContainer = styled.div.attrs(({ itemFilter }) => ({
  iconShow: itemFilter.filter === 1 && (
              (itemFilter.name === "Nhà phố") ? nhaPho :
              (itemFilter.name === "Căn hộ") ? canHo :
              (itemFilter.name === "Biệt thự") ? bietThu :
              (itemFilter.name === "Đất nền") && datNen
            )
}))`
  display: block;
  padding: 10px 5px;
  font-weight: bold;
  ${props => props.displayFlex !== undefined && props.displayFlex === true ? `
  width: calc(100% / ${props.col});
  box-sizing: border-box;`:
    ``
  }

  :first-child {
    ${props => !props.hideCheckAll ? `
      color: bold;
      border-bottom: 1px dashed #89a0be;
      position: sticky;
      top: 0;
      background-color: #FFF;
      z-index: 1000;
      box-sizing: border-box;`: ``
  }
    
    ${props => !props.hideIcon && `
      &:before {
          content: url(${props.iconShow});
          padding-left: 40px;
          filter: grayscale(${props.value ? '0%' : '100%'});
      }
      &:after {
        content: "";
        position: absolute;
        left: 40px;
        top: 15px;
        width: 30px;
        height: 30px;
        background: #e1f3f4;
        border-radius: 50%;
        z-index: -1;
      }`
  }
  }
`;

export {
  Wrapper as default,
  ItemSearchChildContainer,
};