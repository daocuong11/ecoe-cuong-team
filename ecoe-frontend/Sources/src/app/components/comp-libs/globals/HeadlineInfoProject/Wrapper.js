import styled from 'styled-components';
import { TextMuli10Regular } from 'UIElement/Typography';

const Wrapper = styled.div``;

const HeadlineInfoProjectStyle = styled.div`
  display: block;
  margin-top: 1rem;
  font-weight: bold;
`;

const Span = styled(TextMuli10Regular)``;

const SpanNumber = styled(TextMuli10Regular)`
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.normal};
  padding: 0 20px 0 5px;
  text-decoration: underline;
  text-decoration-style: dotted;
  text-underline-position: under;
`;

export { Wrapper as default, HeadlineInfoProjectStyle, Span, SpanNumber };