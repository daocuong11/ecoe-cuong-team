import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 1366px;
    margin: auto;
    
    @media (max-width: 1024px) {
        margin: 0;
        padding: 0;
    }
`;

const ContainerCps = (props) => {
  return (
    <Wrapper>
        {props.children}
    </Wrapper>
  );
};
export default ContainerCps;