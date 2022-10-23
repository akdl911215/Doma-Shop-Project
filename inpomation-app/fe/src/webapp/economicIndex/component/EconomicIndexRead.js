import React, { useEffect, useState } from "react";
import GoHomeButton from "../../common/component/GoHomeButton";
import { useNavigate } from "react-router";
import styles from "../style/InvestingInfomationRead.module.css";
import { useSelector } from "react-redux";
import {
  InvestingBoardCommentDeleteDataAPI,
  InvestingBoardDeleteDataAPI,
  InvestingCommentRegisterDataAPI,
  InvestingReadBoardIdDataAPI,
} from "webapp/api/investingInfomationApi";
import moment from "moment";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import { SessionRemove } from "webapp/common/component/SessionRemove";
import { UserAuthDataAPI } from "webapp/api/userApi";

const EconomicIndexRead = ({ index }) => {
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
  let deleteBtnBool = false;
  if (
    sessionStorage.getItem("roles") === "MASTER" ||
    sessionStorage.getItem("roles") === "MANAGER" ||
    sessionStorage.getItem("username") === boardState?.content?.writer
  ) {
    deleteBtnBool = true;
  }
  useEffect(() => {
    InvestingReadBoardIdDataAPI({
      boardId: Number(ID),
    })
      .then((res) => {
        setBoardState({
          ...boardState,
          content: res?.data?.success[0],
          comments: res?.data?.commentsList,
        });
      })
      .catch((err) => console.error("investing read board id error : ", err));
  }, []);
  useEffect(() => console.log("boardState : ", boardState), [boardState]);

  const uploadComment = () => {
    UserAuthDataAPI()
      .then((res) => {
        if (res?.data?.code === 200) {
          InvestingCommentRegisterDataAPI({
            boardId: ID,
            username: sessionStorage.getItem("username"),
            comment: boardState?.comment,
          })
            .then((res) => {
              if (res?.data?.code === 200) {
                window.location.reload();
              }

              if (res?.data?.message === "투자 게시판 댓글 등록 실패") {
                alert("댓글 등록이 실패하였습니다.");
              }
            })
            .catch((err) => console.error("comment upload error : ", err));
        } else {
          const signin = window.confirm(
            "로그인이 필요한 기능입니다. 로그인을 진행하시겠습니까?"
          );

          if (signin) {
            SessionRemove();
            navigate("/users_signin");

            // sessionStorage.setItem("signinPage", "/investing_infomation_read");
          }
        }
      })
      .catch((err) => console.error("board read auth error : ", err));
  };

  const commentChange = (e) => {
    const { name, value } = e.target;
    console.log(`name : ${name}, value: ${value}`);
    setBoardState({
      ...boardState,
      [name]: value,
    });
  };

  const boardRemove = () => {
    const remove = window.confirm("글을 삭제하시겠습니까?");

    if (remove) {
      InvestingBoardDeleteDataAPI({
        boardId: ID,
      })
        .then((res) => {
          if (res?.data?.code === 200) {
            alert("해당 게시글을 삭제하였습니다.");
            sessionStorage.removeItem("investingBoardId");
            navigate("/investing_infomation_list");
          } else {
            alert("해당 게시글 삭제를 실패하였습니다.");
          }
        })
        .catch((err) => console.error("investing board delete error : ", err));
    }
  };

  const commentDelete = (id) => {
    InvestingBoardCommentDeleteDataAPI({
      commentId: id,
    })
      .then((res) => {
        if (res?.data?.code === 200) {
          window.location.reload();
        } else {
          alert("댓글 삭제 실패하였습니다.");
        }
      })
      .catch((err) => console.error("comment delete catch error : ", err));
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
            <input
              // value={boardState?.content?.writer}
              value={boardState?.content?.nickname}
              className={styles.writerAndDateInput}
              readOnly={true}
            />
            <span>작성일자</span>
            <input
              readOnly={true}
              className={styles.writerAndDateInput}
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
              <Header as="h3" dividing className={styles.commentHeader}>
                댓글
              </Header>

              {boardState?.comments?.map((el, key) => {
                return (
                  <>
                    <Comment>
                      <Comment.Avatar as="a" />
                      <Comment.Content>
                        <Comment.Author as="a">{el?.writer}</Comment.Author>
                        <Comment.Metadata>
                          <span>{el?.regdate}</span>
                        </Comment.Metadata>
                        <Comment.Text>{el?.content}</Comment.Text>
                        <Comment.Actions>
                          {el?.writer === sessionStorage.getItem("username") ||
                          sessionStorage.getItem("roles") === "MASTER" ||
                          sessionStorage.getItem("roles") === "MANAGER" ? (
                            <a onClick={() => commentDelete(el?.id)}>Delete</a>
                          ) : null}
                          {/* <a>Reply</a> */}
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </>
                );
              })}

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
            {sessionStorage.getItem("username") ===
            boardState?.content?.writer ? (
              <button className={styles.modifyBtn}>
                <span
                  className={styles.modifyText}
                  onClick={() => {
                    navigate("/investing_infomation_modify");
                  }}
                >
                  수정하기
                </span>
              </button>
            ) : null}
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
            {deleteBtnBool === true ? (
              <Button onClick={boardRemove}>글 삭제</Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EconomicIndexRead;
