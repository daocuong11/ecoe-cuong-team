import styled, {css} from "styled-components";
import PropTypes from 'prop-types';


export const Wrapper = styled('div')`
	max-width: 600px;
	padding-top: 100px;
	padding-bottom: 6%;
`;

export const Description = styled('div')`
	color: #8DA3C1;
	font-size: 14px;
	padding-bottom: 20px;
`;

export const FormSection = styled('div')`
	& + & {
		margin-top: 50px;
	}
`;