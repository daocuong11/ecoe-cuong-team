import styled from 'styled-components';
import iconBell from '../../../../images/icons/bell-notification.svg';
import iconBellGreen from '../../../../images/icons/bell-notification-old.svg';
//import { IconBell } from "UIElement/Icon";
import { SD_BO } from "globalConstants/domainType";

const Wrapper = styled.div.attrs(({isSearchResultPage,domainType}) => ({
  boderColor: isSearchResultPage ? "#fff" : domainType === SD_BO ? "#134169" : "#00837b",
  ico: isSearchResultPage ? iconBellGreen : iconBell,
}))`
  display: inline-block;
  position: relative;
  width: 36px;
  height: 36px;
  /* background: url(${props => props.icon}) center no-repeat; */
  background: url(${props=> props.ico}) center no-repeat;

  background-size: 50%;
  border-radius: 50%;

  &:after {
    position: absolute;
    top: 15%;
    left: 60%;
    content: "${props => props.num ? props.num : 17}";
    background: #da6744;
    color: #fff;
    font-size: 8px;
    padding: 0 5px;
    line-height: 1.5;
    border: 2px solid ${props=>props.boderColor};
    border-radius: 40%;
  }

  /* &:before {
    position: absolute;
    top: 0%;
    left: calc(100% + 15px);
    content: "${props => props.mess ? props.mess : "Thông báo"}";
    color: #000;
    font-weight: bold;
    width: 100px;
  } */
`;

export { 
    Wrapper as default,
    // NotificationStyle,
};