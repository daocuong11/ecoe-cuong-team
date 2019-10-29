import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

export const ListTabs = styled('ul')`
	padding-left: 0;
	list-style: none;
	margin: 0
`;

export const TabTitleItem = styled('li')`
	display: inline-block;
    padding: 16px 30px;
    cursor: pointer;
    opacity: 0.4;
    color: #0A2240;
    &:hover {
    	opacity: 1;
    }
    
    transition: color .7s;
    
    ${props => props.isActiveTab && css`
        cursor: default;
        opacity: 1;
        border-bottom: 3px solid #00837B;
        color: #00837B;
	`}
`;

TabTitleItem.propTypes = {
	isActiveTab: PropTypes.bool
};


export const TabAnchorItem = styled('a')`
	text-transform: capitalize;
 	color: inherit;
 	font-weight: 700;
`;

export const TabsContainer = styled('div')`
	position: relative;
	border-bottom: 1px solid #dfdfdf;
`;

export const ReactTabs = styled('div')`
	position: relative;
`;

export const TabContent = styled('div')`
	display: ${props => props.show ? 'block' : 'none'};
`;

TabContent.propTypes = {
	show: PropTypes.bool
};