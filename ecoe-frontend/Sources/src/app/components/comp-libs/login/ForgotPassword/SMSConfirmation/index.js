import React, {Component, createRef} from "react";
import {HeaderCustom, ModalHeader,TitleHeader, CloseButton, FormCenter,HeaderNd, Div, Span, Dots, Mobile, MarginBtn, SMSInput, MarginInput, Form, Button, ErrorText, Time, Resend} from "./Wrapper";
import * as _ from 'lodash';

class Timer extends React.Component {
  render() {
    return (
      <Div>
        <Time>{this.props.value}:{this.props.seconds}</Time>
      </Div>
    );
  }
}

class SMSConfirmation extends Component {
    constructor(props) {
        super(props);
        this.smsSection = createRef();
        this.state = {
            smsCode: {
                0: '',
                1: '',
                2: '',
                3: ''
            },
            seconds: '00',
            value: '02',
            isOtp: false
        };
        this.submitHandler = this.submitHandler.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.startCountDown = this.startCountDown.bind(this);
        this.tick = this.tick.bind(this);
        this.getSMS = this.getSMS.bind(this);
    }

    updateForm(index, value) {
        let {smsCode} = this.state;
        _.set(smsCode, index, value);
        this.setState({smsCode});
    }

    submitHandler(event) {
        let {smsCode} = this.state;
        event.preventDefault();
        let otp = _.get(smsCode, 0) + _.get(smsCode, 1) + _.get(smsCode, 2) + _.get(smsCode, 3);
        this.props.handlerSMSConfirmation(otp);
    }

    autoNextField = (e) => {
        let value = _.get(e.nativeEvent.target, 'value');
        let next = window.$(e.nativeEvent.target).next();

        if (value && next.length && !next.val()) {
            next.focus();
        }
    };

    tick() {
        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - min * 60;
        this.setState({
                seconds: sec,
                value: min
        });

        if(sec < 10) {
            this.setState({
                seconds: "0" + this.state.seconds   
            });
        }

        if(min < 10) {
            this.setState({
                value: "0" + min  
            });
        }

        if ((min === 0) & (sec === 0)) {
            clearInterval(this.intervalHandle);
            this.setState({isOtp: true});
        }

        this.secondsRemaining--;
        //console.log("Timer: ", this.state.seconds);

    }

    startCountDown() {
        this.intervalHandle = setInterval(this.tick, 1000);
        let time = this.state.value;
        this.secondsRemaining = 2 * 60;
    }

    getSMS() {
        //console.log("Run.....");
        this.props.getSMSByPhone(this.props.phoneNumber);
    }
    
    componentDidMount() {
        this.startCountDown();
    }

    render() {
        let props = this.props;
        let smsCode = this.state;
        return (
            <Div>
                <FormCenter>
                    <HeaderCustom>
                        <ModalHeader>
                            <TitleHeader>Đặt lại mật khẩu</TitleHeader>
                        </ModalHeader>
                        <CloseButton onClick={props.onClose}/>                    
                    </HeaderCustom>
                    <HeaderNd>Nhập mã xác minh</HeaderNd>
                    <Div><Span>Chúng tôi vừa gửi một tin nhắn văn bản gồm mã xác minh 4 chữ số đến</Span><Dots/><Mobile>{props.phoneNumber.substr(8)}</Mobile></Div>
                    <Form onSubmit={this.submitHandler} onKeyUp={this.autoNextField}>
                        <MarginInput ref={this.smsSection}>
                            <SMSInput maxLength="1" value={_.get(smsCode, 0)} onChange={e => this.updateForm(0, e.target.value)} required></SMSInput>
                            <SMSInput maxLength="1" value={_.get(smsCode, 1)} onChange={e => this.updateForm(1, e.target.value)} required></SMSInput>
                            <SMSInput maxLength="1" value={_.get(smsCode, 2)} onChange={e => this.updateForm(2, e.target.value)} required></SMSInput>
                            <SMSInput maxLength="1" value={_.get(smsCode, 3)} onChange={e => this.updateForm(3, e.target.value)} required></SMSInput>
                        </MarginInput>
                        <Timer value={this.state.value} seconds={this.state.seconds} />
                        {this.state.isOtp && <Div>Bạn không nhận được mã OTP? <Resend onClick={this.getSMS}>Gửi lại mã OTP mới</Resend></Div>}                       
                        <MarginBtn>
                            <Button>TIẾP THEO</Button>
                            {/* <Buttons type="0" label="TIẾP THEO" onClick={this.submitHandler} className="pushProduct"/>   */}
                        </MarginBtn>
                    </Form>                  
                </FormCenter>
            </Div>
        )
    }
}

export default SMSConfirmation;