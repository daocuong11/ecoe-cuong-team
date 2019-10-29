import styled from 'styled-components';

const Wrapper = styled.div`

`;

const Item = styled.div`
    display: inline-block;
    width: ${props => props.size+'px'};
    height: ${props => props.size+'px'};
    overflow: hidden;
    margin-right: ${props=>props.viewType==="overlap" ? "-5px" : "5px"};

    &:last-child {margin-right: 0;}
`;

export { Wrapper as default, Item };