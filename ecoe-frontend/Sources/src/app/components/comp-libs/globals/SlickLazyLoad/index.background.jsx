import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Img from "../../../elements/Img";

const ImgCustom = styled(Img).attrs(({backgoundImage}) => ({
  
}))`
  width: 100%;
  height: 190px;
  background: #ccc url(${props => props.backgoundImage}) center no-repeat;
  background-size: cover;
`;

const SliderCustom = styled(Slider)`
  
`;

const SlickLazyLoad = (props) => {
    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };

    return (
      <SliderCustom {...settings}> {
        props.Images.map(( item ) => 
          <ImgCustom /*src={item.src}*/ backgoundImage={item.src} alt={item.alt}/>
        )}
      </SliderCustom>
    );
}
export default SlickLazyLoad;