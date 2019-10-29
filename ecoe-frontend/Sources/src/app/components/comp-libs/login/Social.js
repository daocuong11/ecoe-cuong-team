import React, {Component} from "react";
import {SocialButton, FaceBook, Google, Zalo,TitleLine, HeaderCustom, ModalHeader, CloseButton, TitleHeader, Span} from "./Wrapper";
import * as _ from "lodash";

class Social extends Component {
    constructor(props) {
        super(props);
        this.getFBAuth = this.getFBAuth.bind(this);
        this.getGoogleProfile = this.getGoogleProfile.bind(this);
    }
    getFBAuth() {
        window.FB.login(res => {
            if (_.get(res, 'status') === 'connected') {
                this.getFBProfile();
            }
        }, {
            scope: 'email'
        });
    };

    getFBProfile = () => {
        window.FB.api('/me?fields=id,name,email,picture.type(large)', (res) => {
            this.props.setData({
                fullname: res.name,
                email: res.email,
                socialId: res.id,
                socialType: 'FB'
            });

            this.props.next();
        }, );
    };

    getZaloProfile = () => {
        const Zalo = window.Zalo;
        Zalo.getLoginStatus((res) => {
            if (res.status === 'connected') {
                Zalo.api('/me',
                    'GET', {
                        fields: 'id,name'
                    },
                    (res) => {
                        this.props.setData({
                            fullname: res.name,
                            email: res.email,
                            socialId: res.id,
                            socialType: 'ZALO'
                        });

                        this.props.next();
                    }
                );
            } else {
                Zalo.login();
            }
        });
    };

    getGoogleProfile() {
        if (window.googleAuth2.isSignedIn.get()) {
            this.getBasicProfileGoogle();
        } else {
            window.googleAuth2.signIn();
        }

        window.googleAuth2.isSignedIn.listen(() => {
            this.getBasicProfileGoogle();
        });

    };

    // componentDidMount() {
    //     /** Detect zalo callback */
    //     let {search} = this.props.location;
    //     if (_.includes(search, 'zalo=true')) {
    //         setTimeout(() => {
    //             this.getZaloProfile();
    //         }, 1000);
    //     }
    // }

    getBasicProfileGoogle() {
        let profile = window.googleAuth2.currentUser.get().getBasicProfile();
        console.log("Google Profile: ", profile);
        // this.props.setData({
        //     fullname: profile.getName(),
        //     email: profile.getEmail(),
        //     socialId: profile.getId(),
        //     socialType: 'GOOGLE'
        // });

        //this.props.next();
    }

    render() {
        let props = this.props;
        return(
            <HeaderCustom>
                <CloseButton onClick={props.onClose}/>
                <ModalHeader>
                    <TitleHeader>Đăng nhập môi giới</TitleHeader>
                </ModalHeader>
                <TitleLine><Span>Đăng nhập với tài khoản mạng xã hội</Span></TitleLine>
                <SocialButton>
                    <FaceBook onClick={this.getFBAuth}>Facebook</FaceBook>
                    <Google onClick={this.getGoogleProfile}>Google</Google>
                    <Zalo onClick={this.getZaloProfile}>Zalo</Zalo>
                </SocialButton>
                <TitleLine><Span>Hoặc</Span></TitleLine>
            </HeaderCustom>
        )
    }
}

export default Social;