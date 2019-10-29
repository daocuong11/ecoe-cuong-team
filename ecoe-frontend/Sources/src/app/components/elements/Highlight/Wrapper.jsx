import styled from 'styled-components';

const Wrapper = styled.div``;

const Label = styled.div`
  position: relative;
  display: inline-block;
  height: 16px;
  padding: 3px 13px;
  background-color: #eaaf2b;

  font-size: 9px;
  line-height: 1.5;
  font-family: ${props=>props.theme.fontTypeFace.fontQuicksand};
  text-transform: uppercase;
  font-weight: ${props=>props.theme.fontWeight.bold};
  color: ${props=>props.theme.textColor.white};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -11px;
    border-right: 11px solid #eaaf2b;
    border-top: 11px solid #eaaf2b;
    border-left: 11px solid transparent;
    border-bottom: 11px solid #eaaf2b;
  }
`;

export { Wrapper as default, Label }