import styled from 'styled-components';
import A from "../../elements/A";

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

const WrapperItem = styled.div``;

const SectionFull = styled.div`
  padding: 35px 0;
  background: #dbeef0;
`;

const LinkSubdomain = styled.div`
  display: inline-block;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  color: ${props => props.theme.textColor.primaryGreen};
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.textColor.primaryBlue};    
  }
`;

export { Wrapper as default, SeachBar, WrapperItem, SectionFull, LinkSubdomain };