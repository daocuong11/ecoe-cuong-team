import styled from 'styled-components';
import { devices } from "globalUtils/styledUtils"; 

const Wrapper = styled.div`
  position: relative;
`;
const styleWrapperCategory ='display: none;';
const WrapperCategory = styled.div`
    width:60%;
    ${devices.sm`
        ${styleWrapperCategory}
    `}
    ${devices.md`
        ${styleWrapperCategory}
    `}
    ${devices.lg`
        ${styleWrapperCategory}
    `}
`;
const styleWrapperIconPhoto ='display: inherit;';
const WrapperIconPhoto = styled.div`
    display: none;
    ${devices.sm`
        ${styleWrapperIconPhoto}
    `}
    ${devices.md`
        ${styleWrapperIconPhoto}
    `}
    ${devices.lg`
        ${styleWrapperIconPhoto}
    `}
`;
const styleWrapperButtons ='width:100%;background: transparent;';
const WrapperButtons = styled.div`
    width:40%;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    align-items: center;
    z-index: 2;
    background: #f4fbfc;
    ${devices.sm`
        ${styleWrapperButtons}
    `}
    ${devices.md`
        ${styleWrapperButtons}
    `}
    ${devices.lg`
        ${styleWrapperButtons}
    `}
`;

const styleWrapperFooter='margin-top:0;padding: 20px 8px;background: #FFF;'
const WrapperFooter = styled.div`
  margin-top:48px;
  display:flex;

    ${devices.sm`
        ${styleWrapperFooter}
    `}
    ${devices.md`
        ${styleWrapperFooter}
    `}
    ${devices.lg`
        ${styleWrapperFooter}
    `}
`;

export { 
  Wrapper as default,
  WrapperCategory,
  WrapperButtons,
  WrapperFooter,
  WrapperIconPhoto
};