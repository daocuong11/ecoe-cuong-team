import React, {Component, createRef} from "react";
import Wrapper, {Form, FormGroup, FormInput, FormLabel, FormRow, ForgotPass, FormCenter, Div, A, VerticalCenter, Button, ErrorText, Eye} from "./Wrapper";
import CheckBox from "./../../elements/CheckBox";
import * as _ from "lodash";

class LoginForm extends Component {
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.password = createRef();
        this.state = {
            phone: '',
            password: '',
            error: false
        }
    }

    showPassword = (ref) => {
        ref.current.type = 'text';
    };

    hidePassword = (ref) => {
        ref.current.type = 'password';
    };

    handleInputChange(event) {
        console.log(_.get(event.nativeEvent, 'target.validity'));
        let isValid = _.get(event.nativeEvent, 'target.validity.valid')
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value,
            error: !isValid
        });
    }

    submitHandler(event) {
        //console.log("State: ", this.state);
        event.preventDefault();
        this.props.handlerFromParent(this.state.phone, this.state.password);
    }

    render() {
        return(
            <Wrapper>
                <Form onSubmit={this.submitHandler}>
                    <FormGroup>
                        <FormLabel>Số điện thoại</FormLabel>
                        <FormInput placeholder="Nhập số điện thoại" type="text" value={this.state.phone} name="phone" onChange={(event) => this.handleInputChange(event)} required={true} pattern="^[0-9]{9,10}$" isError={this.state.error}></FormInput>
                        {this.state.error && <ErrorText>Số điện thoại nhập không hợp lệ</ErrorText>}
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Mật khẩu</FormLabel>
                        <FormInput name="password" ref={this.password} placeholder="Nhập mật khẩu" type="password" onChange={this.handleInputChange} required isError={this.state.error}></FormInput>
                        <Eye onMouseDown={() => this.showPassword(this.password)} onMouseUp={() => this.hidePassword(this.password)}></Eye>
                    </FormGroup>
                    <FormRow>
                        <CheckBox
                            name="Nhớ thông tin cho lần đăng nhập sau"
                            value={false}                
                            updateCheckbox={(key, value)=>{}}
                        />
                        <ForgotPass onClick={() => this.props.showModal(1)}>Quên mật khẩu?</ForgotPass>                      
                    </FormRow>
                    <FormCenter>
                     {this.props.loginFailed && <ErrorText>Số điện thoại nhập hoặc mật khẩu chưa đúng. Vui lòng thử lại</ErrorText>}
                        <Button disabled={this.state.error}>ĐĂNG NHẬP</Button>
                        <VerticalCenter>
                                <Div>Vẫn chưa có tài khoản ECOE?</Div>
                                <A>Đăng ký ngay</A>
                        </VerticalCenter>
                    </FormCenter>                              
                </Form>
                
            </Wrapper>
        )
    }
}


export default LoginForm;