import React from 'react';

const PageList = ({ pageList, start, end, page, prev, next, movePage }) => {
    return (
        <div>
            {prev ? <button onClick={() => movePage(start - 1)}>PREV</button> : <></>}
            {pageList?.map((p) => (
                <button key={p} onClick={() => movePage(p)}>
                    {p}
                </button>
            ))}
            {next ? <button onClick={() => movePage(end + 1)}>NEXT</button> : <></>}
        </div>
    );
};

export default PageList;
