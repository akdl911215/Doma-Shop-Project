import React, { useEffect, useState } from 'react';
// DATA Files
import dataNavLogin from 'webapp/common/data/Navbar/main-navbar-login.json';
import dataNavbar from 'webapp/common/data/Navbar/main-navbar-data.json';
// components
import HeaderOne from 'webapp/common/Header/HeaderOne';
import Signin from 'webapp/user/component/Signin';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from 'webapp/user/reducer/user.reducer';

const HeaderOneMain = () => {
    const userState = useSelector((state) => state.users.userState);

    return (
        <>
            <div>
                <HeaderOne data={userState?.username != undefined && userState?.username != '' ? dataNavLogin : dataNavbar} />
            </div>
        </>
    );
};
export default HeaderOneMain;
