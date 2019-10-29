import styled from 'styled-components';
import Grid from '../../../elements/Grid';

const Wrapper = styled(Grid)``;

const Label = styled.div`
  font-family: ${props => props.theme.fontTypeFace.fontMuli};
  font-size: ${props => props.header ? "28px" : props.theme.fontSize.large};
  font-weight: ${props => props.theme.fontWeight.extraBold};
  color: ${props => props.theme.textColor.hotArea};
  line-height: 1.7;
  padding-top: 20px;
`;

const ItemBorder = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 335px;
  padding: 35px;
  background: ${props=>props.header && props.theme.background.white};
  box-shadow: ${props=>props.header ? "0 0 10px rgba(0, 0, 0, .1)" : "none"};
  overflow: hidden;
  >Img { 
    &:hover {
      transform: scale(1.3);
      transition: all .2s ease-in-out;
      cursor: pointer;
    }
  }
`;

const SubLabel = styled.div`
  font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
  font-size: ${props => props.header ? "20px" : props.theme.fontSize.medium};
  font-weight: ${props => props.theme.fontWeight.extraBold};
  color: ${props => props.theme.textColor.hotArea2};
  line-height: 1.7;
`;
export { Wrapper as default, ItemBorder, Label, SubLabel };