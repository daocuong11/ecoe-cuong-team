import React, {Component} from "react";
import {HeaderCustom, ModalHeader,TitleHeader, CloseButton, FormCenter, Form, FormGroup, FormLabel, FormInput, Div, Back, ErrorText, Button, MgButton} from "./Wrapper";
import * as _ from 'lodash';

class InputPhone extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            phone: '',
            error: false
        };
    }

    handleInputChange(event) {

        let isValid = _.get(event.nativeEvent, 'target.validity.valid');
        this.setState({
            phone: event.target.value,
            error: !isValid
        });

        console.log("Get: ", _.get(this.state, 'error'));
    }

    submitHandler(event) {
        event.preventDefault();
        this.props.handlerFromParent(this.state.phone);
    }

    render() {
        let props = this.props;
        return (
            <Div>
                <FormCenter>
                    <HeaderCustom>
                        <ModalHeader>
                            <TitleHeader>Đặt lại mật khẩu</TitleHeader>
                        </ModalHeader>
                        <CloseButton onClick={props.onClose}/>                   
                    </HeaderCustom>
                    <Div>Nhập số điện thoại để nhận mã xác nhận</Div>
                </FormCenter>
                <Form onSubmit={this.submitHandler}>
                    <FormGroup>
                        <FormLabel>Số điện thoại</FormLabel>
                        <FormInput placeholder="Nhập số điện thoại" type="text" value={this.state.phone} name="phone" onChange={(event) => this.handleInputChange(event)} required={true} pattern="^[0-9]{9,10}$" isError={this.state.error}></FormInput>
                        {this.state.error && <ErrorText>Số điện thoại nhập không hợp lệ</ErrorText>}
                    </FormGroup>
                    <MgButton>
                        <Button disabled={this.state.error}>TIẾP THEO</Button>
                    </MgButton>                   
                </Form>
                <Back onClick={()=> props.showModal(0)}>Quay trở lại đăng nhập</Back>
            </Div>
        )
    }
}

export default InputPhone;