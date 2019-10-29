import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

export const CheckMark = styled('span')`
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background-color: #fff;
     border: 1px solid #DFE5EB;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-flow: column;
     padding: 15px;
`;

export const Checkbox = styled('label')`
    height: 110px;
    width: 165px;
    display: inline-flex;
    align-items: center;
    position: relative;
    
    cursor: pointer;
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
            background-color: #EAF9FA;
            border: none;
        }
    }
    
    &:hover {
        ${CheckMark} {
            background-color: #DFE5EB;
        }
    }
    
`;

export const Icon = styled('div')`
	${props => props.width && css`
		max-width: ${props.width}px;
	`}
	
	${props => props.height && css`
		max-height: ${props.height}px;
	`}
`;

Icon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};

export const Title = styled('div')`
	color: #28466A;
	font-size: 12px;
	font-weight: bold;
`;