import styled from 'styled-components';


const Wrapper = styled.div``;

const A = styled.a`
  color: ${props => props.theme.textColor.primaryBlue};

  &:hover {
    color: ${props => props.theme.textColor.primaryGreen};
  }

  &:active {
    color: ${props => props.theme.textColor.primaryGreen};
  }

  &:visited {
    color: unset;
  }
`;

export { Wrapper as default, A }