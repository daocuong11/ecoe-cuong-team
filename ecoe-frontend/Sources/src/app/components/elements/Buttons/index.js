import React from 'react';
import Wrapper, { Name, ButtonStyle } from './Wrapper';
import PropTypes from 'prop-types';

const Buttons = (props) => {
    return (
        <Wrapper>
            <ButtonStyle 
                className={props.className} 
                isPush={props.isPush} 
                type={props.type} 
                onClick={props.onClick}
                isSearchResultPage={props.isSearchResultPage} 
                domainType={props.domainType} 
            >
                <Name>{props.label}</Name>
            </ButtonStyle>
        </Wrapper>
    );
}

Buttons.propTypes = {
    class: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func
};

export default Buttons;