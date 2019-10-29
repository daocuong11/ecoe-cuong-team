import styled from 'styled-components';

import { SD_BO, SD_FO, MS } from "constants/domainType";

import iconMS from 'images/icon-banner-ms.svg';
import iconBO from 'images/icon-banner-sd-bo.svg';
import iconFO from 'images/icon-banner-sd-fo.svg';

const Wrapper = styled.div.attrs(({ domainType, isSearchResultPage, fromEcoe }) => ({
    bg: isSearchResultPage ? "#fff" : (domainType === SD_BO || (domainType === SD_FO && fromEcoe<0)) ? "#134169" : "#00837b",
    icon: isSearchResultPage ? null : domainType === SD_BO ? iconBO : domainType === SD_FO ? iconFO : domainType === MS && iconMS,
    mode: domainType === MS && "soft-light",
    height: isSearchResultPage ? "95px" : "463px",
}))`
    display:flex;
    align-items: center;

    position: relative;
    height: ${props=>props.height}; 
    background: ${props => props.bg} url(${props=>props.icon}) 100% 102% no-repeat;
    background-blend-mode: soft-light;
`;

const HeaderBorder = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;

const Content = styled.div`
    position: relative;
    left: calc(50% - 577px);
    max-width: 1366px;
    min-width: 390px;

    @media (max-width: 1024px) {
        position: unset;
        min-width: unset;
        margin: 0;
        padding-left: 30px;
    }
`;

const ViewSubdomain = styled.div`
    position: absolute;
    right: 0;
    top: calc(50%);

    @media (max-width: 1024px) {}
`;



export { Wrapper as default, HeaderBorder, Content, ViewSubdomain };