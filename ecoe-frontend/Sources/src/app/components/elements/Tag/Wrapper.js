import styled from 'styled-components';

const Wrapper = styled.div``;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 1.2rem;
  font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
  font-weight: ${props => props.theme.fontWeight.bold};
  text-transform: uppercase;
`;

const TagStyle = styled.div.attrs(({tagStyle})=>({
  Type: tagStyle===0 ? tagStyle : 1,
  }))`
  display: inline-block;
  height: 24px;
  border-radius: 16px;
  background: ${props => props.theme.tagStyle[props.Type].background};
  color: ${props => props.theme.tagStyle[props.Type].color};
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
`;

export { Wrapper as default, Text, TagStyle };