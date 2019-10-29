import React, { Component } from "react";
import { CheckboxContainer, StyledCheckbox } from "./Wrapper";

class CheckBox3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.value
    };
    this.updateCheckBox = this.updateCheckBox.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.value
    });
  }
  handleClick() {
    this.props.handleClick(this.props.filter, this.state.checked);
  }
  updateCheckBox() {
    this.setState(
      {
        checked: !this.state.checked
      },
      () => {
        this.props.updateCheckbox(this.props.filter, this.state.checked);
      }
    );
  }

  render() {
    return (
      <CheckboxContainer checked={this.state.checked} filterMobile={this.props.filterMobile}>
        <div onClick={this.handleClick}>{this.props.name}</div>
        <StyledCheckbox
          filterMobile={this.props.filterMobile}
          checked={this.state.checked}
          onClick={this.updateCheckBox}
          ref="checkBox"
        >
          {this.state.checked === 2 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="2"
              viewBox="0 0 8 2"
            >
              <line
                id="icon1Checked"
                data-name="icon1Checked"
                x2="8"
                transform="translate(0 1)"
                fill="none"
                stroke="#ecf4f3"
                strokeWidth="2"
              />
            </svg>
          ) : this.state.checked ? (
            <svg
              width="10px"
              fill="#fff"
              id="iconChecked"
              data-name="iconChecked"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10.34 7.58"
            >
              <path
                id="iconChecked"
                d="M2.21,2.9a1.32,1.32,0,0,0-1.83,0,1.24,1.24,0,0,0,0,1.76l0,0L3,7.21a1.32,1.32,0,0,0,1.83,0l5.18-5A1.25,1.25,0,0,0,10,.4l0,0a1.32,1.32,0,0,0-1.83,0L3.88,4.53Z"
                transform="translate(0 0)"
              />
            </svg>
          ) : (
            ""
          )}
        </StyledCheckbox>
      </CheckboxContainer>
    );
  }
}

export default CheckBox3;
