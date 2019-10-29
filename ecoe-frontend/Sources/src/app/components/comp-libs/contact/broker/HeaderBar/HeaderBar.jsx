import React, { Component, Fragment } from 'react';
import { Wrapper, Title, Description, Button } from './Wrapper';
import { Label } from './Wrapper';

class HeaderBar extends Component {

    handleClicked = () => {
        alert("It's work!");
    };

    render() {
        let props = this.props;
        return (
            <Wrapper>
                <Title>
                    Tất cả {props.title}
                </Title>
                <Description>{props.description}</Description>
                <Button onClick={this.handleClicked}>{props.button}</Button>
            </Wrapper>
        )
    }
}

export default HeaderBar;
