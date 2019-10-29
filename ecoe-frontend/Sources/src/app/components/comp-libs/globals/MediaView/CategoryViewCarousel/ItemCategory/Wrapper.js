import styled from 'styled-components';
import Img from '../../../../../elements/Img';

const Wrapper = styled.div`
height: 61px;
width: 97px;
position: relative;
cursor: pointer;
`;

const Label = styled.div`
  font-family: ${props => props.theme.fontTypeFace.fontMuli};
  font-size: ${props => props.theme.fontSize.normal};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: #FFF;
  line-height: 1.7;
  padding-top: 20px;
  position: absolute;
  top: 0;
  left:0;
  right:0;
  bottom:0;
  z-index: 2;
`;
const Overlay= styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.4);
    z-index: 1;
`;
const ImgCustom = styled(Img)`
    width:100%;
    height:100%;
    
`;


export { Wrapper as default, Label,ImgCustom,Overlay };