import styled from 'styled-components';

const Wrapper = styled.div`

`;
const SubTitle= styled.div`
font-size: ${props=>props.theme.fontSize.medium18};
color: ${props=>props.theme.textColor.primaryBlue};
font-weight: ${props=>props.theme.fontWeight.bold};
padding-bottom: 50px;
`;

const IFRAME = styled.iframe`
width: 100%;
height: 451px;
border:0;
`;

export { Wrapper as default,SubTitle,IFRAME };