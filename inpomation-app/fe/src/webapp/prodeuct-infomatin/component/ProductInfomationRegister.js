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
  Rating,
} from "semantic-ui-react";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import { useNavigate } from "react-router-dom";
import { client } from "webapp/api/Client";
import styles from "webapp/prodeuct-infomatin/style/ProductInfomationRegister.module.css";

const ProductInfomationRegister = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const navigate = useNavigate();

  const addImage = (event) => {
    const nowSelectImageList = event.target.files;
    const nowImageURLList = [...selectedFile];
    for (let i = 0; i < nowSelectImageList.length; i++) {
      const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
      nowImageURLList.push(nowImageUrl);
    }
    setSelectedFile(nowImageURLList);
  };

  const [register, setRegister] = useState({
    title: "",
    writer: "",
    content: "",
    viewCount: "",
  });

  const { title, writer, content, viewCount } = register;

  const handleFileUpload = () => {
    // const formData = new FormData();
    // for (let i = 0; i < selectedFile.length; i++) {
    //   formData.append("myfile", selectedFile[i], selectedFile[i].name);
    // }
    // console.log("formData : ", formData);
    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };
    // axios
    //   .post("api/uploadfile", formData, config)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // if(res) navigate('product_infomation_list')
    // navigate("/product_infomation_list");
  };

  const colors = ["teal"];

  return (
    <>
      <Container>
        <div className={styles.BackgroundBoard}>
          <div>
            {colors.map((color) => (
              <Table
                color={color}
                key={color}
                className={styles.NoticeRegisterTableStyle}
              >
                <Table.Header>
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
                    <Table.HeaderCell>제목</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Input className={styles.NoticeHeader} />
                      </Form>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.HeaderCell>평점</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Rating
                          maxRating={5}
                          defaultRating={0}
                          icon="star"
                          size="large"
                        />
                        <br />
                        <br />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>작성자</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Input className={styles.NoticeHeader} />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>조회수</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Input className={styles.NoticeHeader} />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.HeaderCell>본문</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Input className={styles.NoticeBody} />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            ))}
          </div>

          <div className="ui small basic icon buttons">
            <button className="ui button active">
              <div style={{ alignItems: "center", justifyContent: "center" }}>
                <i className="upload icon"></i>
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
              업로드
              <br />
              (admin전용)
            </Button>

            <Button secondary>뒤로가기</Button>

            <GoHomeButton />
          </div>
        </div>
      </Container>
    </>
  );
};
export default ProductInfomationRegister;
