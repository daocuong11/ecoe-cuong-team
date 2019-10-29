import React from 'react';
import PropTypes from 'prop-types';
import Wrapper, {SubTitle,IFRAME } from './Wrapper';
import * as _ from "lodash";

const ImplementedProjects = (props) => {
    let url = _.get(props,'url')
    return (
        <Wrapper>
            <SubTitle>{_.get(props, 'subTitle')}</SubTitle>
            <IFRAME title={props.name} src={url}/>

        </Wrapper>
    );
}

ImplementedProjects.propTypes = {
    url: PropTypes.string,
};

export default ImplementedProjects;