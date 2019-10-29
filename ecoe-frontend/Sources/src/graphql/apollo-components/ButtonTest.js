import React, { Component, Fragment } from "react";
import { ApolloConsumer, Query, withApollo } from "react-apollo";
import gql from "graphql-tag";

export const query = gql`query {
  errors 
}
`;

class ButtonTest extends React.Component {
  client = this.props.client;
  errors = null;

  constructor(props) {
    super(props);
    this.addMessage = this.addMessage.bind(this);
  }

  componentWillMount() {
    let data = this.client.readQuery({ query });
    this.notification = data.notification;
  }

  addMessage() {
    this.errors.push("xxxx");
    this.client.writeData({
      data: {
        notification: this.errors
      }
    });

    console.log(this.client);
  }

  render() {
    return (<Fragment>
      <button onClick={this.addMessage}> aaaaaaaaaaaaa</button>
    </Fragment>);
  }
}

const withErrorMessage = withApollo(ButtonTest);

export default withErrorMessage;