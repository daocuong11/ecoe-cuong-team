import PropTypes from 'prop-types';
import styled, {css} from "styled-components";

export const GalleryWrap = styled('div')`
	padding-top: 10px;
	padding-bottom: 10px;
	display: flex;
	flex-wrap: wrap;
	margin: -15px;
	
	& > * {
		margin: 15px;
	}
`;