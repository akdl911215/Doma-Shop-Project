import React from 'react';

const NoticeDetail = () => {
    if (loading) {
        <div>loading</div>
    } else {
        return (<>
            <div className="Read">
                <div className="list-itle">
                    폼 게시판
                </div>
                <div className="read_title">
                    {data.title}
                </div>
                <tbody>
                    <tr align="center" className="table_info">
                        <td width="15%">작성일</td>
                        <td width="20%">{startDate}</td>
                        <td width="15%">작성자</td>
                        <td width="15%">링크</td>
                    </tr>
                </tbody>
            </div>
        </>)
    }
};
export default NoticeDetail;
