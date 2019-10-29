import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import closeIcon from 'images/icons/icon-close-black.svg';

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


export const Input = styled('input')`
    height: 32px;
    border: 1px solid #E2E8F0;
    color: #0A2240;
    width: 100%;
    outline: 0;
    padding: 10px 10px;
    
    &:focus {
        border: 1px solid #10C1AC;
    }
    
    &::placeholder {
        color: #ADBCD0;
    }
    
    ${props => props.maxWidth && css`
		max-width: ${props.maxWidth}px;
	`}
    
    ${props => props.block && css`
		display: block;
	`}
`;

Input.propTypes = {
	width: PropTypes.number,
	maxWidth: PropTypes.number,
	block: PropTypes.bool
};

export const CloseButton = styled('button')
`
	width: 20px;
	height: 20px;
	background: #ffff url(${closeIcon}) center no-repeat;
	background-size: 12px 12px;
	z-index: 1;
	outline: 0;
	border: none;
	border-radius: 50%;
	cursor: pointer;
	
	box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
	
	&:hover {
		border-width: 2px;
		opacity: .8;
	}
`;