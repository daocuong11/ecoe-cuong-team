import styled from "styled-components";
import backIcon from "images/icons/back-icon.svg"
import dotsIcon from "images/icons/dots-icon.svg";
import eyeIcon from "images/icons/eye-icon.svg";
import successIcon from "images/icons/success-icon.svg";
const Wrapper = styled.div `
    .popup-overlay {
        .popup-content {
            width: 562px !important;
            height: ${props => props.type === 5 ? '263px' : '482px'};
            padding-top: 20px !important;
            padding-left: 95px !important;
            padding-right: 95px !important;
            padding-bottom: 20px !important;
            text-align: justify !important;
            @media (max-width: 480px) and (min-width: 320px) {
                width: 368px !important;
                padding: 20px 20px 0px 20px !important;
            }
        }
    }
`
const HeaderNd = styled.div `
    font-size: 14px;
    font-weight: 900;
`
const Div = styled.div ``
const Span = styled.span ``
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
const MarginInput = styled.div `
    margin-top: 6%;
    margin-bottom: 20%;
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
export {Wrapper as default, HeaderNd, Div, Span, Back, Dots, Mobile, MarginBtn, SMSInput, MarginInput, Eye, Success, NoPadding}