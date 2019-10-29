import styled from 'styled-components';
import Grid from '../../../elements/Grid';

const Wrapper = styled(Grid)``;

const ItemBorder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const EffectItem = styled.div`
  display: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 64, 60, .7);
`;

const Item = styled.div`
  position: relative;
  width: 265px;
  height: 265px;
  background: #ccc url(${props=> props.Image}) no-repeat center;
  cursor: pointer;

  &:hover ${EffectItem} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Label = styled.div`
  font-family: ${props => props.theme.fontTypeFace.fontMuli};
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: ${props => props.theme.fontWeight.extraBold};
  color: ${props => props.theme.textColor.primaryBlue};
  line-height: 1.7;
  text-transform: uppercase;
  padding-top: 20px;
`;

const Number = styled.div`
  font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: ${props => props.theme.fontWeight.extraBold};
  color: ${props => props.theme.textColor.pastelBlue};
  line-height: 1.7;
`;

export { Wrapper as default, ItemBorder, Item, Label, Number, EffectItem };