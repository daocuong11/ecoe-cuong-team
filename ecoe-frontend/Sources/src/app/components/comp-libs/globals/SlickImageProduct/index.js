import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SlickLazyLoad from '../SlickLazyLoad';
import Favorite from '../../../elements/Favorite';
import RButtonCard from '../Buttons/RButtonCard';

const ImgProduct = styled.div`
  position: relative;
  width: 100%;
  max-height: 516px;
  overflow: hidden;
`;

const FavoriteBorder = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
`;

const ButtonViewMore = styled.div`
  position: absolute;
  bottom: 38px;
  right: 15px;
  background: #FFF;
`;


const handleClick = () => {
  alert('It works!')
}

class SlickImageProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images
    }
    this.updateImages = this.updateImages.bind(this);
    this.slickGoTo = this.slickGoTo.bind(this);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      images: nextProps.images
    });
  }
  updateImages(data, e) {
    this.setState({
      images: data
    });
  }
  slickGoTo(index) {
    this.slider.slickGoTo(index);
  }

  render() {

    return (
      <ImgProduct>
        <SlickLazyLoad
          Images={this.state.images}
          autoSize={true}
          ref={slider => this.slider = slider}
          slideIndex={this.props.slideIndex}
          updateInitialSlide={this.props.updateInitialSlide}
          slidesToShow={this.props.slidesToShow} />
        {this.props.isShowButton &&
          <FavoriteBorder><Favorite width={64} onClick={handleClick} /></FavoriteBorder>
        }
        {this.props.isShowButton &&
          <ButtonViewMore>
            <RButtonCard type="3" label={'XEM TẤT CẢ'} onClick={this.props.onClickViewAll} ></RButtonCard>
          </ButtonViewMore>
        }
      </ImgProduct>
    );
  }
}

SlickImageProduct.propTypes = {
  items: PropTypes.array,
  isShowButton: PropTypes.bool,
};

export default SlickImageProduct;