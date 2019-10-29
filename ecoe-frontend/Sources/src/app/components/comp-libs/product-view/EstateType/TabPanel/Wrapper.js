import styled from 'styled-components';


import { devices } from "globalUtils/styledUtils";
const Wrapper = styled.div`
${devices.sm`
margin:-15px;
`}
`;

const TitleTab = styled.div`
`;


const WrapperItem = styled.div`
    padding-top: 30px;

    &:first-child {
        padding-top: 0;
    }
`;

const TitleContent = styled.div`
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.textColor.primaryBlue};
    padding-bottom: 30px;
`;

const Content = styled.div`

`;

export { Wrapper as default, TitleTab, WrapperItem, TitleContent, Content };