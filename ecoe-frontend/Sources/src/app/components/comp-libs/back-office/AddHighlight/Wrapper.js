import styled from 'styled-components';
import { TextQuicksand12BoldBlue } from 'UIElement/Typography';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    background: #fff;
    border: 1px dashed #00837B;
`;

const Label = styled(TextQuicksand12BoldBlue)`
    color: ${props=>props.theme.textColor.primaryGreen};
    text-transform: uppercase;
    padding-top: 20px;
`

export { Wrapper as default, Label };