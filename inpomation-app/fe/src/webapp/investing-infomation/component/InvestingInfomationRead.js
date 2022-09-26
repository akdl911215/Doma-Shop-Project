import React, { useEffect, useState } from "react";
import GoHomeButton from "../../common/component/GoHomeButton";
import { useNavigate } from "react-router";
import styles from "../style/InvestingInfomationRead.module.css";
import { useSelector } from "react-redux";
import { InvestingReadBoardIdDataAPI } from "webapp/api/investingInfomationApi";
import moment from "moment";

const InvestingInfomationRead = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const navigate = useNavigate();

  const { boardId } = useSelector(({ InvestingBoardReducer }) => ({
    boardId: InvestingBoardReducer?.InvestingBoardIdInitial,
  }));
  sessionStorage.setItem("investingBoardId", boardId);
  const [boardState, setBoardState] = useState({});

  useEffect(() => {
    InvestingReadBoardIdDataAPI({
      boardId: boardId,
    })
      .then((res) => setBoardState(res?.data?.success[0]))
      .catch((err) => console.error("investing read board id error : ", err));
  }, [boardId]);

  // useEffect(() => {
  //   console.log("boardState : ", boardState);
  //   if (boardState === {}) {
  //     const refreshBoardId = sessionStorage.getItem("investingBoardId");
  //     InvestingReadBoardIdDataAPI({
  //       boardId: Number(refreshBoardId),
  //     })
  //       .then((res) => setBoardState(res?.data?.success[0]))
  //       .catch((err) => console.error("investing read board id error : ", err));
  //   }
  // }, [boardState]);

  return (
    <>
      <div className={styles.board}>
        <div className={styles.active}>
          <div className={styles.titleBox}>
            <span>제목</span>
            <input
              placeholder="제목을 입력해주세요."
              className={styles.titleInput}
              name="title"
              value={boardState?.title}
            />
            <span>작성자</span>
            <input value={boardState?.writer} />
            <span>작성일자</span>
            <input value={moment(boardState?.regdate).format("YYYY-MM-DD")} />
          </div>
          <div className={styles.contentBox}>
            <span>본문</span>
            <textarea
              value={boardState?.content}
              className={styles.contentInput}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default InvestingInfomationRead;
