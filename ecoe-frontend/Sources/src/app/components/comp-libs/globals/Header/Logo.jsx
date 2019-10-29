import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SR } from "globalConstants/domainType";
import LogoEcoe from "../../../../images/logo-ecoe/logo-ecoe-white.svg";
import LogoEcoeBlue from "../../../../images/logo-ecoe/logo-ecoe-no-char.svg";

const Img = styled.img.attrs(({ isSearchResultPage }) => ({
  color: isSearchResultPage ? "#0A2240" : "#fff",
}))`
  display: inline-block;
  max-width: 200px;
  height: 28px;
`;

const  Logo = (props, logo) => {
    let icon = props.isSearchResultPage ? LogoEcoeBlue : LogoEcoe;
    return (
        <Img isSearchResultPage={props.isSearchResultPage} src={icon} className={logo.classLogo} alt={logo.altLogo} />
    );
  }
  
  Logo.propTypes = {
    LogoEcoe: PropTypes.string,
    logo: PropTypes.object
  };
  
  export default Logo;