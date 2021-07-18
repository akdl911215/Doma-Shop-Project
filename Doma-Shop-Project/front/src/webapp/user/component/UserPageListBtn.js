import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPage } from 'webapp/user/reducer/user.reducer';

const UserPageListBtn = ({ pageList, page, start, end, prev, next, type = '', keyword = '' }) => {
    const dispatch = useDispatch();
    const movePage = (page) => {
        const param = { page: page, keyword: keyword, type: type };
        dispatch(fetchPage(param));
    };

    const list = pageList.map((i) => {
        <button key={i} className="userPageListBtn" onClick={() => movePage(i)}>
            {i}
        </button>;
    });

    return <></>;
};
export default UserPageListBtn;
