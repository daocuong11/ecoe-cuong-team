import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

export const Wrapper = styled('div')`
	display: inline-block;
	position: relative;
	margin-bottom: 15px;
	
	${props => props.block && css`
		display: block;
	`}
`;

Wrapper.propTypes = {
	block: PropTypes.bool
};

export const FormControl = styled('input')`
	position: relative;
    height: 64px;
    border: 1px solid #E2E8F0;
    color: #0A2240;
    width: ${props => props.width ? (props.width + 'px') : '100%'};
	@media (max-width: 480px) and (min-width: 320px) {
		width: 100%;
    }
    outline: 0;
    padding: 22px 24px;
    
    &:focus {
        border: 1px solid #10C1AC;
    }
    
    &::placeholder {
        color: #ADBCD0;
    }
    
    ${props => props.isDirty && css`
		&:invalid {
	        border: 1px solid rgb(255, 87, 34);
	    }
	`}
    
    
    ${props => props.maxWidth && css`
		max-width: ${props.maxWidth}px;
	`}
    
    ${props => props.block && css`
		display: block;
	`}
`;

FormControl.propTypes = {
	width: PropTypes.number,
	maxWidth: PropTypes.number,
	block: PropTypes.bool,
	isDirty: PropTypes.bool
};


export const Error = styled('span')`
	position: absolute;
	display: block;
	color: rgb(255, 87, 34);
	font-size: 10px;
	font-weight: 700;
	padding: 0;
`;