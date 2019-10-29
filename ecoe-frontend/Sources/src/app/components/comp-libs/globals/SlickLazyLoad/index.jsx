import React from "react";
import Wrapper, { SliderCustom, ImgCustom, ImgCustomAuto } from './Wrapper';

class SlickLazyLoad extends React.Component {
    constructor(props){
      super(props);
      this.slickGoTo = this.slickGoTo.bind(this);
      this.afterChangeHandler = this.afterChangeHandler.bind(this);
    }

    slickGoTo(index){
      this.slider.slickGoTo(index);
    }
    afterChangeHandler(currentSlide) {
      this.props.updateInitialSlide && this.props.updateInitialSlide(currentSlide);
    }

    render(){
          const settings = {
              dots: false,
              lazyLoad: true,
              infinite: this.props.slidesToShow? true:false,
              speed: 500,
              slidesToShow: this.props.slidesToShow || 1,
              slidesToScroll: 1,
              initialSlide: 0
          };

          return (
            <SliderCustom {...settings} ref={slider => this.slider= slider} afterChange={this.afterChangeHandler} > {
              this.props.Images && this.props.Images.map(( item, index ) =>
                (this.props.autoSize===true) ?
                <ImgCustomAuto key={item.id || index} src={item.src} alt={item.alt} IsEnable={this.props.IsEnable} ProductType={this.props.ProductType}/>:
                <ImgCustom key={item.id || index} src={item.src} alt={item.alt} IsEnable={this.props.IsEnable} ProductType={this.props.ProductType}/>
              )}
            </SliderCustom>
          );
    }
}
export default SlickLazyLoad;