import styled, {css} from "styled-components";
import PropTypes from 'prop-types';


export const FormInline = styled('div')`
	margin-left: -15px;
	margin-right: -15px;
	display: flex;
	flex-wrap: wrap;
	& > * {
		margin: 15px;
	}
	
	${props => props.center && css`
		align-items: center;
	`}
`;

FormInline.propTypes = {
	center: PropTypes.bool
};