import styled from 'styled-components';

const Wrapper = styled.div``;

const ContentFlex = styled.div`
  display:flex;
  flex-wrap: wrap;
`;
const Content = styled.div`
`;

const Column = styled.div.attrs(({col})=>({
    Col: col || 1,
}))`
    display: inline-grid;
    width: calc(100% / ${props => props.col});
    border-right: ${props => props.borderRight ? '1px solid #CFD9E6' : 'none'};
    box-sizing: border-box;
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
  Content,
  ContentFlex
};