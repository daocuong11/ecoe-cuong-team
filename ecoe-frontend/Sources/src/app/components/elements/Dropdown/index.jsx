import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { TitleSort, DropdownProductStatus, OptionContainer, StyledOption, Selected, UnSelected, Sticked } from './Wrapper';

class Dropdown extends Component {
  constructor(props) {
    super();

    this.state = {
      showMenu: false,
      title: props.label,
      listStatus: props.productStatusList
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);    
  }

  showMenu(event) {
    this.setState({ showMenu: true })
  }

  closeMenu() {
    this.setState({ showMenu: false },
      () => {
        document.removeEventListener('click', this.closeMenu);
      });
  }

  componentDidUpdate() {
    const { showMenu } = this.state
    setTimeout(() => {
      if(showMenu){
        document.addEventListener('click', this.closeMenu)
      }
      else{
        document.removeEventListener('click', this.closeMenu)
      }
    }, 0)
  }
 
  render() {
    return (
      <Fragment>
        <DropdownProductStatus TypeDropdown={this.props.TypeDropdown} isOpen={this.state.showMenu} onClick={this.showMenu}>{this.state.title}</DropdownProductStatus>
        {
          this.state.showMenu && 
          (
            <OptionContainer TypeDropdown={this.props.TypeDropdown}>
              {this.props.children}               
            </OptionContainer>
          )
        }
      </Fragment>
    );
  }
};

Dropdown.propTypes = {
  label: PropTypes.string,
  titleSort: PropTypes.string,
  productStatusList: PropTypes.array,
  TypeDropdown: PropTypes.number,
};

export default Dropdown;