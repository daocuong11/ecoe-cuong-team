import styled from 'styled-components';
import { ContentSection } from '../Wrapper';
import { devices } from "globalUtils/styledUtils"; 

const Wrapper = styled.div`

`;
const TitleSection = styled.div`
    font-size: ${props => props.theme.fontSize.sectionTitle};
    color: ${props => props.theme.textColor.primaryBlue};
    font-weight: ${props => props.theme.fontWeight.bold};
    padding: 50px 0;
`;

const SubTitle= styled.div`
font-size: ${props=>props.theme.fontSize.medium18};
color: ${props=>props.theme.textColor.primaryBlue};
font-weight: ${props=>props.theme.fontWeight.bold};
padding-bottom: 50px;
`;

const Item = styled(ContentSection)`
${props => props.src && `
    background: url(${props.src});
    background-size: contain;
    background-repeat: no-repeat;  
    order: 1 !important;
    min-height: 213px;
    `
    }

${devices.sm`
    padding:0;
    width:100%;
    order:2;
    display:block;
    padding-right: 31px;
`}
`;

const Line = styled.div`
    border-bottom: ${props => props.border && "1px dashed #ccc"};
    margin-bottom: ${props => props.border && "30px"};
    padding-bottom: 30px;
    padding-top: ${props => props.paddingTop && "30px"};
    display:flex;
    justify-content: space-between;
    margin-right: 50px;
    ${devices.sm`
    margin-right:0;
    `}
    ${devices.md`
    margin-right:0;
    `}
    ${devices.lg`
    margin-right:0;
    `}
`;

const WrapperContent= styled.div`
display: flex;
${devices.sm`
flex-direction: column;
`}
`;


export { Wrapper as default, TitleSection, Item, Line,SubTitle,WrapperContent };