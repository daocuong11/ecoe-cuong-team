import styled, {css} from "styled-components";
import PropTypes from 'prop-types';


export const Wrapper = styled('div')`
	
`;

export const RowItem = styled('div')`
	* + * {
		margin-bottom: 10px;
	}
`;