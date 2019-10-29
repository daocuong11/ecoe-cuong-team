import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 105px;
  padding: ${props => props.padding && "30px 0"};
  
  @media (max-width: 1024px) {
    margin: 0;
    padding: 0;
  }
`;
export const SeachBar = styled(Wrapper).attrs(({ isSearchResultPage }) => ({
  top: isSearchResultPage ? "2px" : "-68px",
}))`
  position: relative;
  top: ${props => props.top};
`;