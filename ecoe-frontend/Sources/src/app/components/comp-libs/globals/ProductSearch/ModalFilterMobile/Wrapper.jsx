import styled from "styled-components";
import Popup from "reactjs-popup";

const Wrapper = styled.div`
`;

const ModalStyle = styled(Popup)`
    width: 100% !important;
    height:100%;
    border: none !important;
    padding: 0 !important;
    overflow-y: scroll;
`;

const HeaderWrapper = styled.div`
    display: flex;
    position:fixed;
    align-items: center;
    width: 100%;
    height: 72px;
    background: #fff;
    padding: 0 25px;
    box-shadow: 0 0 30px #ccc;
    z-index: 9;
`;

const Container = styled.div`
    padding: 100px 25px 30px;
`;

const Left = styled.div`
    width: 50%;
    font-size: ${props=>props.theme.fontSize.projectTitle};
    font-weight: ${props=>props.theme.fontWeight.bold};
    color: ${props=>props.theme.textColor.primaryBlue};
    cursor: pointer;

    > span { padding-left: 20px;}
`;

const Right = styled.div`
    width: 50%;
    text-align: right;
    font-size: ${props=>props.theme.fontSize.medium};
    font-weight: ${props=>props.theme.fontWeight.bold};
    color: ${props=>props.theme.textColor.primaryGreen};
    cursor: pointer;
`;

const Item = styled.div`
    width: 100%;
    padding-top: 30px;
    position: ${props=>props.relative && "relative"};

    &:first-child { padding: 0; }
`;

const Label = styled.div`
    font-size: ${props=>props.theme.fontSize.medium};
    font-weight: ${props=>props.theme.fontWeight.bold};
    color: ${props=>props.theme.textColor.labelAccordion};
    text-transform: uppercase;
    padding: 10px 0;
    margin-bottom: 15px;
    border-bottom: 1px solid #ccc;

    &::after {
        content: "${props=>props.unit}";
        float: right;
        font-size: ${props=>props.theme.fontSize.normal};
        text-transform: initial;
    }
`;

const DistrictSelect = styled.div`
    position: absolute;
    top: 40px;
    right: 0;
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.textColor.labelAccordion};

    > span {padding-right: 10px;}
`;
export {
    Wrapper as default,
    ModalStyle,
    HeaderWrapper,
    Container, Left, Right,
    Item, Label, DistrictSelect,
};