import styled, {css} from "styled-components";
import PropTypes from 'prop-types';
import nextIcon from "images/icons/icon-next-2.svg";


export const Btn = styled('button')`
	font-size: 12px;
	font-weight: bold;
	padding: 12px 24px;
	outline: 0;
	border: 1px solid #00837B;
	text-transform: uppercase;
	cursor: pointer;
	position: relative;

	>span {
		::before {
			content:"";
			background: url(${nextIcon}) 18px 1px no-repeat;
			box-sizing: border-box;
			position: absolute;
			right: 0;
			width: 34px;
			height: 34px;
			@media(max-width: 480px) and (min-width: 320px) {
				/*
				top: -4px;
				left: -6px;
				*/
			}
		}
	}
	&:hover {
		opacity: .8;
	}
	
	${props => props.primary && css`
		background: #00837B;
		color: #fff;
	`}
	
	${props => props.outline && css`
		background: #fff;
		color: #00837B;
	`}
	
	${props => props.disabled && css`
		background: #CFD9E6;
		border-color: #CFD9E6;
		cursor: not-allowed;
	`}
	
	& + & {
		margin-left: 12px;
	}
`;

Btn.propTypes = {
	primary: PropTypes.bool,
	outline: PropTypes.bool,
	disabled: PropTypes.bool,
};