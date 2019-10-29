import React, { Component } from 'react';
import { GroupSearch } from './Wrapper';
import IconSearch from "images/icons/search.svg";

class InputSearch extends Component {
    render() {
        return (
            <GroupSearch>
                <input type="search"/>
                <button>
                    <img src={IconSearch} alt="Search Icon"/>
                </button>
            </GroupSearch>
        )
    }

}

export default InputSearch;