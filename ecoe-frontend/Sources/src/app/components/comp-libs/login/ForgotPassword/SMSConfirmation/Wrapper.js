import styled from "styled-components";
import closeIcon from "images/icons/icon-close.svg";
import eyeIcon from "images/icons/eye-icon.svg";
import dotsIcon from "images/icons/dots-icon.svg";
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
const Span = styled.span `
    color: #183253;
    font-family: ${props => props.theme.fontTypeFace.fontMuli};
    font-weight: ${props => props.theme.fontWeight.regular};
    font-size: 14px;
`
const FormCenter = styled.div `
    text-align: center;
    margin-top: 5%;
    margin-bottom: 3%;
    align-items: center;
    justify-content: center;
`
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
const Form = styled.form `
    display: block;
`
const FormGroup = styled.div `
    padding-bottom: 7px;
    margin-bottom: 1rem;
`
const FormLabel = styled.label `
    display: block;
    font-size: 16px;
    line-height: 1.42857143;
    color: #0A2240;
    font-weight: 400;
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
    font-size: 16px
    &:focus {
        outline: 0;
        background-image: linear-gradient(#009688, #009688), linear-gradient(#42535F, #42535F);
        background-size: 100% 2px, 100% 1px;
        box-shadow: none;
        transition-duration: .3s;
    }
    ::placeholder {
        font-size: 14px;
        line-height: 1.42857143;
        color: #BDBDBD;
        font-weight: 400;
    }
`
const HeaderNd = styled.div `
        color: #183253;
        font-family: ${props => props.theme.fontTypeFace.fontMuli};
        font-weight: ${props => props.theme.fontWeight.bold};
        font-size: 18px;
        margin-bottom: 10px;
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
    margin-top: 100px;
    margin-bottom: 6%;
`
const MarginInput = styled.div `
    margin-top: 6%;
    margin-bottom: 6%;
`
const SMSInput = styled.input `
    width: 30px;
    height: 40px;
    text-align: center;
    font-size: 18px;
    margin-right: 8px;
    &:focus {
        border: 2px solid #00837B;
        box-shadow: none;
        outline: 0;
    }
    @media (max-width: 480px) and (min-width: 320px) {
        margin-right: -1px;
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

const Time = styled.div `
    margin-bottom: 20px;
    font-size: 46px;
    font-weight: 900;
`
const Resend = styled.a `
    margin-left:6px
    text-decoration: underline;
    cursor: pointer;
    color: #009688;`
export {Wrapper as default, TitleHeader, ModalHeader, CloseButton, Span, HeaderCustom, Div, FormCenter, Eye, Form, FormGroup, FormInput, FormLabel, HeaderNd, Dots, Mobile, SMSInput, MarginBtn, MarginInput, Button, ErrorText, Time, Resend}