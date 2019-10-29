import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 30px 0;

  &:before {clear: both;}

  &:after {clear: both;}

  @media (max-width: 640px) {
    padding: 0 15px;
  }
`;

const TitleSection = styled.div`
  font-size: 2.8rem;
  line-height: 1.5;
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.textColor.primaryBlue};
`;

const ReadMore = styled.div`
  float: right;
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.textColor.primaryGreen};
  border-bottom: 2px solid #00837b;
  cursor: pointer;
`;

export {Wrapper as default, TitleSection, ReadMore };