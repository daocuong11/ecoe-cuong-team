import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

export const FormGroup = styled.div`
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 7px;
    
    ${props => props.bottom && css`
		display: flex;
		justify-content: flex-end;
		flex-flow: column;
	`}
`;

FormGroup.propTypes = {
	bottom: PropTypes.bool
};