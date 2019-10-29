import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

export const Layout = styled('div')`
	display: grid;
	grid-auto-flow: column;
	${props => props.left && css`
		grid-template-columns: 200px minmax(auto, calc(100% - 200px));
	`}
	
`;

Layout.propTypes = {
	left: PropTypes.bool
};

export const Left = styled('div')`
	position: relative;
`;


export const Sticky = styled('div')`
	position: sticky;
	top: ${props => props.top || 0};
	
`;

Sticky.propTypes = {
	top: PropTypes.string
};