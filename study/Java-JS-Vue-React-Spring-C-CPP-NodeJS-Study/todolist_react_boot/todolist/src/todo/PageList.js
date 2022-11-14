import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPage } from './todoSlice';

const PageList = () => {
    const { pageList, page, start, end, prev, next } = useSelector((state) => state.todo.pageResult);
    const dispatch = useDispatch();
    console.log('PageList...');
    console.log(PageList);

    const movePage = (page) => {
        dispatch(fetchPage(page));
    };

    const list = pageList.map((i) => (
        <button key={i} onClick={() => movePage(i)}>
            {i}
        </button>
    ));
    return (
        <>
            <div>
                {prev ? <button onClick={() => movePage(start - 1)}> prev </button> : <></>}
                {list}
                {next ? <button onClick={() => movePage(end + 1)}> next </button> : <></>}
            </div>
        </>
    );
};
export default PageList;
