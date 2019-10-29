import styled from 'styled-components';
import { devices } from "globalUtils/styledUtils";

const Wrapper = styled.div`
width: 100%;
height: 100vh;
position: relative;
display: flex;
//  align-items: center;
padding-top: 55px;
justify-content: center;

`;
const WrapperContent = styled.div`
height: 40vh;
width: 750px;
text-align: center;
margin: 0 auto;
${devices.sm`
width:100%;
`}
${devices.md`
width:100%;
`}
${devices.lg`
width:100%;
`}
`;
const WrapperMenu = styled.div`
border-bottom: 1px solid rgb(46, 46, 46);
    margin-bottom: 50px;
    width: 100vw;
`;

export {
    Wrapper as default,
    WrapperMenu,
    WrapperContent
};