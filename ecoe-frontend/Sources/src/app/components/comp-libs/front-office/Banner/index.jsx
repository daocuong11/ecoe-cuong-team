import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333;
  width: 100%;
  height: 400px;
  color: #fff;
 
`;

const Banner = (props) => {
  return (
    <div>
      <Slide><h1>Banner here</h1></Slide>
    </div>
  );
}

Banner.propTypes = {
  content: PropTypes.string
};

export default Banner;