import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImgStyle = styled.img`

`;

const Img = (props) => {
  return <ImgStyle className={props.className} src={props.src} alt={props.alt} onClick={props.onClick}/>;
}

Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;
