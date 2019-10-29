import styled from 'styled-components';
import IconUpBlue from 'images/icons/icon-dropup-blue.svg'
import IconDropdownBlue from 'images/icons/icon-dropdown-blue.svg'

const Wrapper = styled.div``;

const ProductFunctionBar = styled.div`
  position: relative;
  font-size: 12px;
  line-height: 1.5;
  font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

const DropdownProductStatus = styled.div`
  position: relative;
  display: inline-block;
  color: ${props => props.theme.textColor.primaryGreen};
  text-transform: uppercase;
  padding: 5px 20px 5px 10px;
  margin-right: 10px;

  &:after {
    position: absolute;
    top: 0px;
    right: -5px;
    height: 100%;
    display: flex;    
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    content: url(${props => props.isOpen ? IconUpBlue : IconDropdownBlue});
  }

  &:hover {
    cursor: pointer;
  }
`;

const OptionContainer = styled.ul`
  position: absolute;
  top: 20px;
  right: 0;
  width: 120px;
  text-align: left;
  margin-top: 10px;
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 4px 10px 0 rgba(204, 204, 204, .5);
  z-index: 9;
`;

export { Wrapper as default, ProductFunctionBar, DropdownProductStatus, OptionContainer }