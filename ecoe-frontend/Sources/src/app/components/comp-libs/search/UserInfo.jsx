import React, { Component } from 'react';
import NotifyIcon from "images/icons/notify.svg";
import Avatar from 'images/Avatars/3.png';
import {BtnNav} from "./Wrapper";

class UserInfo extends Component {
    render() {
        return (
            <div style={{marginLeft: 'auto', padding: '10px 0'}}>
                <BtnNav>
                    <img src={Avatar} alt="icon"/>
                </BtnNav>
                <BtnNav>
                    <img src={NotifyIcon} alt="icon"/>
                </BtnNav>
            </div>
        );
    }
}

export default UserInfo;