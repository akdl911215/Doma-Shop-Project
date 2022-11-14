import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from './todoService';
import { changeMode } from './todoSlice';

const initState = { title: '', content: '' };

const TodoRegister = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState(initState);
    const clickRegister = async () => {
        console.log('clickRegister');
        register(todo).then((res) => {
            console.log(res);
            setTodo({ title: '', content: '' });
            dispatch(changeMode(new Date().getMilliseconds()));
        });
    };

    const change = (e) => {
        const target = e.target;
        todo[target.name] = target.value;
        console.log(todo);
        setTodo({ ...todo });
    };

    return (
        <>
            <div>
                <h1>Todo Register</h1>
                <div>
                    <label>제목</label>
                    <input type={'text'} name={'title'} value={todo.title} onChange={(e) => change(e)} />
                </div>
                <div>
                    <label>내용</label>
                    <input type={'text'} name={'content'} value={todo.content} onChange={(e) => change(e)} />
                </div>

                <button onClick={() => clickRegister()}>Register</button>
            </div>
        </>
    );
};
export default TodoRegister;
