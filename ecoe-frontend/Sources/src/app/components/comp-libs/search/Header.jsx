import React, { Component } from 'react';

import { Nav, NavItem, BtnPost, Navbar, HeaderTop } from './Wrapper';
import *  as _ from 'lodash';
import { NavLink } from 'react-router-dom';
import InputSearch from "./InputSearch";
import Logo from 'images/logo-ecoe/logo-ecoe-no-char.svg';
import UserInfo from "./UserInfo";


class Header extends Component {



    getMenus = () => {
        return [
            {name: 'KHO HÀNG CHUNG', path: '/mutual-space'},
            {name: 'CỬA HÀNG CỦA TÔI', path: '/back-office'},
            {name: 'DANH BẠ', path: '/contact'},
            {name: 'KIỂM TRA QUY HOẠCH', path: '/'}
        ];
    };


    render() {
        return (
            <Navbar>
                <HeaderTop>
                    <img src={Logo} alt="Logon" width={40} height={40}/>
                    <InputSearch />
                    <UserInfo />
                </HeaderTop>

                <div>
                    <Nav>
                        {
                            _.map(this.getMenus(), (item, index) => (
                                <NavItem key={index}><NavLink activeClassName="active" exact to={_.get(item, 'path')}>{_.get(item, 'name')}</NavLink></NavItem>
                            ))
                        }
                        <NavItem>
                            <BtnPost>ĐĂNG BÁN</BtnPost>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        );
    }

}

export default Header;