import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import LandAdvance from './LandAdvance';
import ProjectAdvance from './ProjectAdvance';
import { LABEL_HOUSE } from "constants/labelActionForCard";

const AdvanceSearch = (props) => {
    return (
        <Wrapper>
            {props.productType === LABEL_HOUSE ? (<LandAdvance col={2} position={'bottom right'} {...props}/>) : (<ProjectAdvance {...props}/>)}
        </Wrapper>
    );
}

AdvanceSearch.propTypes = {
    productType: PropTypes.string,
};

export default AdvanceSearch;