import styled from "styled-components";
import Slider from "react-slick";
import Img from "../../../elements/Img";
import {PROJECT} from "constants/domainType";
import { devices } from "globalUtils/styledUtils"; 

const Wrapper = styled.div``;

const ImgCustom = styled(Img).attrs(({IsEnable}) => ({}))`
  width: 100%;
  height: ${props=>props.ProductType===PROJECT ? "226px" : "190px"};
  overflow: hidden;
  filter: grayscale(${props => props.IsEnable ? "0%" : "70%"});
`;
const ImgCustomAuto = styled(Img).attrs(({IsEnable}) => ({}))`
  width: 100%;
  height: 60vh;
  overflow: hidden;
  ${devices.sm`
  height: 40vh;
  `}
`;

const SliderCustom = styled(Slider)``;

export {Wrapper as default, ImgCustom, SliderCustom,ImgCustomAuto };