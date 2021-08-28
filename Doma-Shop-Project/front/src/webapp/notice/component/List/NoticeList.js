import { ListItem } from '@material-ui/core';
import React, { useState } from 'react';
import 'webapp/notice/style/NoticeList.css';

const NoticeList = () => {
    const [listData, setListData] = useState([]);

    return (
        <>
            <div className="list-template">폼 게시판</div>
            <section className="title-column">
                <tr>
                    <td>
                        <span>번호</span>
                    </td>
                    <td>
                    <span className="title-column">제목</span>
                    </td>
                    <span>작성자</span>
                    <span>작성일</span>
                    <span>마감일</span>
                </tr>
            </section>
            <section className="list-wrapper">
                {listData.map(({ board_id, title, start_date, end_date }) => (
                    <ListItem title={title} start_date={start_date} key={board_id}></ListItem>
                ))}
            </section>
        </>
    );
};
export default NoticeList;
// https://antdev.tistory.com/78
