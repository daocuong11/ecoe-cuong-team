import styled, {css} from "styled-components";
import PropTypes from 'prop-types';


export const Text = styled('span')`
	color: #253858;
	padding-left: 5px;
	padding-right: 5px;
	font-weight: ${props => props.bold ? 'bold' : 'normal'};
	
	${props => props.small && css`
		font-size: 10px;
	`}
`;

Text.propTypes = {
	small: PropTypes.bool,
	bold: PropTypes.bool
};