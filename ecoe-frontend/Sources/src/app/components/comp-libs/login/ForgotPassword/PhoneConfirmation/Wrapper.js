import styled from "styled-components";
import closeIcon from "images/icons/icon-close.svg";
import backIcon from "images/icons/back-icon.svg";
import dotsIcon from "images/icons/dots-icon.svg";
const Wrapper = styled.div `
    .popup-overlay {
        .popup-content {
            width: 40% !important;
            padding: 50px !important;
        }
    }

`
const TitleLine = styled.div`
    position: relative;
    z-index: 1;
    font-size: 12 px;
    text-align: center;
    ::before {
        border-top: 1px solid #dfdfdf;
        content: "";
        margin: 0 auto;
        position: absolute;
        top: 50% ;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100% ;
        z-index: -1;
    }
`
const HeaderCustom = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    outline: 0;
`
const ModalHeader = styled.div`
    height: 60px;
`
const TitleHeader = styled.h5`
        text-align: center;
        padding: 3%;
        color: #183253;
        font-family: ${props => props.theme.fontTypeFace.fontMuli};
        font-weight: ${props => props.theme.fontWeight.extraBold};
        font-size: 28px;
        line-height: 1.5;
`
const CloseButton = styled.button `
    border: 0;
    position: absolute;
    float: right;
    right: -100px;
    top: -20px;
    background: url(${closeIcon}) 10px 4px no-repeat;
    box-sizing: border-box;
    width: 62px;
    height: 53px;
    cursor: pointer;
    &:focus {
        outline: 0;
        box-shadow: none;
    }
     @media (max-width: 480px) and (min-width: 320px) {
        right: -36px;
        top: -22px;
    }
`
const HeaderNd = styled.div `
        color: #183253;
        font-family: ${props => props.theme.fontTypeFace.fontMuli};
        font-weight: ${props => props.theme.fontWeight.bold};
        font-size: 18px;
        margin-bottom: 10px;
`
const Div = styled.div `
        color: #183253;
        font-family: ${props => props.theme.fontTypeFace.fontMuli};
        font-weight: ${props => props.theme.fontWeight.regular};
        font-size: 14px;
`
const Span = styled.span `
        color: #183253;
        font-family: ${props => props.theme.fontTypeFace.fontMuli};
        font-weight: ${props => props.theme.fontWeight.regular};
        font-size: 14px;
`
const Back = styled.div `
    width: 100%;
    margin-top: 3%;
    color: #009688;
    cursor: pointer;
    ::before {
        content: "";
        background: url(${backIcon}) 13px 15px no-repeat;
        box-sizing: border-box;
        position: fixed;
        /* top: 0; */
        /* left: 18%; */
        width: 100%;
        height: 34px;
        margin-left: -28px;
        /* height: 100%; */
        /* left: 55px; */
        margin-top: -7px;
        @media (max-width: 480px) and (min-width: 320px) {
            margin-top: -10px;
        }
    }
`
const Dots = styled.span `
        background: url(${dotsIcon}) 10px 10px no-repeat;
        box-sizing: border-box;
        position: fixed;
        /* top: 0; */
        /* left: 18%; */
        width: 68px;
        height: 34px;
        cursor: pointer;
        @media (max-width: 480px) and (min-width: 320px) {
            background: url(${dotsIcon}) 10px 7px no-repeat;
        }
`
const Mobile = styled.span `
    margin-left: 60px;
`
const MarginBtn = styled.div `
    margin-top: 6%;
    margin-bottom: 6%;
`
const Button = styled.button `
    background: ${props => props.disabled ? '#CFD9E6' : '#fff'};
    color: #00837B;
    display: inline-block;
    font-weight: bold;
    text-align: center;
    vertical-align: center;
    user-select: none;
    border: 1px solid #00837B;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    height: 48px;
    width: 131px;
    font-family: "Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !important;
    font-size: 14px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    outline: 0;
    
    &:focus {
        outline: 0;
    }
`;
const FormCenter = styled.div `
    text-align: center;
    margin-top: 5%;
    margin-bottom: 3%;
    align-items: center;
    justify-content: center;
`

export {Wrapper as default, TitleLine, TitleHeader, ModalHeader, CloseButton, Span, HeaderCustom, HeaderNd, Div, Back, Dots, Mobile, MarginBtn, FormCenter, Button}