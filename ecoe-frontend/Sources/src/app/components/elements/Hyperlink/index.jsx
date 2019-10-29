import React from 'react';
import PropTypes from 'prop-types';

import { A } from './Wrapper';


const Hyperlink = (props) => (
  <A href={props.url}>{props.value}{props.children}</A>
);
  
Hyperlink.propTypes = {
  value: PropTypes.string,
  url: PropTypes.string,
};
  
export default Hyperlink;