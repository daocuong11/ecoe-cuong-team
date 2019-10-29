import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: block;
`;

const CheckboxContainer = styled.div`
  display: block;
  position: relative;
  cursor: pointer;
  padding-left: ${props=>props.filterMobile ? '35px' : '25px'};

  filter: grayscale(${props => props.checked ? '0%' : '100%'});
  font-weight: normal;
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 1;
  cursor: pointer;
  height: 10px;
  width: 10px;
`;

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  ${props=>props.filterMobile===true ? `
    height: 24px;
    width: 24px;
    top: -2px
  ` : `
    height: 14px;
    width: 14px;
    top: 4px;
  `}
  left: 0;
  background: ${props => props.checked === true || props.checked === 3 || props.checked === 2 ? '#00837b' : '#fff'};
  border: 1px solid #00837b;
`;

export const CheckMark = styled('span')`
     position: absolute;
     top: 0;
     left: 0;
     height: 20px;
     width: 20px;
     background-color: #fff;
     border: 1px solid #B9B9B9;
     border-radius: 2px;
     
     &:after {
        content: "";
        position: absolute;
        display: none;
        left: 5px;
        top: 0;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
     }
`;


export const Indeterminate = styled('span')`
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #00837B;
    border: 2px solid #00837B;
     
    &:after {
        content: "";
        position: absolute;
        left: 3px;
        top: -3px;
        width: 10px;
        height: 10px;
        border: solid #fff;
        border-width: 0 0 3px 0;
        transform: none;
    }
`;

export const Checkbox = styled('label')`
    height: 20px;
    
    display: inline-flex;
    align-items: center;
    position: relative;
    margin: 0;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        
        &:checked ~ ${CheckMark} {
            background-color: #00837B;
            border-color: #00837B;
        }
        
        &:checked ~ ${CheckMark}:after {
            display: block;
        }
    }
    
    &:hover {
        ${CheckMark} {
            background-color: #ccc;
        }
    }
    
    ${props => props.primary && css`
		${CheckMark} {
			border: 2px solid #00837B;
		}
	`}
`;

Checkbox.propTypes = {
	primary: PropTypes.bool
};

export const CheckTitle = styled('span')`
    font-size: 12px;
    color: #0A2240;
    font-family: ${props => props.theme.fontTypeFace.fontQuicksand};
    font-weight: ${props => props.theme.fontWeight.bold};
`;

export { Wrapper as default, CheckboxContainer, HiddenCheckbox, StyledCheckbox }