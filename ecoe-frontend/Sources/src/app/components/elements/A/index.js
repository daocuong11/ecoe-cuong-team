import styled from 'styled-components';

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

export default A;
