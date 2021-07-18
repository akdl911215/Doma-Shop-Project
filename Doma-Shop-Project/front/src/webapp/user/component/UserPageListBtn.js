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

    return (
        <>
            {perv ? (
                <button className="pageListBtn" onClick={() => movePage(start - 1)}>
                    prev
                </button>
            ) : (
                <></>
            )}
            {list}
            {next ? (
                <button className="pageListBtn" onClick={() => movePage(end + 1)}>
                    next
                </button>
            ) : (
                <></>
            )}
        </>
    );
};
export default UserPageListBtn;
