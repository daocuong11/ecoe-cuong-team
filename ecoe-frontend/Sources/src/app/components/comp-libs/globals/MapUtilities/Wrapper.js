import styled from 'styled-components';
import { devices } from "globalUtils/styledUtils";

const Wrapper = styled.div.attrs(({ isPopup }) => ({
    IsPopup: isPopup || false
}))`

${props => props.isMobile ? `
display:block;
height: 100%;`:`
display: flex;
`
}
${props => props.IsPopup ? `
    width: 90%;
    height: 90%;
    margin: 0 auto;
    top: 5%;
    position: relative;
    `: `
    // height: 552px;
    position: relative;
    box-shadow:0 0 30px #ccc;
    margin: 0 -15px;
`}
`;
const SubTitle = styled.div`
font-size: ${props => props.theme.fontSize.medium18};
color: ${props => props.theme.textColor.primaryBlue};
font-weight: ${props => props.theme.fontWeight.bold};
padding-bottom: 50px;
`;

const TitleSection = styled.div`
    font-size: ${props => props.theme.fontSize.sectionTitle};
    color: ${props => props.theme.textColor.primaryBlue};
    font-weight: ${props => props.theme.fontWeight.bold};
    padding: 50px 0;
`;

export { Wrapper as default, TitleSection, SubTitle };