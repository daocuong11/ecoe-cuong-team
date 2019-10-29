import React from 'react';
import ContainerSearchBorder from '../ContainerSearchBorder';
import { StyledOption, Sticked } from './Wrapper';
import { dropdownType } from "globalConstants/productSearchCritical";
import { withApollo } from "react-apollo";

class TypeSearchDropdown extends React.Component {
  productType = localStorage.getItem("productType");  
  constructor(props) {
    super(props);
    this.state = {
      listStatus: dropdownType,
      title: '',
      open: false,
      productType: '',
    };
  }
  componentDidMount() {
    this.updateOption(this.productType);
  }

  updateOption(key) {
    let newList = this.state.listStatus;

    newList.forEach(function (item) {
      item.value = false;
    });

    let indexOfSelected = newList.findIndex((obj => obj.key === key));
    newList[indexOfSelected].value = true;

    this.setState(
      {
        title: newList[indexOfSelected].name,
        listStatus: newList,
        open: false,
        productType: key
      }, () => {
        this.props.onChange && this.props.onChange(
          {
            productType: key
          }
        );
        if (
          this.props !== undefined &&
          this.props.data !== null &&
          this.props.data !== undefined
        ) {
          this.props.data.updateproductType(key);
          this.props.client.writeData({
            data: {
              productType: key
            }
          });  
        }
        
      }
    );

  }

  render() {
    return (<ContainerSearchBorder type={1} name={this.state.title} maxWidth={"150px"} close={this.state.open} padding={'0px'}>
      {
        this.state.listStatus.map((item) =>
          <StyledOption
            value={item.value}
            key={item.key}
            onClick={() => this.updateOption(item.key)
            }>
            {(item.value && <Sticked />)}
            {item.name}
          </StyledOption>
        )}
    </ContainerSearchBorder>
    );
  }
}

TypeSearchDropdown.propTypes = {

};

export default withApollo(TypeSearchDropdown);