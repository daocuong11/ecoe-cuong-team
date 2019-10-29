import styled from "styled-components";
import closeIcon from 'images/icons/icon-close-white.svg';

export const CloseButton = styled('button')`
	
	width: 20px;
	height: 20px;
	background: #00837B url(${closeIcon}) center no-repeat;
	background-size: 12px 12px;
	z-index: 1;
	outline: 0;
	border: none;
	border-radius: 50%;
	cursor: pointer;
	
	box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
	
	&:hover {
		border-width: 2px;
		opacity: .8;
	}
`;
