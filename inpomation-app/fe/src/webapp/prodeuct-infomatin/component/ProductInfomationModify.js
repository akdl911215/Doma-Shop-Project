import React, { useState } from "react";
import {
  Form,
  TextArea,
  Button,
  Table,
  Container,
  Input,
  Image,
  Reveal,
} from "semantic-ui-react";
import { client } from "webapp/api/Client";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import styles from "webapp/prodeuct-infomatin/style/ProductInfomationModify.module.css";

const ProductInfomationModify = () => {
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

    client
      .post("api/uploadfile", formData, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const colors = ["teal"];

  return (
    <>
      <Container>
        <div className={styles.BackgroundBoardStyle}>
          <div>
            {colors.map((color) => (
              <Table
                color={color}
                key={color}
                className={styles.NoticeRegisterTableStyle}
              >
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>제목</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Input className={styles.NoticeHeaderStyle} />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>메인사진</Table.HeaderCell>
                    <Table.Cell>
                      <Reveal animated="small fade">
                        <Reveal.Content
                          className={styles.NoticeRegisterMainPhotoRowStyle}
                        >
                          {selectedFile.map((image) => (
                            <Image
                              key={image}
                              src={image}
                              alt={image}
                              className={styles.NoticeRegisterMainPhotoStyle}
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
                        <Input className={styles.NoticeHeaderStyle} />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>작성일</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Input className={styles.NoticeHeaderStyle} />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>조회수</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Input className={styles.NoticeHeaderStyle} />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.HeaderCell>본문</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <TextArea className={styles.NoticeBodyStyle} />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            ))}
          </div>

          <div class="ui small basic icon buttons">
            <button class="ui button active">
              <div className={styles.UploadButtonStyle}>
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

          <div className={styles.NoticeRegisterButtonStyle}>
            <Button onClick={handleFileUpload} color="teal">
              수정하기
            </Button>

            <Button secondary>뒤로가기</Button>

            <GoHomeButton />
          </div>
        </div>
      </Container>
    </>
  );
};
export default ProductInfomationModify;
