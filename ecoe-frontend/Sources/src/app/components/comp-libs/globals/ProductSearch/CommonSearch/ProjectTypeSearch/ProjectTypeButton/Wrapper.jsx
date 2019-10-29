import styled from "styled-components";
import { SD_BO } from "constants/domainType";
import theme from "globalConstants/theme";

const Wrapper = styled.div`
    display: flex;
    cursor: pointer;
`;

const ButtonLandProject = styled.div.attrs(({ domainType }) => ({
    bg: domainType === SD_BO ? theme.background.primaryBlue : theme.background.darkGreen,
}))`
    width: 195px;
    height: 68px;
    /* background-color: ${props => props.active ? props.theme.background.white : props.bg}; */
    background-color: ${props => props.active ? props.theme.background.white : "rgba(0,0,0,.4)"};
    
    font-weight: ${props=>props.theme.fontWeight.bold};
    color: ${props => props.active ? props.theme.textColor.primaryGreen : '#bdcce0'};
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
`;

const TitleButtonLandProject = styled.div`
    display: block;
    font-size: ${props=>props.theme.fontSize.medium};
    text-transform: uppercase;
`;

const DescriptionButtonLandProject = styled.div`
    font-family: ${props=>props.theme.fontTypeFace.fontQuicksand};
    font-size: 12px;
    color: #a8bad3;
`;

export {
    Wrapper as default,
    ButtonLandProject,
    TitleButtonLandProject,
    DescriptionButtonLandProject
};