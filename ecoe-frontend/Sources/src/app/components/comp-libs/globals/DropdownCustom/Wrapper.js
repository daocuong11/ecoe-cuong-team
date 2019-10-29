import styled from 'styled-components';
import Popup from 'reactjs-popup';
import IconSticked from 'images/icons/sticked.svg'

const Wrapper = styled.div`
  outline: none !important;
  outline-offset: none !important;
`;

const PopupStyle = styled(Popup)`
  width: 100% !important;
  max-width: fit-content!important;
  ${props => props.maxWidth && `
    // max-width: ${props.maxWidth} !important;`
  }
  box-sizing: content-box;
`;

const ButtonDropdown = styled.div.attrs(({ type }) => ({
    TypeDropdown: type,
}))`
  display: inline-block;
  font-size: 14px;
  color: #0a2240;
  font-weight: 700;
  width: 100%;
 ${props=> props.borderBottom && `border-bottom: 1px solid #CCC;`}

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
    top: 8px;
    float: right;
    right: -5px;
  }

  &:active,
  &:hover {
    color: ${props => props.theme.background.primaryGreen};
    cursor: pointer;
  }
`;

const DropdownContainer = styled.div`
  display: block;
`;

const DropdownFooter = styled.div`
  display: block;
  padding: 10px;
  border-top: 1px solid #ccc;
`;
const Sticked = styled.div`
  &:before {
    content: url(${IconSticked});
    position: absolute;
    left: 15px;
    top: 5px;
    width: 10px;
    height: 10px;
  }
`;

const StyledOption = styled.li`
  display: block;
  position: relative;
  padding: ${props => props.TypeDropdown === 1 ? "0 0 0 35px" : "5px 35px"};

  margin-bottom: ${props => props.TypeDropdown === 1 ? "15px" : "0"};
  color: ${props => props.TypeDropdown === 2 && props.value && props.theme.textColor.primaryGreen};
  line-height: 1.5;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${props => props.TypeDropdown !== 1 && "#f5f5f5"};
  }
`;


export {
    Wrapper as default,
    PopupStyle,
    ButtonDropdown,
    DropdownContainer,
    DropdownFooter,
    Sticked,
    StyledOption
};