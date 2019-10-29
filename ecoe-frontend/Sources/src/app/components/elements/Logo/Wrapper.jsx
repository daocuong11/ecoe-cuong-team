import styled from 'styled-components';

const Wrapper = styled.div``;

const LogoStyle = styled.img`
  display: inline-block;
  width: ${props => props.size ? props.size : "40px"};
`;

const LabelStyle = styled.div`
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  color: #28466A;
`;

export { Wrapper as default, LogoStyle, LabelStyle };