import styled from 'styled-components';

import IconPhone from 'images/icons/card/phone.svg'

const Wrapper = styled.div`
  display: block;
`;

const Phone = styled.div`
  width: 36px;
  height: 36px;
  background: #fff url(${IconPhone}) center no-repeat;
  border: #ccc;
  border-radius: 50%;
  box-shadow: 0 4px 10px 0 rgba(204,204,204,.5);

  :hover {
    background-color: ${props=>props.theme.background.lightCyan};
  }
`;

export { Wrapper as default, Phone }