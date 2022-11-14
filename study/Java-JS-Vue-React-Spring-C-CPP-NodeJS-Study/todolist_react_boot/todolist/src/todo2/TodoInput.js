import React, { useState } from 'react';
import { registerTodo } from './todoService';

const initState = {
    title: '',
    content: '',
};

const TodoInput = ({ callback }) => {
    const [todo, setTodo] = useState(initState);

    const changeTodo = (e) => {
        const { name, value } = e.target;
        todo[name] = value;
        setTodo({ ...todo });
    };

    const addTodo = async () => {
        const response = await registerTodo(todo);
        console.log(response);
        if (callback) {
            callback();
            setTodo({ title: '', content: '' });
        }
    };

    return (
        <>
            <div>
                <h4>Todo Input</h4>

                <input type={'text'} name={'title'} value={todo.title} onChange={(e) => changeTodo(e)} />
                <input type={'text'} name={'content'} value={todo.content} onChange={(e) => changeTodo(e)} />
                <button onClick={() => addTodo()}>ADD</button>
            </div>
        </>
    );
};
export default TodoInput;
