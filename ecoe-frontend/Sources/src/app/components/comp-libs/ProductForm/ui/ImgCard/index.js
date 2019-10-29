import styled, {css} from "styled-components";
import {CloseButton} from "../Btn/CloseButton";
import PropTypes from "prop-types";

export const ImgCard = styled('div')`

	@keyframes slide {
		0% {
			transform:translateX(-25%);
		}
		100% {
			transform:translateX(25%);
		}
	}
	

	position: relative;
	height: 100px;
	width: 170px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column;
	user-select: none;
	
	overflow: hidden;
	object-fit: contain;
	
	
	${props => props.border && css`
		border: 1px dashed #B5C2D3;
	`}
	
	${props => props.button && css`
		cursor: pointer;
	`}
	
	img {
		width: 100%;
		z-index: 1;
	}
	
	& + & {
		margin-left: 15px;
	}
	
	${CloseButton} {
		position: absolute;
		display: none;
		top: 5px;
		right: 5px;
	}
	
	&:hover {
		${CloseButton} {
			display: block;
			z-index: 1;
		}
		
		img {
			z-index: 0;
		}
	}
	
	
	
	${props => props.background && css`
		&:before {
			animation:slide 3s ease-in-out infinite alternate;
			background-image: linear-gradient(-60deg, #00837B 50%, #F4F9FA 50%);
			bottom:0;
			left:-50%;
			opacity:.5;
			position: absolute;
			right:-50%;
			top:0;
			z-index: 0;
			content: "";
		}
	`}
	
`;


ImgCard.propTypes = {
	border: PropTypes.bool,
	button: PropTypes.bool,
	background: PropTypes.bool
};