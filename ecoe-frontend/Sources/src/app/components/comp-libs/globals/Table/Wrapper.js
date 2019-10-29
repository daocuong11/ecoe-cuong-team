import styled from 'styled-components';

const Wrapper = styled.div.attrs(({size})=>({
  sizeFrame: ((100 / 12) * size)+"%" || "100%",
  }))`
  display: inline-block;
  width: ${props => props.sizeFrame};
`;

export default Wrapper;