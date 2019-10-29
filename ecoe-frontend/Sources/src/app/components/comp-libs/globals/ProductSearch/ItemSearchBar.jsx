//delete
import React, { Component } from 'react';
import CheckBox from '../../../elements/CheckBox';
// import { ItemSearchChild, Input, InputCheckboxStyle, } from './FilterSearchContainer/Wrapper';

class ItemSearchBar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(value) {    
    this.props.handleCheckChildElement(this.props.filter, value)    
  }

  render() {
    var { name, value } = this.props;
    return (
      <CheckBox
          name={name}
          value={value}
          ref="checkItem"
          onClick={this.onClick}
        />
    )
  }
}

export default ItemSearchBar;