import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Link to="/users/users_signup">회원가입</Link>
            <Link to="/users/users_signup">로그인</Link>
        </>
    );
};
export default Home;
