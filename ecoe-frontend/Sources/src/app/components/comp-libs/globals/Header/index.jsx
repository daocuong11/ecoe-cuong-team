import React, { Component, Fragment } from 'react';

import Wrapper, { ContentHeader, LeftHeader, RightHeader, UserInfo, MainMenuBorder, BorderIcon } from './Wrapper';
import Logo from './Logo';
import MainMenu from './MainMenu';
import Buttons from '../../../elements/Buttons';
import ButtonLogin from '../../../elements/Buttons/ButtonLogin';
import Login from "../../login";
import ForgotPassword from '../../login/ForgotPassword';
import PhoneConfirmation from '../../login/ForgotPassword/PhoneConfirmation';
import { SD_FO } from "constants/domainType";

import { loginService } from "../../login/services";
import * as _ from 'lodash';
import Avatar from '../Avatars/Avatar';
import Notification from '../Notification';
import { ConfigContext } from "globalComponents/Banner";

import BrokerTestIcon from 'images/Avatars/10.jpg';
import ButtonHotline from '../../../elements/Buttons/ButtonHotline';

const BrokerTest = {
    brokerName: "TA",
    brokerAvatar: BrokerTestIcon
}


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openLogin: false,
            openForgotPass: false,
            type: 0,
            phoneNumber: '',
            ecoeUserId: '',
            opt: '',
            token: '',
            loginFailed: false
        };
        this.closeModal = this.closeModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.getUserByPhone = this.getUserByPhone.bind(this);
        this.getPhoneNumber = this.getPhoneNumber.bind(this);
        this.verifyOtp = this.verifyOtp.bind(this);
        this.onNewPassword = this.onNewPassword.bind(this);
    }

    closeModal(type) {
        /*
            Type: 0 - Login Modal
            Type: 1 - Input Phone Modal
            Type: 2 - Phone Confirmation Modal
            Type: 3 - SMS Confirmation Modal
            Type: 4 - New PassWord Modal
            Type: Other - Result Modal
        */
        if (type === 0) {
            this.setState({
                openLogin: false
            })
        } else {
            this.setState({
                openForgotPass: false
            })
        }

    }

    showModal(type) {
        /*
            Type: 0 - Login Modal
            Type: 1 - Input Phone Modal
            Type: 2 - Phone Confirmation Modal
            Type: 3 - SMS Confirmation Modal
            Type: 4 - New PassWord Modal
            Type: Other - Result Modal
        */
        this.setState({ type: type });
        if (type === 0) {
            this.setState({
                openLogin: true,
                openForgotPass: false
            })
        } else {
            this.setState({
                openLogin: false,
                openForgotPass: true
            })
        }
    }

    //Handle OnLogin
    onLogin(phone, password) {
        // let params = {
        //     "securityPhone": phone,
        //     "password": password
        // }

        // loginService.login(params).then(res => {
        //     localStorage.setItem("token", res.data.token);
        //     localStorage.setItem("user", res.data);
        //     this.setState({
        //         loginFailed: false
        //     });
        //     //Close Login Modal
        //     this.closeModal(0);
        // }).catch(err => {
        //     this.setState({ loginFailed: true });
        //     console.error(err.response);
        // });
        
        //tricks code
        if (phone === '0912345678') {
            localStorage.setItem('domain','ecoe');
        } else {
            localStorage.setItem('domain','other');
        }
         this.closeModal(0);
    }

    //Handle get Phone Number 
    getPhoneNumber(phone) {
        //console.log("Phone: ", phone);
        this.setState({ phoneNumber: phone });

        //Show Phone Confirmation Modal
        this.showModal(2);
        //this.showModal(4);
    }

    //Handle get User by Phone
    getUserByPhone(phoneNumber) {
        //console.log("Run here");
        loginService.getUserBySecurityPhone(phoneNumber).then(res => {
            console.log(res);
            //set State with otp and ecoeUserId
            this.setState({
                ecoeUserId: res.data.ecoeUserId
            })
            //Sent OTP
            // let params = {
            //     "ecoeUserId": this.state.ecoeUserId,
            //     "phone": phoneNumber
            // };
            loginService.generateOtp(this.state.ecoeUserId, phoneNumber).then(response => {
                //Show SMS Confirmation Modal
                this.showModal(3);
            }).catch(err => console.error(err.response));

        }).catch(err => console.error(err));
    }

    //Handle OTP Verification
    verifyOtp(otp) {
        let ecoeUserId = this.state.ecoeUserId;
        loginService.verifyOtpForResetPassword(ecoeUserId, otp).then(res => {
            let token = res.data;
            //console.log("Token: ", token);
            this.setState({
                token: token.data
            });
            //Show New Password Modal
            this.showModal(4);
        }).catch(err => console.error(err));
        //console.log("OTP:", otp);
    }

    // Handle on New Password
    onNewPassword(newPassword) {
        let token = this.state.token;
        loginService.resetPasswordByToken(newPassword, token).then(res => {
            this.showModal(5);
        }).catch(err => console.error(err));
    }


    componentDidMount() {
        this.getFbSDK();
        this.getZaloSDK();
        this.getGoogleSDK();
    }

    getFbSDK = () => {
        if (!window.FB) {
            window.$.getScript('https://connect.facebook.net/vi_VN/sdk.js')
                .done(() => {
                    window.FB.init({
                        appId: '1246515995518351',
                        autoLogAppEvents: true,
                        xfbml: true,
                        version: 'v3.3'
                    });
                });
        }
    };

    getZaloSDK = () => {
        if (!window.Zalo) {
            window.$.getScript('https://zjs.zdn.vn/zalo/sdk.js')
                .done(() => {
                    window.Zalo.init({
                        version: '2.0',
                        appId: '3222790255831236126',
                        redirectUrl: 'http://localhost:3000/dang-ky?zalo=true'
                    });
                });
        }
    };

    getGoogleSDK = () => {
        if (!window.gapi) {
            window.$.getScript('https://apis.google.com/js/api:client.js')
                .done(() => {
                    window.gapi.load('auth2', () => {
                        window.googleAuth2 = window.gapi.auth2.init({
                            client_id: '652332172571-led85v5bkn6b0jpjoibjq54vm7cmt63t.apps.googleusercontent.com',
                            cookiepolicy: 'single_host_origin',
                            // Request scopes in addition to 'profile' and 'email'
                            //scope: 'additional_scope'
                        });
                    });
                });
        }
    };

    render() {
        let props = this.props;

        return (
            <Wrapper isSearchResultPage={props.isSearchResultPage} domainType={props.domainType}>
                <ContentHeader>
                    <LeftHeader as="a" href="/">
                        <Logo logo={props.logo} isSearchResultPage={props.isSearchResultPage} />
                    </LeftHeader>

                    <RightHeader>
                        <UserInfo>
                            {
                                props.domainType !== SD_FO ? (
                                    <Fragment>
                                        <BorderIcon>
                                            <Avatar size={28} broker={BrokerTest} />
                                        </BorderIcon>
                                        <BorderIcon paddingRight>
                                            <Notification num={17} isSearchResultPage={props.isSearchResultPage} domainType={props.domainType} />
                                        </BorderIcon>
                                    </Fragment>
                                ) : (
                                        !props.token && (
                                            <Fragment>
                                                <ButtonLogin
                                                    className="pushProduct"
                                                    type="0"
                                                    label="Đăng nhập"
                                                    onClick={() => this.showModal(0)}
                                                    isSearchResultPage={props.isSearchResultPage}
                                                    domainType={props.domainType}
                                                />
                                                <Login open={this.state.openLogin} showModal={this.showModal} onClose={() => this.closeModal(0)} handlerFromParent={this.onLogin} loginFailed={this.state.loginFailed}></Login>
                                                <ForgotPassword open={this.state.openForgotPass} onClose={() => this.closeModal(1)} showModal={this.showModal}
                                                    type={this.state.type} handlerFromParent={this.getPhoneNumber} phoneNumber={this.state.phoneNumber}
                                                    getSMSByPhone={this.getUserByPhone} handlerSMSConfirmation={this.verifyOtp} onNewPassword={this.onNewPassword}>
                                                </ForgotPassword>
                                            </Fragment>
                                        )
                                    )
                            }
                        </UserInfo>

                        <MainMenuBorder>
                            <BorderIcon>
                                <MainMenu listMenu={props.listMenu} isSearchResultPage={props.isSearchResultPage} />
                            </BorderIcon>

                            {props.fromEcoe > 0 && (
                                <BorderIcon >
                                    <ButtonHotline brokerHotline={props.brokerHotline} />
                                </BorderIcon>
                            )}

                            <BorderIcon>
                                {props.domainType === SD_FO ? (
                                    props.fromEcoe > 0 ? (
                                        <Buttons
                                            className="pushProduct"
                                            type="0"
                                            label="Đăng ký môi giới"
                                            onClick={props.onClick}
                                            isSearchResultPage={props.isSearchResultPage}
                                            domainType={props.domainType}
                                        />
                                    ) : (
                                            <Buttons
                                                className="pushProduct"
                                                type="0"
                                                label="Liên hệ"
                                                onClick={props.onClick}
                                                isSearchResultPage={props.isSearchResultPage}
                                                domainType={props.domainType}
                                            />
                                        )
                                ) : (

                                        <Buttons
                                            className="pushProduct"
                                            type="0"
                                            label="Đăng bán"
                                            onClick={props.onClick}
                                            isSearchResultPage={props.isSearchResultPage}
                                            domainType={props.domainType}
                                        />
                                    )}
                            </BorderIcon>
                        </MainMenuBorder>

                        {/* 
                    <MainMenu listMenu={props.menu} />
                    <Buttons className="pushProduct" type="0" label="Đăng bán" onClick={() => alert('It works!')} />
                    <Buttons className="pushProduct" type="0" label="Đăng nhập" onClick={() => this.showModal(0)} />
                    <Login open={this.state.openLogin} showModal={this.showModal} onClose={() => this.closeModal(0)} handlerFromParent={this.onLogin} loginFailed={this.state.loginFailed}></Login>
                    <ForgotPassword open={this.state.openForgotPass} onClose={() => this.closeModal(1)} showModal={this.showModal}
                        type={this.state.type} handlerFromParent={this.getPhoneNumber} phoneNumber={this.state.phoneNumber}
                        getSMSByPhone={this.getUserByPhone} handlerSMSConfirmation={this.verifyOtp} onNewPassword={this.onNewPassword}>
                    </ForgotPassword> 
                    */}
                    </RightHeader>
                </ContentHeader>
            </Wrapper>

        );
    }
}


export default Header;