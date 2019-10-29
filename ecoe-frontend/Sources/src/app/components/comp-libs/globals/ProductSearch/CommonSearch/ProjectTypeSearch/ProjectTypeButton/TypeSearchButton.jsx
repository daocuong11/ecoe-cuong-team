import React from 'react';
import PropTypes from 'prop-types';
import { SD_FO } from "constants/domainType";
import { ButtonLandProject, TitleButtonLandProject, DescriptionButtonLandProject } from './Wrapper';

const TypeSearchButton = (props) => {
    let domainType = localStorage.getItem('domainType');

    return (
        <ButtonLandProject domainType={domainType} active={props.active} onClick={props.onClick}>
            <TitleButtonLandProject>{props.name}</TitleButtonLandProject>
            <DescriptionButtonLandProject>{props.text}</DescriptionButtonLandProject>
        </ButtonLandProject>
    );
}

TypeSearchButton.propTypes = {
    domainType: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
    active: PropTypes.bool
};

export default TypeSearchButton;