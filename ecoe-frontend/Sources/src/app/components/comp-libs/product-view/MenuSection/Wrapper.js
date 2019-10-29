import styled from 'styled-components';
import { ContentSection } from '../Wrapper';

const Wrapper = styled.ul`
display: flex;
list-style: none;
overflow: auto;
font-size: 13px;
color: ${props => props.theme.textColor.primaryBlue};
font-weight: ${props => props.theme.fontWeight.bold};
text-transform: uppercase;
margin-right: -15px;
position: ${props => props.fix};
top: ${props => props.top};
${props => props.fix === "fixed" && `
background-color: ${props.backgroundColor ? props.backgroundColor : "#f4fbfc"};
z-index: 998;
border-bottom: 1px solid #CCC;
margin-left: -15px;
padding-left: 15px;
width: 100vw;
overflow: -moz-scrollbars-none;
scrollbar-height: none; /* Firefox */
-ms-overflow-style: none;  /* IE 10+ */
-ms-overflow-style: none;
&::-webkit-scrollbar { height: 0 !important }

`}

`;
const Li = styled.li`
min-width: max-content;
padding: 20px 20px 20px 0px;
${props => props.active && `color: ${props.theme.textColor.primaryGreen}`};
`;


const TitleSection = styled.div`
    font-size: ${props => props.theme.fontSize.sectionTitle};
    color: ${props => props.theme.textColor.primaryBlue};
    font-weight: ${props => props.theme.fontWeight.bold};
    padding: 50px 0 30px;
    border-bottom: 1px dashed #b9c0cc;
`;

const Item = styled(ContentSection)``;


export { Wrapper as default, TitleSection, Item, Li };