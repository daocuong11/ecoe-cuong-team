import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProductFunctionBar, DropdownProductStatus, OptionContainer } from './Wrapper';
import { ACT_MAMAGEMENT } from "constants/labelActionForCard";

class DropdownFunctionCard extends Component {
  constructor(props) {
    super();

    this.state = {
      showMenu: false,
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
      <ProductFunctionBar className={this.props.className}>
        <DropdownProductStatus isOpen={this.state.showMenu} onClick={this.showMenu}>{ACT_MAMAGEMENT}</DropdownProductStatus>
        {
          this.state.showMenu && (
            <OptionContainer> {this.props.children} </OptionContainer>
          )
        }
      </ProductFunctionBar>
    );
  }
};

DropdownFunctionCard.propTypes = {
  label: PropTypes.string,
  titleSort: PropTypes.string,
  productStatusList: PropTypes.array,
};

export default DropdownFunctionCard;