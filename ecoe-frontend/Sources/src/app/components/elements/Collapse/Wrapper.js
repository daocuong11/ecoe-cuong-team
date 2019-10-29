import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

export const Wrapper = styled('div')`

`;
export const Title = styled('div')`
	font-size: 18px;
	font-weight: bold;
`;
export const Header = styled('div')`
	border-bottom: 1px dashed #D3D3D3;
	color: #0A2240;
	padding-top: 10px;
	padding-bottom: 10px;
	display: flex;
	flex-flow: row;
	flex-wrap: wrap;
`;
export const ToolBar = styled('div')`
	
`;

export const Button = styled('span')`
	cursor: pointer;
	${props => props.flip && css`
		img {
			transform: rotate(180deg);
		}
	`}
	
	& + & {
		margin-left: 15px;
	}
`;

Button.propTypes = {
	flip: PropTypes.bool
};

export const Main = styled('div')`
	
	transition: opacity 1s linear;
    opacity: 0; 
    height: 0;
    overflow: hidden;
    
    ${props => props.active && css`
		opacity: 1;
		min-height: 200px;
    	height: auto;
	`}
`;

Main.propTypes = {
	active: PropTypes.bool
};

export const Fill = styled('div')`
	margin: auto;
`;