import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

import ProjectIcon from 'images/icons/project.svg';
import PropertyIcon from 'images/icons/property.svg';

export const Icon = styled('span')`
	
	width: 70px;
	height: 70px;
	display: inline-block;
	background-repeat: no-repeat;
	background-position: center;
	
	${props => props.type === 'project' && css`
		background-image: url(${ProjectIcon});
	`}
	
	${props => props.type === 'property' && css`
		background-image: url(${PropertyIcon});
	`}
`;

Icon.propTypes = {
	type: PropTypes.oneOf(['project', 'property'])
};

export const Card = styled('button')`
	height: 280px;
	width: 265px;
	background: #fff;
	border: 1px solid #E2E8F0;
	padding-left: 40px;
	padding-right: 40px;
	outline: 0;
	cursor: pointer;
	
	.title {
		font-size: 18px;
		color: #082241;
		font-weight: bold;
		margin-bottom: 10px;
	}
	
	.description {
		font-size: 14px;
		color: #566F90;
	}
	
	&:hover {
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.175);
	}
	
`;


export const Wrapper = styled('div')`
	display: grid;
	grid-auto-flow: column;
	grid-column-gap: 32px;
	grid-auto-columns: 265px;
`;