import React, { Component } from 'react';
import { CheckboxContainer, StyledCheckbox, CheckTitle } from './Wrapper';

class CheckBox extends Component {
  constructor(props) {   
    super(props);
    this.state = {
      checked: props.value
    }
    this.updateCheckBox = this.updateCheckBox.bind(this);
  }
  UNSAFE_componentWillReceiveProps(nextProps){    
    this.setState(
      {
        checked: nextProps.value
      }      
    )
  }
  updateCheckBox() {
    this.setState(
      {
        checked: !this.state.checked
      }
      , () =>     
        {          
          this.props.updateCheckbox(this.props.filter, this.state.checked)    
        }
    )
  }

  render() {
    
    return (
      <CheckboxContainer checked={this.state.checked}>
        <CheckTitle>{this.props.name}</CheckTitle>   
        <StyledCheckbox checked={this.state.checked} onClick={this.updateCheckBox} ref="checkBox">
          {this.state.checked ? (
            <svg
              width="20px" fill="#fff"
              id="iconChecked" data-name="iconChecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.34 7.58">
              <path id="iconChecked" d="M2.21,2.9a1.32,1.32,0,0,0-1.83,0,1.24,1.24,0,0,0,0,1.76l0,0L3,7.21a1.32,1.32,0,0,0,1.83,0l5.18-5A1.25,1.25,0,0,0,10,.4l0,0a1.32,1.32,0,0,0-1.83,0L3.88,4.53Z"
                transform="translate(0 0)" />
            </svg>
          ) : ("")}
        </StyledCheckbox>
      </CheckboxContainer>
    )
  }
}

export default CheckBox;