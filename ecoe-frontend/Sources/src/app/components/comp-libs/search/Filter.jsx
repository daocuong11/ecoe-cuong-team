import React, { Component, Fragment } from 'react';
import TypeSearch from "../globals/ProductSearch/CommonSearch/TypeSearch";
import AreaSearch from "../globals/ProductSearch/CommonSearch/AreaSearch";
import PriceSearch from "../globals/ProductSearch/CommonSearch/PriceSearch";
import AcreageSearch from "../globals/ProductSearch/CommonSearch/AcreageSearch";
import StatusSearch from "../globals/ProductSearch/CommonSearch/StatusSearch";
import AuthorSearch from "../globals/ProductSearch/CommonSearch/AuthorSearch";
import {FilterContainer} from "./Wrapper";

class Filter extends Component {
    render() {
        return (
            <FilterContainer>
                <TypeSearch col={4} />
                <AreaSearch col={3} />
                <PriceSearch />
                <AcreageSearch />

                <StatusSearch />
                <AuthorSearch />
            </FilterContainer>
        );
    }
}

export default Filter;