import styled from 'styled-components';
import { devices } from "globalUtils/styledUtils"; 

const Wrapper = styled.div``;

const TitleSection = styled.div`
    font-size: ${props=>props.theme.fontSize.sectionTitle};
    color: ${props=>props.theme.textColor.primaryBlue};
    font-weight: ${props=>props.theme.fontWeight.bold};
    padding: 50px 0;
`;
const SubTitle= styled.div`
font-size: ${props=>props.theme.fontSize.medium18};
color: ${props=>props.theme.textColor.primaryBlue};
font-weight: ${props=>props.theme.fontWeight.bold};
padding-bottom: 50px;
`;
const WrapperItem= styled.div`
display: flex;
flex-direction: column;
height: ${props=> props.rowNumber? (props.rowNumber*55): "450"}px;
flex-wrap: wrap;
    ${devices.sm`
    height: auto;
    `}
`;

const Item= styled.div`
width: calc((100% / 2) - 55px);
border-bottom: 1px solid #E6E7EA;
padding: 15px 0;
display: flex;
flex-direction: column;
justify-content: space-around;
    ${devices.sm`
        width: 100%;
    `}
`;
const Title= styled.div`
color: ${props => props.theme.textColor.hotArea2};
font-weight: ${props=>props.theme.fontWeight.semiBold};
font-size: ${props=>props.theme.fontSize.normal};
&:after{
    content: "";
    display: block;
    background: url('${props=> props.icon}') no-repeat;
    width: 23px;
    height: 23px;
    float: right;
    position: relative;
    top: 0;
    background-size: 23px 23px;
}
`;

export { Wrapper as default, TitleSection, WrapperItem ,Item,Title,SubTitle };