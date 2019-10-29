import styled from 'styled-components';
import { devices } from "globalUtils/styledUtils"; 

const Wrapper = styled.div``;

const TitleSection = styled.div`
    font-size: ${props=>props.theme.fontSize.sectionTitle};
    color: ${props=>props.theme.textColor.primaryBlue};
    font-weight: ${props=>props.theme.fontWeight.bold};
    padding: 25px 0;
`;
const WrapperItem= styled.div`
display: flex;
flex-wrap: wrap;
justify-content: start;
`;

const Item= styled.div`
width: calc((100% / ${props =>props.col}) );
${props => props.borderBottom && `border-bottom: 1px dashed #E6E7EA;`}
padding: 15px 0;
display: flex;
flex-direction: column;
justify-content: space-around;
${devices.sm`
    width: calc((100% / 2) );
`}

`;
const RoleName= styled.div`
color: #7A869A;
font-size: ${props=>props.theme.fontSize.small};
`;
const Name = styled.div`
color: #253858;
font-size: ${props=>props.theme.fontSize.medium};
font-weight: ${props=>props.theme.fontWeight.bold};
${devices.sm`
padding-right: 40px;
`}

`;

export { Wrapper as default, TitleSection,WrapperItem,Item,RoleName,Name};