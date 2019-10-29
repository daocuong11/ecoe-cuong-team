import styled from 'styled-components';
import { TextQuicksand12BoldBlue } from 'UIElement/Typography';
import { LABEL_COMMISSION } from "constants/labelActionForCard";

const Wrapper = styled.div`
  padding-top: 5px;
`;

const FinanceStyle = styled(TextQuicksand12BoldBlue)`
  display: inline-block;
  text-align: left;
  font-size: 1.8rem;
`;

const CommissionStyle = styled(FinanceStyle)`
  position: relative;
  color: ${props=> props.theme.textColor.primaryGreen};
  padding-right: 20px;

  &:before {
    content: "${LABEL_COMMISSION}";
    width: 50px;
    position: absolute;
    top: -15px;
    left: 0;

    font-size: ${props=>props.theme.fontSize.unit};
    font-family: ${props=>props.theme.fontTypeFace.fontMuli};
    font-weight: ${props=>props.theme.fontWeight.regular};
    color: #748cad;
  }
`;

const Span = styled.span`
  font-size: ${props=>props.theme.fontSize.small};
`;

export { Wrapper as default, FinanceStyle, CommissionStyle, Span };