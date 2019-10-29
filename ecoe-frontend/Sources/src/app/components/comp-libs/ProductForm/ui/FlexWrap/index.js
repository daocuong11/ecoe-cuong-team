import styled, {css} from "styled-components";
import PropTypes from 'prop-types';


export const FlexItem = styled('div')`
	margin: 15px;
`;

export const FlexWrap = styled('div')`
	padding-top: 15px;
	padding-bottom: 15px;
	margin: -15px;
	display: flex;
	flex-wrap: wrap;
	flex-flow: ${props => props.flexFlow};
	
	${props => props.noGutter && css` margin: 0 `}
	${props => props.center && css`

		align-items: center;
	`}
`;

FlexWrap.propTypes = {
	flexFlow: PropTypes.oneOf(['row', 'column']),
	noGutter: PropTypes.bool,
	center: PropTypes.bool
};

export const FlexRow = styled('div')`
	display: flex;
	flex-flow: row;
	${props => props.full && css`
		justify-content: space-between;
	`}
`;

FlexRow.propTypes = {
	full: PropTypes.bool
};

export const FlexColumn = styled('div')`
	display: flex;
	flex-flow: column;
`;


