import styled from 'styled-components';
import { TextQuicksand12BoldBlue } from 'UIElement/Typography';

const Wrapper = styled.div``;

const UtilityStyle = styled.div`
  display: block;
  margin-top: 1rem;
  font-weight: bold;
`;

const Utility = styled(TextQuicksand12BoldBlue).attrs(({typeIcon})=>({
    icon: typeIcon || "IconDirection",
  }))`
  display: inline-block;
  position: relative;
  left: 25px;
  padding-right: 45px;

  &:before {
    content: "";
    position: absolute;
    left: -25px;
    top: 2px;
    background: url(${props => props.icon}) no-repeat 100% 100%;
    background-size: contain;
    width: 16px;
    height: 16px;
  }

  &:last-child { padding-right: 0; }
`;

export { Wrapper as default, UtilityStyle, Utility };