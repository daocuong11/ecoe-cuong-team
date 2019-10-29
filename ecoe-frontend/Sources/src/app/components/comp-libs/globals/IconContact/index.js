import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCall from '../../../../images/icons/call-answer.svg';

//import IconFavorite from '../../../images/icons/favorite-heart.svg';
import Link from '../Link';
import Img from '../../../elements/Img';

const IconContactStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 2px 3px #ccc;
`;

const Contact = styled.div.attrs(({typeIcon})=>({
    icon: typeIcon || IconCall,
  }))`
  display: inline-block;

  &:before {
    content: "";
    background: #f00 url(${props => props.icon}) no-repeat 100% 100%;
    width: 50px;
    height: 50px;

  }

  &:last-child {  }
`;

const IconContact = (props) => {
  return (
    <IconContactStyle>
      <Link url={"tel:" + props.call}>
        <Contact typeIcon={IconCall}>CALL</Contact>
      </Link>
      {/* <div>{props.favorite ? "Favorite" : ""}</div> */}
    </IconContactStyle>
  );
}

IconContact.propTypes = {
  call: PropTypes.string,
  favorite: PropTypes.string,
};

export default IconContact;