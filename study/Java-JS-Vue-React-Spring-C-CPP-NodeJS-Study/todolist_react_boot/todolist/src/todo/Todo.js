import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPage } from './todoSlice';
import TodoList from './TodoList';
import PageList from './PageList';

const Todo = () => {
    const dispatch = useDispatch();
    const goReset = () => {
        dispatch(fetchPage(1));
    };
    return (
        <>
            <div>
                <h1>Todo닷</h1>
                <TodoList />
                <PageList />
                <button onClick={() => goReset()}>Reset</button>
            </div>
        </>
    );
};
export default Todo;
