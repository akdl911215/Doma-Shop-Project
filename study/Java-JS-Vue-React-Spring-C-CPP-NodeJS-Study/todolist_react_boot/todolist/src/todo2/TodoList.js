import React from 'react';

const TodoList = ({ dtoList, moveRead }) => {
    return (
        <>
            <div>
                <h2>Todo List</h2>
                {dtoList?.map((dto) => (
                    <li key={dto.tno} onClick={() => moveRead(dto.tno)}>
                        {dto.tno} --- {dto.title}
                    </li>
                ))}
            </div>
        </>
    );
};
export default TodoList;
