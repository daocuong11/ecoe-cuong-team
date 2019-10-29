import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
position: relative;
top: -20px;
`;

const LabelNumber = styled.div`
text-align: right;
padding-bottom: 11px;
font-size: ${props => props.theme.fontSize.large};
color: #183253;
font-weight: ${props => props.theme.fontWeight.bold};
font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
`;

export { Wrapper as default, LabelNumber };