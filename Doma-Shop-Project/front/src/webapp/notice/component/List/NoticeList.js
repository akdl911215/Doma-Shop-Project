import React from 'react';
import 'webapp/notice/style/NoticeList.css';

const NoticeList = () => {
    return (
        <>
            <div className="NoticeListApp">
                <h1>Notice List</h1>
                <div className="movie-container">
                    <h2>제목</h2>
                    <div>내용(content)</div>
                    <div className="form-wrapper">
                        <inpput className="title-input" type="text" placeholder="제목" />
                        <textarea className="text-area" placeholder="내용"></textarea>
                    </div>
                    <button className="submit-button">입력</button>
                </div>
            </div>
        </>
    );
};
export default NoticeList;
