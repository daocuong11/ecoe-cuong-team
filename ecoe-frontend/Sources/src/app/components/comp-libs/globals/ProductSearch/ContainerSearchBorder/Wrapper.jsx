import styled from 'styled-components';
import Popup from 'reactjs-popup';

const Wrapper = styled.div`
  outline: none !important;
  outline-offset: none !important;
`;

const PopupStyle = styled(Popup)`
    width: 100% !important;
    ${props => props.maxWidth && `
      max-width: ${props.maxWidth} !important;`
  }
    box-sizing: content-box;
    z-index: 999999 !important;
`;

const ButtonDropdown = styled.div.attrs(({ type }) => ({
  TypeDropdown: type,
}))`
  display: inline-block;
  padding: 0 30px 0 10px;
  border-right: 1px solid #ccc;
  margin:15px 0px;


  font-size: ${props => props.TypeDropdown === 1 ? "16px" : "14px"};
  color: ${props => props.TypeDropdown === 1 ? props.theme.textColor.primaryGreen : props.theme.textColor.primaryBlue};
  text-transform: ${props => props.TypeDropdown === 1 && "uppercase"};
  font-weight: ${props => !props.child && props.theme.fontWeight.bold};

  &:after {
    content: "";
    width: 0;
    height: 0;
	  border: 6px solid transparent;
    border-top-color: ${props => props.theme.background.primaryGreen};
    position: relative;
    left: 20px;
    top: 12px;
  }

  &:active,
  &:hover {
    color: ${props => props.theme.background.primaryGreen};
    cursor: pointer;
  }
`;

const DropdownContainer = styled.div`
  display: block;
  padding: ${props => props.padding ? props.padding : '10px'};
`;

const DropdownFooter = styled.div`
  display: block;
  padding: 10px;
  border-top: 1px solid #ccc;
`;
const CounterLabel = styled.label`
    width: 22px;
    height: 18px;
    padding: 0px 5px;
    box-shadow: 0px 0 4px #0A2240;
    border-radius: 4px;
    margin: 5px;
    font-size: 14px;
`;

export {
  Wrapper as default,
  PopupStyle,
  ButtonDropdown,
  DropdownContainer,
  DropdownFooter,
  CounterLabel
};