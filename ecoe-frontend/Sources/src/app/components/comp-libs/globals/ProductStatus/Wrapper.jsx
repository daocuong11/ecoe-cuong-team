import styled from 'styled-components';
import IconDropdown from 'images/icons/icon-dropdown.svg'
import IconDropdownBlue from 'images/icons/icon-dropdown-blue.svg'
import IconSticked from 'images/icons/sticked.svg'

const Wrapper = styled.div`
  display: block;
`;

const TitleSort = styled.div`
  display: block;
  color: ${props => props.theme.textColor.label};
  font-family: ${props => props.theme.fontTypeFace.fontMuli};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: 10px;
  text-transform: uppercase;
  padding-left: 35px;
  padding-bottom: 15px;
`;

const DropdownProductStatus = styled.div`
  display: inline-block;
  padding: 6px 13px;
  border-radius: 20px;

  background: ${props => props.TypeDropdown===1 && props.theme.background.help};

  color: ${props => props.TypeDropdown===1 ? props.theme.textColor.white : props.theme.textColor.primaryBlue};
  color: ${props => props.TypeDropdown!==1 && props.isOpen && props.theme.textColor.primaryGreen};

  font-family: ${props => props.TypeDropdown===1 && props.theme.fontTypeFace.fontQuicksand};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.TypeDropdown===1 ? "12px" : "14px"};
  line-height: 1;
  text-transform: ${props => props.TypeDropdown===1 && "uppercase"};

  &:after {
    content: url(${props => props.TypeDropdown===1 ? IconDropdown : IconDropdownBlue});
    padding-left: 8px;
  }

  &:hover {
    color: ${props => props.TypeDropdown!==1 && props.theme.textColor.primaryGreen};
    cursor: pointer;
  }
`;

const OptionContainer = styled.ul`
  display: ${props => props.TypeDropdown===1 ? "block" : "table-cell"};
  width: ${props => props.TypeDropdown===1 && "132px"};
  padding: ${props => props.TypeDropdown===1 ? "20px 0" : "20px 0 15px"};
  margin-top: 10px;
  border: 1px solid #eee;
  box-shadow: 0 4px 10px 0 rgba(204, 204, 204, .5);
  background: #fff;

  font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.TypeDropdown===1 ? "12px" : "14px"};
  text-transform: ${props => props.TypeDropdown===1 && "uppercase"};
  color: ${props => props.theme.textColor.primaryBlue};
  position: absolute;
  white-space: nowrap;
  z-index: 2;
`;

const UnSelected = styled.div`
  position: absolute;
  left: 10px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid #748cad;
  box-sizing: content-box;
`;

const Selected = styled(UnSelected)`
  border: 1px solid #00837b;

  &:before {
    content: "";
    position: absolute;
    left: 3px;
    top: 3px;
    width: 8px;
    height: 8px;
    background: #00837b;
    border-radius: 50%;
  }
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
  padding: ${props => props.TypeDropdown===1 ? "0 0 0 35px" : "5px 35px"};

  margin-bottom: ${props => props.TypeDropdown===1 ? "15px" : "0"};
  color: ${props => props.TypeDropdown===2 && props.value && props.theme.textColor.primaryGreen};
  line-height: 1.5;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${props => props.TypeDropdown!==1 && "#f5f5f5"};
  }
`;


export { Wrapper as default, TitleSort, DropdownProductStatus, OptionContainer, StyledOption, Selected, UnSelected, Sticked }