import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import downIcon from "images/icons/icon-down.svg";

export const SelectBox = styled('select')`
	height: 64px;
    border: 1px solid #E2E8F0;
    color: #0A2240;
    outline: 0;
    padding: 22px 24px;
    appearance: none;             
    background: url(${downIcon}) no-repeat;
    text-indent: 0.01px;
    text-overflow: "";
    background-position-x: calc(100% - 10px);
    background-position-y: center;      
    &:focus {
        border: 1px solid #10C1AC;
    }
    
    &::placeholder {
        color: #ADBCD0;
    }
    
    ${props => props.full && css`
		width: 100%;
	`}

    ${props => props.block && css`
		display: block;
	`}
    
    ${props => props.maxWidth && css`
		max-width: ${props.maxWidth}px;
    `}
    
    ${props => props.width && css`
		width: ${props.width}px;
	`}
`;

SelectBox.propTypes = {
	full: PropTypes.bool,
    maxWidth: PropTypes.number,
    block: PropTypes.bool,
    width: PropTypes.number
};