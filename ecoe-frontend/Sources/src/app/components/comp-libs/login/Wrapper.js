import styled from "styled-components";
//import { CloseIcon } from "./../../elements/Icon";
import zaloIcon from "images/icons/zalo.svg";
import closeIcon from "images/icons/icon-close.svg";
import facebook from "images/icons/facebook.svg";
import google from "images/icons/google.svg";
import eyeIcon from "images/icons/eye-icon.svg";
import backgroundIcon from "images/icons/icon-background-logout-login.svg"

const Wrapper = styled.div `
    .popup-overlay {
        .popup-content {
            width: 760px !important;
            height: 643px;
            padding: 20px 95px 0px 95px !important;
            background-image: url(${backgroundIcon}) !important;
            background-repeat: no-repeat !important;
            background-position: left bottom !important;
            text-align: justify !important;
            @media (max-width: 480px) and (min-width: 320px) {
                width: 368px !important;
                padding: 20px 20px 0px 20px !important;
            }
        }
    }

`
const TitleLine = styled.div`
    position: relative;
    z-index: 1;
    font-size: 12px;
    text-align: center;
    font-weight: ${props => props.theme.fontWeight.regular};
    font-family: ${props => props.theme.fontTypeFace.fontMuli};
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
const Span = styled.span`
    background: #fff;
    padding: 0 15px;
`
const HeaderCustom = styled.div `
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
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
    margin-bottom: 20px
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
    right: -90px;
    top: 0;
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
        right: -39px;
        top: -15px;
    }
`
const IconX = styled.i `
    cursor: pointer;
    ::before {
        content: "";
        background: url(${closeIcon});
        background-size: 20px;
    }
`
const SocialButton = styled.div `
    display: flex;
    justify-content: center;
    padding: 5px 0px 16px 0px;
`
const FaceBook = styled.button `
    box-sizing: border-box;
    position: relative;
    margin: 1.2em;
    padding: 8px 17px 6px 47px;
    border: none;
    text-align: center;
    line-height: 34px;
    white-space: nowrap;
    /* border-radius: 0.2em; */
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: 14px;
    color: #FFF;
    min-width: 166px;
    height: 48px;
    background-color: #3d5a98;
    /* background-image: linear-gradient(#4C69BA, #3B55A0); */
    /* font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif; */
    text-shadow: 0 -1px 0 #354C8C;
    ::before {
        content:"";
        background: url(${facebook}) 11px 6px no-repeat;
        display: inline-block;
        padding-right: 23px;
        vertical-align: middle;
        padding-top: 5px;
        box-sizing: border-box;
        position: absolute;
        top: 5px;
        left: 17px;
        width: 44px;
        height: 36px;
        @media(max-width: 480px) and (min-width: 320px) {
            left: -11px;
        }
    }
    &:focus: {
        outline: 0;
        box-shadow: none;
    }
    @media (max-width: 480px) and (min-width: 320px){
        font-size: 11px;
        min-width: 85px;
        padding: 5px 18px 6px 30px;
    }
`
const Google = styled.button `
    box-sizing: border-box;
    position: relative;
    margin: 1.2em;
    padding: 8px 17px 6px 47px;
    border: none;
    text-align: center;
    line-height: 34px;
    white-space: nowrap;
    /* border-radius: 0.2em; */
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: 14px;
    color: #FFF;
    min-width: 166px;
    height: 48px;
    background-color: #DD4B39;
    /* background-image: linear-gradient(#4C69BA, #3B55A0); */
    /* font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif; */
    text-shadow: 0 -1px 0 #354C8C;
    ::before {
        content:"";
        background: url(${google}) 11px 6px no-repeat;
        display: inline-block;
        padding-right: 23px;
        vertical-align: middle;
        padding-top: 5px;
        box-sizing: border-box;
        position: absolute;
        top: 5px;
        left: 17px;
        width: 44px;
        height: 36px;
        @media(max-width: 480px) and (min-width: 320px) {
            left: -11px;
        }
    }
    &:focus {
        outline: 0;
        box-shadow: none;
    }
    @media (max-width: 480px) and (min-width: 320px){
        font-size: 11px;
        min-width: 85px;
        padding: 5px 18px 6px 30px;
    }
