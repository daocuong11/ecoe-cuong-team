import styled from 'styled-components';
import { devices } from "globalUtils/styledUtils"; 

const Wrapper = styled.div``;

const TitleSection = styled.div`
    font-size: ${props => props.theme.fontSize.sectionTitle};
    color: ${props => props.theme.textColor.primaryBlue};
    font-weight: ${props => props.theme.fontWeight.bold};
    padding: 50px 0;
`;

const WrapperItem = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const Item = styled.div`
width: calc((100% / 3) - 10px);
height: 97px;
box-shadow: 0 0 30px #ccc;
border: 1px solid #CFD9E6;
margin-bottom: 20px;
padding: 15px;
display: flex;
flex-direction: column;
justify-content: space-around;
${devices.sm`
    width:  100%;
`}

`;
const Title = styled.div`
color: ${props => props.theme.textColor.hotArea2};
font-weight: ${props => props.theme.fontWeight.bold};
font-size: ${props => props.theme.fontSize.normal};
`;


export { Wrapper as default, TitleSection, WrapperItem, Item, Title };