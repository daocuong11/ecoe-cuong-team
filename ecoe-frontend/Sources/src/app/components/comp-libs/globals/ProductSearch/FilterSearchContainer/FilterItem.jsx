import React from 'react';
import { ItemSearch, Label, ClearItemSearch } from './Wrapper';
import PropTypes from 'prop-types';

const FilterItem = (props) => {
    return (
        <ItemSearch>
            <Label>{props.label}</Label>
            <ClearItemSearch onClick={() =>props.removeItem(props)} />
        </ItemSearch>
    );
}

FilterItem.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
};

export default FilterItem;