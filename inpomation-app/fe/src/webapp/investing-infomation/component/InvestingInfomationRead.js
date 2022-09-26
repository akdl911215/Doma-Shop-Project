import React, { useEffect, useState } from "react";
import GoHomeButton from "../../common/component/GoHomeButton";
import { useNavigate } from "react-router";
import styles from "../style/InvestingInfomationRead.module.css";
import { useSelector } from "react-redux";
import { InvestingReadBoardIdDataAPI } from "webapp/api/investingInfomationApi";
import moment from "moment";
import { Button, Comment, Form, Header } from "semantic-ui-react";

const InvestingInfomationRead = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const navigate = useNavigate();

  const { boardId } = useSelector(({ InvestingBoardReducer }) => ({
    boardId: InvestingBoardReducer?.InvestingBoardIdInitial,
  }));

  const [boardState, setBoardState] = useState({});

  useEffect(() => {
    const ID = sessionStorage.getItem("investingBoardId");

    InvestingReadBoardIdDataAPI({
      boardId: Number(ID),
    })
      .then((res) => setBoardState(res?.data?.success[0]))
      .catch((err) => console.error("investing read board id error : ", err));
  }, []);

  return (
    <div>
      <div className={styles.board}>
        <div className={styles.active}>
          <div className={styles.titleBox}>
            <span>제목</span>
            <input
              placeholder="제목을 입력해주세요."
              className={styles.titleInput}
              name="title"
              value={boardState?.title}
              readOnly={true}
            />
            <span>작성자</span>
            <input value={boardState?.writer} readOnly={true} />
            <span>작성일자</span>
            <input
              readOnly={true}
              value={moment(boardState?.regdate).format("YYYY-MM-DD")}
            />
          </div>
          <div className={styles.contentBox}>
            <span>본문</span>
            <textarea
              readOnly={true}
              value={boardState?.content}
              className={styles.contentInput}
            />
          </div>

          <div>
            <Comment.Group minimal>
              <Header as="h3" dividing>
                댓글
              </Header>

              <Comment>
                <Comment.Avatar as="a" src="/images/avatar/small/matt.jpg" />
                <Comment.Content>
                  <Comment.Author as="a">Matt</Comment.Author>
                  <Comment.Metadata>
                    <span>Today at 5:42PM</span>
                  </Comment.Metadata>
                  <Comment.Text>How artistic!</Comment.Text>
                  <Comment.Actions>
                    <a>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Comment>
                <Comment.Avatar as="a" src="/images/avatar/small/elliot.jpg" />
                <Comment.Content>
                  <Comment.Author as="a">Elliot Fu</Comment.Author>
                  <Comment.Metadata>
                    <span>Yesterday at 12:30AM</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>
                      This has been very useful for my research. Thanks as well!
                    </p>
                  </Comment.Text>
                  <Comment.Actions>
                    <a>Reply</a>
                  </Comment.Actions>
                </Comment.Content>

                <Comment.Group>
                  <Comment>
                    <Comment.Avatar
                      as="a"
                      src="/images/avatar/small/jenny.jpg"
                    />
                    <Comment.Content>
                      <Comment.Author as="a">Jenny Hess</Comment.Author>
                      <Comment.Metadata>
                        <span>Just now</span>
                      </Comment.Metadata>
                      <Comment.Text>
                        Elliot you are always so right :)
                      </Comment.Text>
                      <Comment.Actions>
                        <a>Reply</a>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>

              <Comment>
                <Comment.Avatar as="a" src="/images/avatar/small/joe.jpg" />
                <Comment.Content>
                  <Comment.Author as="a">Joe Henderson</Comment.Author>
                  <Comment.Metadata>
                    <span>5 days ago</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    Dude, this is awesome. Thanks so much
                  </Comment.Text>
                  <Comment.Actions>
                    <a>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Form reply>
                <Form.TextArea />
                <Button
                  content="댓글 추가"
                  labelPosition="left"
                  icon="edit"
                  primary
                />
              </Form>
            </Comment.Group>
          </div>
        </div>
      </div>
      <div className={styles.btnBox}>
        <button className={styles.uploadBtn}>
          <span className={styles.uploadText}>업로드</span>
        </button>
        <button className={styles.cancelBtn}>
          <span
            className={styles.cancelText}
            onClick={() => {
              navigate("/investing_infomation_list");
            }}
          >
            뒤로가기
          </span>
        </button>
        <GoHomeButton />
      </div>
    </div>
  );
};
export default InvestingInfomationRead;
