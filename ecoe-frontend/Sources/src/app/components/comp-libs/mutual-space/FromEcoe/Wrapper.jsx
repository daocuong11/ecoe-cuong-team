import styled from 'styled-components';
import background from 'images/doc-quyen-tu-ecoe.png';
//import H1 from '../../../ui-libs/H1';
//import Logo from '../../../ui-libs/Logo';

const Wrapper = styled.div``;

const Intro = styled.div`
  display: block;
  height: 246px;
  background: #dcf7f8 url(${background}) 100% 33px no-repeat;
  padding: 30px 70px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 0;
    box-sizing: unset;
    background-position-y: bottom;
  }
`;

const Title = styled.div`
  text-align: right;
  
  H1 {
    font-family: ${props => props.theme.fontTypeFace.fontMuli};
    font-size: 36px;
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.textColor.primaryBlue};
    line-height: 1.5;
    margin: 0;
    padding-bottom: 20px;    
    text-transform: uppercase;
    float: left;
  };

  &:after {
    clear: both;
  }
`;

const Description = styled.div`
  display: block;
  clear: both;
  max-width: 350px;
  font-size: ${props => props.theme.fontSize.medium18};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  color: ${props => props.theme.textColor.primaryBlue};
  line-height: 1.5;
`;

export { Wrapper as default, Intro, Title, Description };