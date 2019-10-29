import styled from 'styled-components';
import Popup from 'reactjs-popup';

const Wrapper = styled.div`

`;

const PopupStyle = styled(Popup)`
    width: 100% !important;
    height:100%;
    background:#615f5f !important;
    border: none !important;
    padding:0 !important;
`;

const ButtonClose = styled.div`
position: absolute;
top: 38px;
right: 45px;
background: #0A2240;
padding: 0px 4px 5px 4px;
color: #FFF;
font-size: 34px;
cursor: pointer;
z-index: 9999;
`;

export {
    Wrapper as default,
    PopupStyle,
    ButtonClose
  };