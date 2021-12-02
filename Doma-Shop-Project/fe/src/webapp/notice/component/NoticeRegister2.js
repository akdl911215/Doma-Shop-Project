import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NoticeRegister2 = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const clickFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("userfile", selectedFile, selectedFile.name);

    axios
      .post("api/uploadfile", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <Link to="/">홈</Link> */}
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
              <input type="submit" value="확인"></input>
              <input type="reset" value="취소"></input>
              <div>
                {/* 사진 단일 선택 */}
                <input type="file" onChange={clickFileChange} />
                <button onClick={{ handleFileUpload }}>파일 추가</button>
              </div>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};
export default NoticeRegister2;
