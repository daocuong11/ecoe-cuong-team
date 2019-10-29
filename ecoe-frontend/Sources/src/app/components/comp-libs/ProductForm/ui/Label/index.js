import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

export const Label = styled.label`
    font-size: ${props => props.large ? '24px' : '14px'};
    color: #0A2240;
    font-weight: ${props => props.bold ? '900' : 'bold'};
    position: relative;
    user-select: none;
    
    &::before {
        content: '*';
        position: absolute;
        color: #DA6744;
        right:  ${props => props.large ? '-20px' : '-10px'};
        display: ${props => props.require ? 'block' : 'none'};
    }
    
    ~ *  {
    	margin-top: 10px;
    }
`;

Label.propTypes = {
	large: PropTypes.bool,
	require: PropTypes.bool,
	bold: PropTypes.bool
};