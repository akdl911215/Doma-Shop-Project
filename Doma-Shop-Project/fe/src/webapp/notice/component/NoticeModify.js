import React from "react";
import { Link } from "react-router-dom";

const NoticeModify = () => {
  return (
    <>
      <form action="submit" method="post">
        <table>
          <tr>
            <td>제목</td>
            <td>
              <input
                type="text"
                name="title"
                style={{ width: "200px" }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>작성자</td>
            <td>
              <input type="text" name="writer" style={{ width: "200px" }} />
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>
              <textarea rows="20" name="text" />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="password" name="pass" />
            </td>
          </tr>
          <tr>
            <td>
              <input ttype="submit" value="확인"></input>
              <input ttype="reset" value="취소"></input>
            </td>
            <td>
              <button>수정하기</button>
            </td>
            <td>
              <Link to="/notice_read">
                <button>뒤로가기</button>
              </Link>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};
export default NoticeModify;
