import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

import chervonRightIcon from 'images/icons/chervon-right.svg';

export const Nav = styled('ul')`
	overflow: hidden;
	display: inline-block;
`;
export const NavItem = styled('li')`
	position: relative;
	float: left;
	list-style-type: none;
	color: #B4BBC4;
	font-weight: bold;
	
	padding-right: 60px;
	padding-top: 25px;
	padding-bottom: 25px;
	user-select: none;
	cursor: not-allowed;
	border-top: 3px solid transparent;
	
	&:not(:last-child):before {
		content: "";
		position: absolute;
		right: 20px;
		top: calc(50% - 0px);
		width: 10px;
		height: 10px;
		background: url(${chervonRightIcon}) no-repeat;
		z-index: 0;
		opacity: .4;
	}
	
	${props => props.enable && css`
		color: #183253;
		cursor: pointer;
		border-top: 3px solid #00837B; // Progress bar
		&:not(:last-child):before{
			opacity: 1;
		}
	`}
	
	${props => props.active && css`
		color: #00837B;
		cursor: auto;
		&:not(:last-child):before{
			opacity: 1;
		}
	`}
	
	
	
	
`;

NavItem.propTypes = {
	enable: PropTypes.bool,
	active: PropTypes.bool,
};

export const Watermark = styled('div')`
	color: #8DA3C1;
	user-select: none;
	font-size: 8px;
	font-weight: bold;
	line-height: 1;
`;