import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Wrapper, { TitleSection } from './Wrapper';
import TabPanel from './TabPanel';

const EstateType = (props) => {
    return (
        <Fragment>
            <TitleSection>{props.title}</TitleSection>
            <TabPanel projectUnits={props.projectUnits}/>
        </Fragment>
    );
}

EstateType.propTypes = {
    title: PropTypes.string,
    projectUnits: PropTypes.object,
};

export default EstateType;