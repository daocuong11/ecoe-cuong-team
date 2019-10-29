import React, {Component} from "react";
import Popup from "reactjs-popup";
import Social from "./Social";
import ForgotPassword from "./ForgotPassword";
import Wrapper, {TitleLine} from './Wrapper';
import LoginForm from "./Form";


const Login = (props) => {
    return (
        <Wrapper>
            <Popup
                open={props.open}
                closeOnDocumentClick
                onClose={props.onClose}
            >    
                <Social onClose={props.onClose}></Social>
                <LoginForm onClose={props.onClose} showModal={props.showModal} handlerFromParent={props.handlerFromParent} loginFailed={props.loginFailed}></LoginForm>
            </Popup>
        </Wrapper>   
    )
}


export default Login;