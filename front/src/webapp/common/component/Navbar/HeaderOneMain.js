import React, { useEffect, useState } from 'react';
// DATA Files
import dataNavLogin from 'webapp/common/data/Navbar/main-navbar-login.json';
import dataNavbar from 'webapp/common/data/Navbar/main-navbar-data.json';
// components
import HeaderOne from 'webapp/common/Header/HeaderOne';
import Signin from 'webapp/user/component/Signin';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser, getLocalUser } from 'webapp/user/reducer/user.reducer';

const HeaderOneMain = ({}) => {
    const userStateRedux = useSelector((state) => state.users.usersState);
    console.log('======');
    console.log(userStateRedux);

    useEffect((e) => {
        getLocalUser();
        console.log('getLocalUser ::: ', getLocalUser);
    });

    return (
        <>
            <div>
                <HeaderOne data={userStateRedux?.username != undefined && userStateRedux?.username != '' ? dataNavLogin : dataNavbar} />
            </div>
        </>
    );
};
export default HeaderOneMain;
