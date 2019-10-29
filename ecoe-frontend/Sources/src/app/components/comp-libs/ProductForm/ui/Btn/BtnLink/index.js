import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

export const BtnLink = styled('button')`
	border: 0;
	outline: 0;
	background: transparent;
	color: #00837B;
	padding: 0;
	font-weight: bold;
	cursor: pointer;
	user-select: none;
	&:hover {
		opacity: .8;
	}
	
	${props => props.disabled && css`
		opacity: .8;
		color: #707070;
		cursor: not-allowed;
	`}
`;

BtnLink.propTypes = {
	disabled: PropTypes.bool
};