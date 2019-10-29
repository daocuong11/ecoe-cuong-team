import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import A from '../../../elements/A';

const Li = styled.li`
  display: inline-block;
  list-style-type: none;
  text-transform: uppercase;
  padding: 0 30px;
`;

const Hyperlink = (props) => (
  <Li><A href={props.url}>{props.value}</A></Li>
);
  
Hyperlink.propTypes = {
  value: PropTypes.string,
  url: PropTypes.string,
};
  
export default Hyperlink;