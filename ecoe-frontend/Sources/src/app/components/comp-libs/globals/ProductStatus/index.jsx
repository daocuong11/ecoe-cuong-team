import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { TitleSort, OptionContainer, DropdownProductStatus,StyledOption, Selected, UnSelected, Sticked } from './Wrapper';

class ProductStatus extends Component {
    constructor(props) {
      super();
  
      this.state = {
        showMenu: false,
        title: props.label,
        listStatus: props.productStatusList
      };
  
      this.showMenu = this.showMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);
      this.updateOption = this.updateOption.bind(this);
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
  
    updateList(key, value) {
      let newList = this.state.listStatus;
  
      newList.forEach(function (item) {
        item.value = false;
      });
  
      let indexOfSelected = newList.findIndex((obj => obj.key === key));
      newList[indexOfSelected].value = true;
      return newList;
  
    }
    updateOption(name, value) {
      let newList = this.updateList(name, value);
      this.setState(
        {
          title: value,
          listStatus: newList
        }
      )
      this.closeMenu();
    }
    
    render() {
      return (
        <Fragment>
          <DropdownProductStatus TypeDropdown={this.props.TypeDropdown} isOpen={this.state.showMenu} onClick={this.showMenu}>{this.state.title}</DropdownProductStatus>
          {
            this.state.showMenu && 
            (
              <OptionContainer TypeDropdown={this.props.TypeDropdown}>
                {this.props.TypeDropdown===2 && <TitleSort>{this.props.titleSort}</TitleSort>}
                
                {this.state.listStatus.map((item) =>
                  <StyledOption 
                    TypeDropdown={this.props.TypeDropdown} 
                    value={item.value} 
                    key={item.key} 
                    onClick={() => this.updateOption(item.key, item.name)
                  }>
                    {this.props.TypeDropdown===1 ? 
                      (item.value ? <Selected /> : <UnSelected />) : (item.value && <Sticked />)}
                    {item.name}
                  </StyledOption>
                )}
              </OptionContainer>
            )
          }
        </Fragment>
      );
    }
  };  
  

ProductStatus.propTypes = {
    label: PropTypes.string,
    titleSort: PropTypes.string,
    productStatusList: PropTypes.array,
    TypeDropdown: PropTypes.number,
};

export default ProductStatus;