import styled from 'styled-components';

const Wrapper = styled.div``;

const Content = styled.div`
    height: 322px;
    overflow-y: auto;
    &::-webkit-scrollbar-track{
    }

    &::-webkit-scrollbar{
        width: 12px;
    }

    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: #EDF1F5;
    }
`;

const Column = styled.div.attrs(({col})=>({
    Col: col || 1,
    Padding: 30*(col - 1),
}))`
    display: inline-grid;
    width: calc((100% - ${props => props.Padding}px)/(${props => props.col}));
    padding: 0 15px;
`;

export { 
  Wrapper as default,
  Column,
  Content
};