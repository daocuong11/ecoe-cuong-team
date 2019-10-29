import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Column from './Column';

import {ThongSo, PhiThue, PhapLy, coverObjectToArray} from "constants/projectGroup";

const ShortInfo = (props) => {
    let project = props.project;
    let arrThongSo = coverObjectToArray(project,ThongSo);
    let arrPhiThue = coverObjectToArray(project,PhiThue);
    let arrPhapLy = coverObjectToArray(project,PhapLy);
    return (
        <Wrapper>
            <Column two={2} title={props.title[0]} project={arrThongSo}/>
            <Column title={props.title[1]} project={arrPhiThue}/>
            <Column title={props.title[2]} project={arrPhapLy}/>
        </Wrapper>
    );
}

ShortInfo.propTypes = {
    title: PropTypes.string,
    project: PropTypes.object,
};

export default ShortInfo;