import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const A = styled.a`
  color: #41addd;
  &:hover {
    color: #6cc0e5; 
  }
`;

const Link = (props) => {
  return (
    <A href={props.url}>{props.value} {props.children}</A>
  );
}
  
Link.propTypes = {
  value: PropTypes.string,
  url: PropTypes.string,
};
  
export default Link;