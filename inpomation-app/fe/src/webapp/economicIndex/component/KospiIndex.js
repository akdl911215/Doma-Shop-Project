import React, { useEffect, useState } from "react";
import GoHomeButton from "../../common/component/GoHomeButton";
import { useNavigate } from "react-router";
import styles from "../style/KospiIndex.module.css";
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

// https://github.com/rrag/react-stockcharts
// https://codesandbox.io/s/github/rrag/react-stockcharts-examples2/tree/master/examples/CandleStickChartWithDarkTheme?file=/src/index.js:474-478
const KospiIndex = () => {
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
            <input
              placeholder="제목을 입력해주세요."
              className={styles.titleInput}
              name="title"
              value="KOSPI 개요"
              readOnly={true}
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

          <div className={styles.btnBox}>
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
export default KospiIndex;
