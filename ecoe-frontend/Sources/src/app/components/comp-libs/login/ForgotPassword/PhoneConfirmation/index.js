import React, {Component} from "react";
import {HeaderCustom, ModalHeader,TitleHeader, CloseButton, FormCenter, HeaderNd, Div, Span, Back, Dots, Mobile, MarginBtn, Button} from "./Wrapper";

class PhoneConfirmation extends Component {
        constructor(props) {
        super(props);
        this.getSMS = this.getSMS.bind(this);
    }

    getSMS() {
        this.props.getSMSByPhone(this.props.phoneNumber);
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
                    <HeaderNd>Nhập mã xác minh</HeaderNd>
                    <Div><Span>ECOE sẽ gửi mã xác minh đến</Span><Dots/><Mobile>{props.phoneNumber.substr(8)}</Mobile></Div>
                    <Div>Có áp dụng cước phí chuẩn.</Div>
                    <MarginBtn>
                        <Button onClick={this.getSMS}>TIN NHẮN</Button>
                    </MarginBtn>
                </FormCenter>
                {/* <Back onClick={()=> props.showModal(0)}>Quay trở lại đăng nhập</Back> */}
            </Div>
        )
    }
}

export default PhoneConfirmation;