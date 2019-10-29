import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper, { Toggle, ToggleBall, RippleBg, InnerLabel, OuterLabel } from './Wrapper'

// Default colors
const green = '#22e222';
const lightGrey = '#f5f5f5';
const grey = '#ddd';
const white = '#fff';
const black = '#222';

class Toggles extends Component {

    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        
        this.state = {
          toggled: props.initial || false,
        };
      }
    
      toggle() {
        // Update local state first and then call toggle handler
        this.setState(state => ({ toggled: !state.toggled }),
          () => this.props.onToggle(this.state.toggled)
        );
      }
    
      render() {
        return (
          <Wrapper>
    
            {this.props.outerLabel &&
              <OuterLabel
                size={this.props.outerLabelSize}
                color={this.props.outerLabelColor}
              >
                {this.props.outerLabel}
              </OuterLabel>
            }
    
            <Toggle
              onClick={this.toggle}
              toggled={this.state.toggled}
              {...this.props}
            >
              <ToggleBall
                toggled={this.state.toggled}
                {...this.props}
              />
              <RippleBg
                visible={this.state.toggled}
                {...this.props}
              />
    
              {this.props.innerLabelLeft &&
                <InnerLabel
                  left
                  size={this.props.innerLabelSize}
                  color={this.props.innerLabelColor}
                >
                  {this.props.innerLabelLeft}
                </InnerLabel>
              }
              {this.props.innerLabelRight &&
                <InnerLabel
                  right
                  size={this.props.innerLabelSize}
                  color={this.props.innerLabelColor}
                >
                  {this.props.innerLabelRight}
                </InnerLabel>
              }
            </Toggle>
          </Wrapper>
        );
      }
}

Toggles.propTypes = {
    innerLabelLeft: PropTypes.string,
    innerLabelRight: PropTypes.string,
    innerLabelColor: PropTypes.string,
    innerLabelSize: PropTypes.string,
    outerLabel: PropTypes.string,
    outerLabelColor: PropTypes.string,
    outerLabelSize: PropTypes.string,
    initial: PropTypes.bool,
    onToggle: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    padding: PropTypes.number.isRequired,
    ballColor: PropTypes.string.isRequired,
    ballColorActive: PropTypes.string.isRequired,
    bgToggled: PropTypes.string.isRequired,
    bgClear: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
};

Toggles.defaultProps = {
    initial: false,
    width: 84,
    padding: 3,
    ballColor: white,
    ballColorActive: lightGrey,
    bgToggled: green,
    bgClear: white,
    borderColor: grey,
    innerLabelSize: 12,
    innerLabelColor: black,
    outerLabelSize: 12,
    outerLabelColor: black,
};

export default Toggles;