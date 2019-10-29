import { css } from "styled-components"; 
 
export const devices = { 
    /* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
    */
    sm: (...args) => css`
        @media (min-width: 320px) and (max-width: 480px){    
           ${css(...args)};     
        }`,
    /* 
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
    */
    md: (...args) => css`
        @media (min-width: 481px) and (max-width: 767px) {     
            ${css(...args)};     
        }`,
    /* 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
    */
    lg_l: (...args) => css`
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
            ${css(...args)};     
        }`,   
    /* 
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
    */
    lg: (...args) => css`
        @media (min-width: 768px) and (max-width: 1024px) {  
            ${css(...args)};     
        }`,
    /* 
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
    */
    xl: (...args) => css`
        @media (min-width: 1025px) and (max-width: 1280px) {
            ${css(...args)};     
        }`,
    xxl: (...args) => css`
        @media (min-width: 1281px) {
            ${css(...args)};     
        }`
}; 