import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  TextArea,
  Button,
  Checkbox,
  Table,
  Container,
  Input,
  Image,
  Reveal,
} from "semantic-ui-react";

const ProductInfomationRegister = () => {
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
    noticeHeader: {
      width: "100%",
    },
    noticeBody: {
      height: "35rem",
    },
    noticeRegisterButtonStyle: {
      float: "right",
    },
    noticeRegisterMainPhotoStyle: {
      width: "5rem",
      height: "5rem",
    },
    noticeRegisterMainPhotoRowStyle: {
      height: "5.2rem",
    },
    noticeRegisterTableStyle: {
      textAlign: "center",
    },
  };

  const colors = ["teal"];

  return (
    <>
      <Container>
        <div style={style.backgroundBoard}>
          <div>
            {colors.map((color) => (
              <Table
                color={color}
                key={color}
                style={style.noticeRegisterTableStyle}
              >
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>제목</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Input style={style.noticeHeader} />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>메인사진</Table.HeaderCell>
                    <Table.Cell>
                      <Reveal animated="small fade">
                        <Reveal.Content
                          style={style.noticeRegisterMainPhotoRowStyle}
                        >
                          {selectedFile.map((image) => (
                            <Image
                              key={image}
                              src={image}
                              alt={image}
                              style={style.noticeRegisterMainPhotoStyle}
                            />
                          ))}
                        </Reveal.Content>
                      </Reveal>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>작성자</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Input style={style.noticeHeader} />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>작성일</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Input style={style.noticeHeader} />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>조회수</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Input style={style.noticeHeader} />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.HeaderCell>본문</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <TextArea style={style.noticeBody} />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            ))}
          </div>

          <div class="ui small basic icon buttons">
            <button class="ui button active">
              <div style={{ alignItems: "center", justifyContent: "center" }}>
                <i class="upload icon"></i>
                <input
                  type="file"
                  multiple="multiple"
                  id="input-file"
                  accept="image/*"
                  onChange={addImage}
                />
              </div>
            </button>
          </div>
          {/* <div>
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
              </div>
            </div> */}
          <Link to="/notice_list">
            <Button color="grey" style={style.noticeRegisterButtonStyle}>
              뒤로가기
            </Button>
          </Link>
          <Button
            onClick={handleFileUpload}
            color="teal"
            style={style.noticeRegisterButtonStyle}
          >
            업로드
          </Button>
        </div>
      </Container>
    </>
  );
};
export default ProductInfomationRegister;
