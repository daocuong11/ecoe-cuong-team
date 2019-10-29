import styled from 'styled-components';
import { devices } from "globalUtils/styledUtils";

const Wrapper = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

const IFRAME = styled.iframe.attrs(({ fullSize }) => ({
    Size: fullSize ? '100%' : '60%',
}))`
width: ${props => props.Size};
height: ${props => props.Size};
padding-left:105px;
border:0;
${devices.sm`
padding-left:0;
width: 100%;
height: ${props => props.fullSize ? 'calc(100% - 65px)' : '30%'};
top: -33px;
position: relative;
`}
${devices.md`
padding-left:0;
width: 100%;
height: ${props => props.fullSize ? 'calc(100% - 65px)' : '30%'};
top: -33px;
position: relative;
`}
${devices.lg`
padding-left:0;
width: 100%;
height: ${props => props.fullSize ? 'calc(100% - 65px)' : '30%'};
top: -33px;
position: relative;
`}
`;

export {
    Wrapper as default,
    IFRAME
};