import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Wrapper, { Column, Title, Name, Phone } from './Wrapper';
import Avatar from '../Avatars/Avatar';

class TagBroker extends Component {
  constructor(props){
    super(props);
    this.state = {
      phoneBroker: "**** *** 789",
      
    }
    this.setState({phoneBroker: this.props.phone})
    
  }
  
  render() {
    
    let title = "Chuyên viên môi giới";
    let name = "Nguyễn phúc thảo nguyên";
    let phone = "0123456789";
    let shortName = "NP";

    return (
    <Wrapper>
      <Column leftCol>
        <Avatar size={48} brokerName={shortName}></Avatar>
      </Column>
      <Column>
        <Title>{title}</Title>
        <Name>{name}</Name>
        <Phone 
          as="a" href={`tel:${phone}`}
          onClick={this.props.onClick}
        >{this.state.phoneBroker}</Phone>
      </Column>
    </Wrapper>
    );
  }
}

TagBroker.propTypes = {
  broker: PropTypes.object,
};

export default TagBroker;