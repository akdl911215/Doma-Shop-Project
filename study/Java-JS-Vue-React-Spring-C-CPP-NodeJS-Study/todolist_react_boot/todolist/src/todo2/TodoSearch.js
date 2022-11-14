import React, { useState } from 'react';

const TodoSearch = ({ type, keyword, changeCri, clearCri }) => {
    const [stateKeyword, setStateKeyword] = useState(keyword);
    return (
        <>
            <div>
                <h3>Todo Search</h3>
                <input type={'text'} value={stateKeyword} onChange={(e) => setStateKeyword(e.target.value)} />
                <button onClick={() => changeCri('k', stateKeyword)}>Search</button>
                <button
                    onClick={() => {
                        clearCri();
                        setStateKeyword('');
                    }}
                >
                    Clear
                </button>
            </div>
        </>
    );
};
export default TodoSearch;
