import styled, {css} from "styled-components";
import PropTypes from 'prop-types';
import CheckBorder from 'UIElement/CheckBox/CheckBorder';

export const Wrapper = styled('div')`
	padding: 100px 15px;
`;

export const Description = styled('div')`
	color: #8DA3C1;
	font-size: 12px;

`;

export const CheckBoxWrap = styled('div')`
	margin-left: -15px;
	margin-right: -15px;
`;

export const CheckBox = styled(CheckBorder)`
	margin: 15px;
`;