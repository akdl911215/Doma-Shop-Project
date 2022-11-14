import React from 'react';

const BasicList = ({ dtoList }) => {
    return (
        <div>
            {dtoList?.map((todo) => (
                <li key={todo.tno}>
                    {todo.tno} -- {todo.title}
                </li>
            ))}
        </div>
    );
};
export default BasicList;
