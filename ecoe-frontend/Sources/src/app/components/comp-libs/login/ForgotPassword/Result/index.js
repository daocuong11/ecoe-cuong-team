import React, {Component} from 'react';
import {HeaderCustom, ModalHeader,TitleHeader, CloseButton, FormCenter, Div, Success, NoPadding} from "./Wrapper";

const Result = (props) => {
    return (
            <Div>
                <FormCenter>
                    <HeaderCustom>
                        <ModalHeader>
                            <Success></Success>
                        </ModalHeader>
                        <CloseButton onClick={props.onClose}/>            
                    </HeaderCustom>
                    <NoPadding>
                        <TitleHeader>Thành Công</TitleHeader>   
                    </NoPadding>
                    <Div>Bạn đã tạo mật khẩu mới thành công</Div>
                </FormCenter>
            </Div>
        )
}

export default Result;