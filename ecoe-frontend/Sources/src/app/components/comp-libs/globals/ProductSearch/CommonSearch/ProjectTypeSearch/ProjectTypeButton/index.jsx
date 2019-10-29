import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import TypeSearchButton from './TypeSearchButton';
import { withApollo } from "react-apollo";

class ProjectTypeButton extends React.Component {
  client = this.props.client;

  constructor(props) {
    super(props);
    let productType;
    if (
      this.props !== undefined &&
      this.props.data !== null &&
      this.props.data !== undefined
    ) {
      productType = localStorage.getItem("productType");
    }

    this.state = {
      currentType: productType
    };
    this.props.onChange !== undefined && this.props.onChange({
      productType: productType
    });
  }
  handleClick(data, e) {
    this.setState({
      currentType: data
    }, () => {
      this.props.onChange !== undefined && this.props.onChange({
        productType: data
      });

      if (
        this.props !== undefined &&
        this.props.data !== null &&
        this.props.data !== undefined
      ) {
        this.props.data.updateproductType(data);
        this.client.writeData({
          data: {
            productType: data
          }
        });         
        
      }
    });
  };

  render() {
    return (
      <Wrapper>
        <TypeSearchButton name="Dự án" text="Từ chủ đầu tư" active={this.state.currentType === 'PROJECT'} onClick={this.handleClick.bind(this, 'PROJECT')} />
        <TypeSearchButton name="Nhà đất" text="Sản phẩm ký gửi" active={this.state.currentType === 'HOUSE'} onClick={this.handleClick.bind(this, 'HOUSE')} />
      </Wrapper>
    );
  }
}

ProjectTypeButton.propTypes = {

};

export default withApollo(ProjectTypeButton);