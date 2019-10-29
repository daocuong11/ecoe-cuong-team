import styled from 'styled-components';

const Wrapper = styled.div`
    background: ${props => props.theme.background.bg};
    overflow: hidden;


    // @media (max-width: 768px) {
    //     padding: 0 10px;
    // }
`;

export { Wrapper as default };