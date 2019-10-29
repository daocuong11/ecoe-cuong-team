import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';


export const Wrapper = styled('div')`
	
`;
export const Description = styled('div')`
	color: #778FAF;
	font-size: 12px;
`;
export const Header = styled('div')`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;
export const Main = styled('div')`
	border-top: 1px dashed #D3D3D3;
	padding-top: 15px;
	padding-bottom: 15px;
`;

export const Table = styled('table')`
	margin: -5px;
	tr {
		td {
			padding:5px;
		}
	}
`;