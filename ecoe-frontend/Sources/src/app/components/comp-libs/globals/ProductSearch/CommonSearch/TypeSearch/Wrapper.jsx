import styled from 'styled-components';

const Wrapper = styled.div`
padding:20px;
`;

const Column = styled.div.attrs(({ col }) => ({
    Col: col || 1,
    Padding: 0,
}))`
    display: table-cell;
    width: calc((100% - ${props => props.Padding}px)/(${props => props.col}));
    padding: 0 15px;
    min-height:300px;

    &:first-child {
        padding-left: 0;
    }

    &:last-child {
        padding-right: 0;
    }

    :hover {
        box-shadow: 1px 1px 6px #ccc
    }
`;

export {
    Wrapper as default,
    Column,
};