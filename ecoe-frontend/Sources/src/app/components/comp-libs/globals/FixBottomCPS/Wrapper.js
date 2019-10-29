import styled from 'styled-components'

const Wrapper = styled.div`
  width: ${props=>props.fixed && "100vw"};
  /* height: ${props=>props.fixed && "100vh"}; */
  position: ${props=>props.fixed ? "fixed" : "relative"};
  bottom: ${props=>props.fixed ? "160px" : "90px"};
  z-index: 9999;
`;

const Border = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Content = styled.div`
    position: absolute;
    bottom: -150px;
    left: calc(50% - 104px);
`;

export { Wrapper as default, Border, Content }