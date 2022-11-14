import React, { useEffect, useState } from 'react';
import { fetchPage } from './todoService';
import TodoList from './TodoList';
import PageList from '../component/PageList';
import TodoSearch from './TodoSearch';
import TodoInput from './TodoInput';
import TodoRead from './TodoRead';

const initState = {
    page: 1,
    size: 10,
    type: '',
    keyword: '',
};

const TodoWrapper = () => {
    const [cri, setCri] = useState(initState);
    const [current, setCurrent] = useState(0);
    const [result, setResult] = useState({});

    const loadPage = async () => {
        const result = await fetchPage(cri);
        setResult(result);
    };

    const movePage = (pageNum) => {
        setCri({ ...cri, page: pageNum });
    };

    const moveRead = (tno) => {
        setCurrent(tno);
    };

    const changeCri = (key, value) => {
        console.log('changeCri', key, value);

        cri.type = key;
        cri.keyword = value;

        console.log(cri);

        setCri({ ...cri });
    };

    const clearCri = () => {
        setCri({ ...initState });
    };

    useEffect(() => {
        loadPage();
    }, [cri]);

    // callback 은 버블링을 위한 사용
    return (
        <div>
            <TodoInput callback={clearCri}></TodoInput>
            <TodoSearch {...cri} clearCri={clearCri} changeCri={changeCri}></TodoSearch>
            <TodoList {...result} moveRead={moveRead}></TodoList>
            <PageList {...result} movePage={movePage}></PageList>
            <TodoRead tno={current} clearCri={clearCri}></TodoRead>
        </div>
    );
};
export default TodoWrapper;
