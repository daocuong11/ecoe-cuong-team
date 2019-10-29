import styled from 'styled-components';
import { devices } from "globalUtils/styledUtils";

const Wrapper = styled.div`
width: 100%;
position: relative;
overflow: hidden;
${props=> props.isMobile && `height: 90vh;`}
${props=> props.isPopup && props.isMobile  && `height: inherit;`}
img{
    width: 100%;
    height: 100%;
}
`;
const ButtonViewMore = styled.div`
position: absolute;
bottom: 10px;
left: ${props=> props.isHidePanel ? '400px' : '20px'};
color: ${props => props.theme.textColor.primaryBlue};
font-size:  ${props => props.theme.fontSize.normal};
font-weight:  ${props => props.theme.fontWeight.bold};
background: #FFF;
`;
const GroupControl = styled.div`
position: absolute;
${props=> props.isMobile ?`
  top: 10px;
  right: 10%;`:`
  bottom: 10px;
  left: ${props.isHidePanel ? '400px' : '20px'};`
}
display: flex;
box-shadow: 0 0 30px #ccc;
background: #FFF;
width: 170px;
height: 40px;
align-items: center;
`;
const WrapperTitle = styled.div`
background:#FFF;
color: ${props => props.theme.textColor.primaryBlue};
font-size:  ${props => props.theme.fontSize.small};
font-weight:  ${props => props.theme.fontWeight.bold};
display: flex;
justify-content: center;
align-items: center;
width: 96px;
border-right: 1px solid #CCC;
margin-right: 5px;
`;

const Iframe = styled.iframe`
border:0;
`;

export {
  Wrapper as default,
  Iframe,
  ButtonViewMore,
  GroupControl,
  WrapperTitle
};