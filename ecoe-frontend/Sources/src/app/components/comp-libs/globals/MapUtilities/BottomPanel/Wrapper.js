import styled from 'styled-components';
import { devices } from "globalUtils/styledUtils";
const Wrapper = styled.div`
display: flex;
${devices.sm`

`}
`;
const WrapperButton = styled.div`
width: 100%;
height: 96px;
`;
const TabContent = styled.div`
`;


export {
  Wrapper as default,
  WrapperButton,
  TabContent,
};