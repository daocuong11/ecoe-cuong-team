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
}))`
    display: inline-grid;
    width: calc(100% / ${props => props.col});
    border-right: ${props => props.borderRight ? '1px solid #CFD9E6' : 'none'};
    box-sizing: border-box;
    max-height: 384px;

    &:first-child {
        padding-left: 0;
    }

    &:last-child {
        padding-right: 0;
    }
`;

const Title = styled.span`
    font-size: 20px;
    font-weight: bold;
    padding: 15px;
`;

export { 
  Wrapper as default,
  Column,
  Title,
  Content
};