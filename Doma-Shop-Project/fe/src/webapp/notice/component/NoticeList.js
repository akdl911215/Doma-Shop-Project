import React from "react";
import { Link } from "react-router-dom";

const NoticeList = () => {
  return (
    <>
      <table
        className="sub_news"
        border="1"
        cellspacing="0"
        summary="게시판의 글제목 리스트"
      >
        <caption>공지사항</caption>

        <colgroup>
          <col />
          <col width="300" />
          <col width="110" />
          <col width="100" />
          <col width="80" />
        </colgroup>

        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">글쓴이</th>
            <th scope="col">날짜</th>
            <th scope="col">조회수</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="id">1</td>
            <td className="title">
              <Link to="/">게시판 제목</Link>
            </td>
            <td className="name">글쓴이 이름</td>
            <td className="date">날짜</td>
            <td className="hit">1234</td>
          </tr>
        </tbody>
      </table>

      <div>
        <div>
          <input style={{ width: "300px" }} />
          <button>검색</button>
        </div>
        <button>글작성</button>
      </div>
    </>
  );
};
export default NoticeList;
