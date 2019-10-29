import styled from 'styled-components';
import { ContentSection } from '../Wrapper';
import { devices } from "globalUtils/styledUtils";

const Wrapper = styled.div`
    position: relative;
`;

const WrapperBG= styled.div`
${devices.sm`
background: #eaf9fa;
margin: 0px -15px;
padding: 15px;
`}
${devices.md`
background: #eaf9fa;
margin: 0px -15px;
padding: 15px;
`}
`;

const TitleSection = styled.div`
    display:none;
    font-size: ${props => props.theme.fontSize.sectionTitle};
    color: ${props => props.theme.textColor.primaryBlue};
    font-weight: ${props => props.theme.fontWeight.bold};
    padding: 25px 0;
    ${devices.sm`
        display:block;
    `}
    ${devices.md`
        display:block;
    `}
    ${devices.lg`
        display:block;
    `}
`;

const TitleProject = styled.div`
    font-size: ${props => props.theme.fontSize.sectionTitle};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.textColor.primaryBlue};
    text-transform: capitalize;
    line-height: 1.5;
    padding-top: 10px;
`;

const AddressProject = styled.div`
    font-size: ${props => props.theme.fontSize.normal};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.textColor.hotArea};
    text-transform: capitalize;
    padding: 10px 0;
`;

const Item = styled(ContentSection)``;

const Line = styled.div`
    border-bottom: ${props => props.border && "1px dashed #ccc"};
    margin-bottom: ${props => props.border && "30px"};
    padding-bottom: 30px;
    padding-top: ${props => props.paddingTop && "30px"};
`;

export { Wrapper as default, TitleProject, AddressProject, Line, Item, TitleSection,WrapperBG }