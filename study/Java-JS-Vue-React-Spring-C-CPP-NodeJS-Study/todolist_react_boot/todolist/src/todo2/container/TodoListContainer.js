import React from 'react';
import TodoInput from '../TodoInput';
import TodoRegister from '../TodoRegister';
import TodoSearch from '../TodoSearch';
import TodoList from '../TodoList';
import TodoRead from '../TodoRead';

const TodoListContainer = () => {
    return (
        <>
            <div>
                <h1>Todo</h1>

                <TodoList />
                <TodoRegister />
                <TodoSearch />
                {/* <TodoInput /> */}
                <TodoRead />
            </div>
        </>
    );
};
export default TodoListContainer;
