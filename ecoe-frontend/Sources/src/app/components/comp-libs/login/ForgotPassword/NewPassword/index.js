import React, {Component, createRef} from 'react';
import * as _ from 'lodash';
import {HeaderCustom, ModalHeader,TitleHeader, CloseButton, FormCenter, Form, FormGroup, FormLabel, FormInput, Div, Eye, ErrorText, Button} from "./Wrapper";
class NewPassword extends Component {
    

    constructor(props) {
        super(props);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.password = createRef();
        this.confirmPassword = createRef();
        this.state = {
            errors: {},
        };

        this.dirtyFields = {};
    }

    showPassword = (ref) => {
        ref.current.type = 'text';
    };

    hidePassword = (ref) => {
        ref.current.type = 'password';
    };

    onChange = (e, name, value) => {
        let {errors} = this.state;

        /** Set dirty */
        this.dirtyFields[name] = true;

        /** Check validation */
        let isValid = _.get(e.nativeEvent, 'target.validity.valid');
        errors[name] = !isValid;

        if(_.includes(['password', 'confirmPassword'], name) && _.get(this, ['dirtyFields', 'confirmPassword']))
        {
            isValid = (isValid && this.isPasswordMatch());
            errors['confirmPassword'] = !isValid;
        }

        //this.props.setErrors(errors);
        this.setState({errors});
        /** Update parent state */
       this.setState({[name]: value});

    };

    isPasswordMatch = () => {
        return _.isEqual(this.password.current.value, this.confirmPassword.current.value);
    };

    handlerSubmit(event) {
        event.preventDefault();
        this.props.onNewPassword(this.state.password)
        //this.props.
    }
 render() {
     let props = this.props;
     let {errors} = this.state;
        return (
            <Div>
                <FormCenter>
                    <HeaderCustom>
                        <ModalHeader>
                            <TitleHeader>Tạo mật khẩu mới</TitleHeader>
                        </ModalHeader>
                        <CloseButton onClick={props.onClose}/>                   
                    </HeaderCustom>
                    <Div>Tạo mật khẩu mới cho tài khoản của bạn</Div>
                </FormCenter>
                <Form onSubmit={this.handlerSubmit}>
                    <FormGroup>
                        <FormLabel>Tạo mật khẩu</FormLabel>
                        <FormInput placeholder="Nhập mật khẩu mới"  type="password" ref={this.password} name="password" onChange={e => this.onChange(e,'password', e.target.value)} pattern="[\s\S]{8,}" required={true} isError={_.get(errors, 'password')} ></FormInput>
                        <Eye onMouseDown={() => this.showPassword(this.password)} onMouseUp={() => this.hidePassword(this.password)}></Eye>
                        {_.get(errors, 'password') && <ErrorText>Mật khẩu tối thiểu 8 ký tự</ErrorText>}
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Xác nhận lại mật khẩu</FormLabel>
                        <FormInput placeholder="Nhập lại mật khẩu mới" type="password" ref={this.confirmPassword} name="confirmPassword" onChange={e => this.onChange(e,'confirmPassword', e.target.value)} isError={_.get(errors, 'confirmPassword')} ></FormInput>
                        <Eye onMouseDown={() => this.showPassword(this.confirmPassword)} onMouseUp={() => this.hidePassword(this.confirmPassword)}></Eye>
                        {(_.get(errors, 'confirmPassword') ) && <ErrorText>Mật khẩu gõ lại không đúng</ErrorText>}
                    </FormGroup>
                    <FormCenter>
                        <Button>TIẾP THEO</Button>
                    </FormCenter>                   
                </Form>
            </Div>
        )
    }
}

export default NewPassword;