`
const Zalo = styled.button `
    box-sizing: border-box;
    position: relative;
    margin: 1.2em;
    padding: 8px 17px 6px 47px;
    border: none;
    text-align: center;
    line-height: 34px;
    white-space: nowrap;
    /* border-radius: 0.2em; */
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: 14px;
    color: #FFF;
    min-width: 166px;
    height: 48px;
    background: #03a5fa
    /* background-image: linear-gradient(#4C69BA, #3B55A0); */
    /* font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif; */
    text-shadow: 0 -1px 0 #354C8C;
    ::before {
        content:"";
        background: url(${zaloIcon}) 13px 15px no-repeat;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 18px;
        width: 34px;
        height: 100%;
        @media(max-width: 480px) and (min-width: 320px) {
            top: -4px;
            left: -6px;
        }
    }
    &:focus {
        outline: 0;
        box-shadow: none;
    }
    @media (max-width: 480px) and (min-width: 320px) {
        font-size: 11px;
        min-width: 85px;
        padding: 5px 18px 6px 30px;
    }
`

const Form = styled.form `
    display: block;
`
const FormGroup = styled.div `
    padding-bottom: 20px;
    margin-bottom: 1rem;
`
const FormLabel = styled.label `
    display: block;
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: 14px;
    line-height: 1.42857143;
    color: #0A2240;
`
const FormInput = styled.input `
    width: 100%;
    height: 30px;
    border: 0;
    box-shadow: none;
    background-image: linear-gradient(#009688, #009688), linear-gradient(#CFD9E6, #CFD9E6);
    background-size: 0 2px, 100% 1px;
    background-repeat: no-repeat;
    background-position: center bottom, center -webkit-calc(100% - 1px);
    background-position: center bottom, center calc(100% - 1px);
    background-color: rgba(0, 0, 0, 0);
    transition: background 0s ease-out;
    float: none;
    border-radius: 0;
    font-family: ${props => props.theme.fontTypeFace.fontMuli};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: 16px;
    padding-top: 20px;
    padding-bottom: 20px;
    &:focus {
        outline: 0;
        background-image: linear-gradient(#009688, #009688), linear-gradient(#42535F, #42535F);
        background-size: 100% 2px, 100% 1px;
        box-shadow: none;
        transition-duration: .3s;
    }
    ::placeholder {
        font-family: ${props => props.theme.fontTypeFace.fontMuli};
        font-weight: ${props => props.theme.fontWeight.regular};
        font-size: 16px;
        line-height: 1.42857143;
        color: #BDBDBD;
        font-weight: 400;
    }
`
const FormRow = styled.div `
    display: flex;
`
const FormCenter = styled.div `
    text-align: center;
    margin-top: 7%;
    margin-bottom: 4%;
    align-items: center;
    justify-content: center;
`
const ForgotPass = styled.a `
    width: 54%;
    text-align: right;
    float: right;
    text-decoration: underline;
    cursor: pointer;
    color: #009688;
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: 12px;
`
const Div = styled.div `
    font-family: ${props => props.theme.fontTypeFace.fontMuli};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: 12px;
    margin-top: 3%;
`
const A = styled.a `
    margin-top: 3%;
    color: #009688;
    text-decoration: underline;
    cursor: pointer;
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: 12px;
`
const VerticalCenter = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    >div {
       margin-right: 5px; 
    } 
`
const Button = styled.button `
    background: ${props => props.disabled ? '#CFD9E6' : '#00837B'};
    color: #fff;
    display: inline-block;
    font-weight: bold;
    text-align: center;
    vertical-align: center;
    user-select: none;
    border: 1px solid transparent;
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
const ErrorText = styled.div `
    color: #DA6744;
    font-size: 10px;
    font-weight: bold;
    margin: 10px auto;
    padding-right: 15px;
`;
const Eye = styled.span `
    background: url(${eyeIcon}) 10px 10px no-repeat;
    box-sizing: border-box;
    position: fixed;
    width: 68px;
    height: 34px;
    margin-left: -2%;
    cursor: pointer;
     @media (max-width: 480px) and (min-width: 320px) {
        margin-left: -8%;
    }
`
export {Wrapper as default, HeaderCustom, TitleLine, ModalHeader, CloseButton, TitleHeader, IconX, Span, 
    SocialButton, FaceBook, Google, Zalo,
Form, FormGroup, FormInput, FormLabel, FormRow, ForgotPass, FormCenter, Div, A, VerticalCenter, Button, ErrorText, Eye};
