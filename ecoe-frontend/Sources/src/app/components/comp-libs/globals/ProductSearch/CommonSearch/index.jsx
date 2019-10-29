import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import AreaSearch from "./AreaSearch";
import TypeSearch from './TypeSearch'
import StatusSearch from './StatusSearch';
import AuthorSearch from './AuthorSearch';
import PriceSearch from './PriceSearch';
import AcreageSearch from './AcreageSearch';
import { LABEL_HOUSE } from "constants/labelActionForCard";

const CommonSearch = (props) => {
    return (
        <Wrapper>
            <TypeSearch col={4} {...props}/>
            <AreaSearch col={3}{...props}/>
            <PriceSearch {...props}/>
            {props.productType === LABEL_HOUSE ? (<AcreageSearch {...props}/>) : ""}

            <StatusSearch {...props} />
            <AuthorSearch {...props}/>
        </Wrapper>
    );
}


CommonSearch.propTypes = {
    productType: PropTypes.string
};

export default CommonSearch;