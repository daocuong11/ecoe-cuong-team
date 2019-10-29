import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 105px;
  padding: ${props => props.padding && "30px 0"};
  
  @media (max-width: 1024px) {
    margin: 0;
    padding: 0;
  }
`;

const SeachBar = styled(Wrapper)`
  position: relative;
  top: -68px;
`;

export { Wrapper as default, SeachBar };