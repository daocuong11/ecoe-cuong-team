import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

export const Wrapper = styled('div')`
	display: inline-block;
	background: #DCF7F8;
	padding: 30px 20px;
	min-width: 250px;
`;


export const Header = styled('div')`
	border-bottom: 1px dashed #ADBDD1;
	font-size: 16px;
	font-weight: bold;
	color: #183253;
	padding: 20px 0;
	text-align: center;
`;

export const Main = styled('div')`
	display: grid;
	grid-gap: 10px;
	padding: 20px 0;
`;