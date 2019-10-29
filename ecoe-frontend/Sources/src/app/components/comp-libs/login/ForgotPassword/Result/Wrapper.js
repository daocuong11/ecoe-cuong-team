import styled from "styled-components";
import closeIcon from "images/icons/icon-close.svg";
import successIcon from "images/icons/success-icon.svg";
const Wrapper = styled.div `
    .popup-overlay {
        .popup-content {
            width: 40% !important;
            padding: 50px !important;
        }
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
const Div = styled.div `
    color: #183253;
    font-family: ${props => props.theme.fontTypeFace.fontMuli};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: 14px;
`
const Span = styled.span ``
const FormCenter = styled.div `
    text-align: center;
    margin-top: 5%;
    margin-bottom: 3%;
    align-items: center;
    justify-content: center;
`
const Success = styled.span `
    background: url(${successIcon}) 10px 4px no-repeat;
    box-sizing: border-box;
    position: fixed;
    width: 62px;
    height: 53px;
    margin-left: -2%;
    cursor: pointer;
     @media (max-width: 480px) and (min-width: 320px) {
        margin-left: -8%;
    }
`
const NoPadding = styled.div `
    >h5 {
        padding-bottom: 0px !important;
    }
`
export {Wrapper as default, TitleHeader, ModalHeader, CloseButton, Span, HeaderCustom, Div, FormCenter, Success, NoPadding}