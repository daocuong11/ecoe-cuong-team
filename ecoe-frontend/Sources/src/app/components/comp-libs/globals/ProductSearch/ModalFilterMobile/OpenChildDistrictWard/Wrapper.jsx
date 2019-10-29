import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-size: ${props=>props.theme.fontSize.normal};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.textColor.labelAccordion};    
    
    > span {padding-right: 10px;}
`;

export {
    Wrapper as default,
};