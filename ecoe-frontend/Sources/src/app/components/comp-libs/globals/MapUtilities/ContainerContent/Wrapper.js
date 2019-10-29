import styled from 'styled-components';

const Wrapper = styled.div`
background-color: #F4F9FA;
color: #7A869A;
padding: 24px;
font-size: ${props=>props.theme.fontSize.normal};
`;
const Item = styled.div`
display: flex;
justify-content: space-between;
`;
const Name = styled.div`
display: inline-block;
width: 180px;
white-space: nowrap;
overflow: hidden !important;
text-overflow: ellipsis;
padding: 3px 0px;
`;
const Distance = styled.div`
color: ${props =>props.theme.textColor.primaryGreen};
font-weight: ${props=>props.theme.fontWeight.bold};
padding: 3px 0px;
`;



export {
  Wrapper as default,
  Item,
  Name,
  Distance
};