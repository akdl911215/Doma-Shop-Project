import React, { useEffect, useState } from "react";
import GoHomeButton from "../../common/component/GoHomeButton";
import { useNavigate } from "react-router";
import styles from "../style/InvestingInfomationRead.module.css";
import { useSelector } from "react-redux";
import {
  InvestingCommentRegisterDataAPI,
  InvestingReadBoardIdDataAPI,
} from "webapp/api/investingInfomationApi";
import moment from "moment";
import { Button, Comment, Form, Header } from "semantic-ui-react";

const InvestingInfomationRead = () => {
  const navigate = useNavigate();
  const ID = sessionStorage.getItem("investingBoardId");

  const { boardId } = useSelector(({ InvestingBoardReducer }) => ({
    boardId: InvestingBoardReducer?.InvestingBoardIdInitial,
  }));

  const [boardState, setBoardState] = useState({
    content: {},
    comment: "",
    comments: [],
  });

  useEffect(() => {
    InvestingReadBoardIdDataAPI({
      boardId: Number(ID),
    })
      .then((res) =>
        setBoardState({
          ...boardState,
          content: res?.data?.success[0],
        })
      )
      .catch((err) => console.error("investing read board id error : ", err));
  }, []);

  const uploadComment = () => {
    if (sessionStorage.get("username") === null) {
      if (window.confirm("로그인을 진행하시겠습니까?")) {
        navigate("/users_signin");
        sessionStorage.setItem("signinPage", "/investing_infomation_read");
      }
    } else {
      InvestingCommentRegisterDataAPI({
        boardId: ID,
        username: sessionStorage.getItem("username"),
        comment: boardState?.comment,
      }).then((res) => {
        console.log("comment res : ", res);
        setBoardState({
          ...boardState,
          // comments:
        }).catch((err) => console.error("comment upload error : ", err));
      });
    }
  };

  const commentChange = (e) => {
    const { name, value } = e.target;
    console.log(`name : ${name}, value: ${value}`);
    setBoardState({
      ...boardState,
      [name]: value,
    });
  };

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
              value={boardState?.content?.title}
              readOnly={true}
            />
            <span>작성자</span>
            <input value={boardState?.content?.writer} readOnly={true} />
            <span>작성일자</span>
            <input
              readOnly={true}
              value={moment(boardState?.content?.regdate).format("YYYY-MM-DD")}
            />
          </div>
          <div className={styles.contentBox}>
            <span>본문</span>
            <textarea
              readOnly={true}
              value={boardState?.content?.content}
              className={styles.contentInput}
            />
          </div>

          <div>
            <Comment.Group minimal>
              <Header as="h3" dividing>
                댓글
              </Header>

              <Comment>
                <Comment.Avatar as="a" />
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
                <Comment.Avatar as="a" />
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
                    <Comment.Avatar as="a" />
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
                <Comment.Avatar as="a" />
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
                <Form.TextArea name="comment" onChange={commentChange} />
                <Button
                  content="댓글 추가"
                  labelPosition="left"
                  icon="edit"
                  primary
                  onClick={uploadComment}
                />
              </Form>
            </Comment.Group>
          </div>
          <div className={styles.btnBox}>
            {/* <button className={styles.uploadBtn}>
              <span className={styles.uploadText}>업로드</span>
            </button> */}
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
      </div>
    </div>
  );
};
export default InvestingInfomationRead;
