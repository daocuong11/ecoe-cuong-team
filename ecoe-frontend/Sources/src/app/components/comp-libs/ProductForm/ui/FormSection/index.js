import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

export const FormSection = styled('div')`
	margin-top: 50px;
	
	${props => props.padding && css`
		padding: 30px;
	`}
`;

FormSection.propTypes = {
	padding: PropTypes.bool
};