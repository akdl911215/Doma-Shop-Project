import axios from "axios";
import React, { useState } from "react";
// import "webapp/notice/style/NoticeRegister.css";
import { Link } from "react-router-dom";
import { Mypage } from "webapp/user";
import { Form, TextArea, Button, Checkbox, Table } from "semantic-ui-react";

const NoticeRegister = () => {
  const [selectedFile, setSelectedFile] = useState([]);

  const addImage = (event) => {
    const nowSelectImageList = event.target.files;
    const nowImageURLList = [...selectedFile];
    for (let i = 0; i < nowSelectImageList.length; i++) {
      const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
      nowImageURLList.push(nowImageUrl);
    }
    setSelectedFile(nowImageURLList);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFile.length; i++) {
      formData.append("myfile", selectedFile[i], selectedFile[i].name);
    }
    console.log("formData : ", formData);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("api/uploadfile", formData, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const style = {
    backgroundBoard: {
      width: "100%",
      maxWidth: "100rem",
      margin: "auto",
    },
    button: {
      float: "right",
    },
  };
  
  return (
    <>
       <div style={style.backgroundBoard}>
        <div>
          {colors.map((color) => (
            <Table color={color} key={color}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>번호</Table.HeaderCell>
                  <Table.HeaderCell>제목</Table.HeaderCell>
                  <Table.HeaderCell>글쓴이</Table.HeaderCell>
                  <Table.HeaderCell>날짜</Table.HeaderCell>
                  <Table.HeaderCell>조회수</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>3</Table.Cell>
                  <Link to="/notice_modify">
                    <Table.Cell>공지사항3</Table.Cell>
                  </Link>
                  <Table.Cell>운영자3</Table.Cell>
                  <Table.Cell>2021년12월20일</Table.Cell>
                  <Table.Cell>1234</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>2</Table.Cell>
                  <Link to="/notice_modify">
                    <Table.Cell>공지사항2</Table.Cell>
                  </Link>
                  <Table.Cell>운영자2</Table.Cell>
                  <Table.Cell>2021년12월20일</Table.Cell>
                  <Table.Cell>1234</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>1</Table.Cell>
                  <Link to="/notice_modify">
                    <Table.Cell>공지사항1</Table.Cell>
                  </Link>
                  <Table.Cell>운영자1</Table.Cell>
                  <Table.Cell>2021년12월20일</Table.Cell>
                  <Table.Cell>1234</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          ))}
        </div>

      <form action="submit" method="post">
        <Form.Field>
          <label>제목</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>작성자</label>
          <input placeholder="Last Name" />
        </Form.Field>

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
              <TextArea placeholder="Tell us more" />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="password" name="pass" />
            </td>
          </tr>
          <Button type="submit">Submit</Button>
          <tr>
            <td>
              <input type="submit" value="확인"></input>
              <input type="reset" value="취소"></input>
            </td>
            <td>
              <div>
                {selectedFile.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={image}
                    style={{ margin: "auto", height: "100px", width: "100px" }}
                  />
                ))}
                <div style={{ alignItems: "center", justifyContent: "center" }}>
                  <input
                    type="file"
                    multiple="multiple"
                    id="input-file"
                    accept="image/*"
                    onChange={addImage}
                  />
                  <button onClick={() => handleFileUpload}>업로드</button>
                </div>
              </div>
            </td>
            <td>
              <Link to="/notice_list">
                <button>뒤로가기</button>
              </Link>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};
export default NoticeRegister;
