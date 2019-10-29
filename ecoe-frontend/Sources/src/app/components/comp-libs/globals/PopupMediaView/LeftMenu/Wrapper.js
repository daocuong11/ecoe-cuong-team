import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { devices } from "globalUtils/styledUtils";

const styleWrapper='height: 65px;width:100%;bottom:0;display: flex;padding-top: 0;padding-bottom:0;';
const Wrapper = styled.div`
height: 100vh;
padding-top: 66px;
padding-bottom: 96px;
align-items: center;
justify-content: center;
justify-items: center;
position: fixed;
width: 105px;
background:#343434;
z-index: 999;

${devices.sm`
  ${styleWrapper}
`}
${devices.md`
  ${styleWrapper}
`}
${devices.lg`
  ${styleWrapper}
`}

`;
const styleWrapperButton ='height: 65px;';
const WrapperButton = styled.div`
width: 100%;
height: 96px;
${devices.sm`
  ${styleWrapperButton}
`}
${devices.md`
  ${styleWrapperButton}
`}
${devices.lg`
  ${styleWrapperButton}
`}
`;

export {
  Wrapper as default,
  WrapperButton,
};