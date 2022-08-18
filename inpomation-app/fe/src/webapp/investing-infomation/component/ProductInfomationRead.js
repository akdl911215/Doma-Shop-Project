import React, { useState } from "react";
import {
  Form,
  TextArea,
  Button,
  Table,
  Container,
  Input,
  Reveal,
  Rating,
  Comment,
  Header,
} from "semantic-ui-react";
import GoHomeButton from "../../common/component/GoHomeButton";
import { useNavigate } from "react-router";
import styles from "../style/ProductInfomationRead.module.css";

const ProductInfomationRead = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const navigate = useNavigate();

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
                className={styles.ProductInfomationReadTableStyle}
              >
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>제목</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Input
                          className={styles.ProductInfomationHeaderStyle}
                          value="다이브인 저분자 히알루론산 토너"
                          readOnly
                        />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>메인사진</Table.HeaderCell>
                    <Table.Cell>
                      <Reveal animated="small fade">
                        <Reveal.Content
                          className={
                            styles.ProductInfomationReadMainPhotoRowStyle
                          }
                        ></Reveal.Content>
                      </Reveal>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>평점</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Rating
                          maxRating={5}
                          defaultRating={4}
                          icon="star"
                          size="large"
                        />
                        <br />
                        <br />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>정가</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Input
                          className={styles.ProductInfomationHeaderStyle}
                          value="300ml/21,000원"
                          readOnly
                        />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>랭킹</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Input
                          className={styles.ProductInfomationHeaderStyle}
                          value="스킨/토너 1위"
                          readOnly
                        />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>수상</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Input
                          className={styles.ProductInfomationHeaderStyle}
                          value="2021 베타존 뷰티 어워드 스킨/토너 1위"
                          readOnly
                        />
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.HeaderCell>본문</Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <TextArea
                          className={styles.ProductInfomationBodyStyle}
                        />
                      </Form>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.HeaderCell>
                      본문
                      <Button
                        onClick={() => navigate("/product_infomation_review")}
                        className={styles.ReviewButtonStyle}
                        color="teal"
                      >
                        리뷰
                      </Button>
                    </Table.HeaderCell>
                    <Table.Cell>
                      <Form>
                        <Comment.Group>
                          <Header as="h3" dividing>
                            Comments
                          </Header>

                          <Comment>
                            <Comment.Avatar src="/images/avatar/small/matt.jpg" />
                            <Comment.Content>
                              <Comment.Author as="a">언노인</Comment.Author>
                              <Comment.Metadata>
                                <div>2021.10.26</div>
                              </Comment.Metadata>
                              <Comment.Text>
                                기존에 독도토너 쓰다가 이번에 끌려서 주문해서 써
                                보고 있는데아주 가볍고 자극적이지 않아서 민감한
                                피부에 잘어울립니다.. 빠르게 날아가니 빠르게
                                바르시는게 좋아요... 다른 제품과 크게 차이점이
                                보이지 않는 점이 아쉽네요
                              </Comment.Text>
                              <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                              </Comment.Actions>
                            </Comment.Content>
                          </Comment>

                          <Comment>
                            <Comment.Avatar src="/images/avatar/small/elliot.jpg" />
                            <Comment.Content>
                              <Comment.Author as="a">iiiiie</Comment.Author>
                              <Comment.Metadata>
                                <div>2020.09.06</div>
                              </Comment.Metadata>
                              <Comment.Text>
                                <p>
                                  일단 제 피부는 건성에 민감성 피부입니다. 외부
                                  자극에 의해 약한 편이고 요즘엔 마스크 때문에
                                  턱부분이 예민해진 상태입니다. 진정, 좁쌀 케어
                                  저번부터 이번제품까지 역시 저는 히알루론산이
                                  주성분인 제품과는 ...
                                </p>
                              </Comment.Text>
                              <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                              </Comment.Actions>
                            </Comment.Content>
                          </Comment>

                          <Comment>
                            <Comment.Avatar src="/images/avatar/small/joe.jpg" />
                            <Comment.Content>
                              <Comment.Author as="a">
                                Joe Henderson
                              </Comment.Author>
                              <Comment.Metadata>
                                <div>5 days ago</div>
                              </Comment.Metadata>
                              <Comment.Text>
                                Dude, this is awesome. Thanks so much
                              </Comment.Text>
                              <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                              </Comment.Actions>
                            </Comment.Content>
                          </Comment>

                          <Form reply>
                            <Form.TextArea />
                            <Button
                              content="Add Reply"
                              labelPosition="left"
                              icon="edit"
                              primary
                            />
                          </Form>
                        </Comment.Group>
                      </Form>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            ))}
          </div>

          <div className={styles.ProductInfomationReadButtonStyle}>
            <Button
              onClick={() => navigate("/product_infomation_modify")}
              color="teal"
            >
              수정하기
              <br />
              (admin 전용)
            </Button>

            <Button secondary>뒤로가기</Button>
            <GoHomeButton />
          </div>
        </div>
      </Container>
    </>
  );
};
export default ProductInfomationRead;
