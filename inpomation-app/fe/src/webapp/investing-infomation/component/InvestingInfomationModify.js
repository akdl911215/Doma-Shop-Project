import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import GoHomeButton from "../../common/component/GoHomeButton";
import styles from "../style/InvestingInfomationModify.module.css";
import {
  InvestingModifyDataAPI,
  InvestingReadBoardIdDataAPI,
  ProductInfomationModifyDataAPI,
} from "../../api/investingInfomationApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const InvestingInfomationModify = () => {
  const navigate = useNavigate();
  const ID = sessionStorage.getItem("investingBoardId");

  const [boardState, setBoardState] = useState({
    content: {},
    comment: "",
    comments: [],
  });
  const [modify, setModify] = useState({
    title: "",
    writer: "",
    content: "",
    regdate: "",
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
    InvestingModifyDataAPI({
      boardId: Number(ID),
    })
      .then((res) => {
        console.log("modfiy res?.data?.success[0] : ", res?.data?.success[0]);
        setModify(res?.data?.success[0]);
      })
      .catch((err) => console.error("investing modify board id error : ", err));
  }, []);
  useEffect(() => console.log("modify : ", modify), [modify]);

  const commentChange = (e) => {
    const { name, value } = e.target;
    console.log(`name : ${name}, value: ${value}`);
    setBoardState({
      ...boardState,
      [name]: value,
    });
  };

  const modifyBtn = () => {
    navigate("/investing_infomation_list");
    InvestingModifyDataAPI();
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    console.log(`name: ${name}, value: ${value}`);

    setModify({
      ...modify,
      [name]: value,
    });
  });

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
              value={modify?.title}
              onChange={handleChange}
            />
            <span>작성자</span>
            <input
              value={modify?.writer}
              name="writer"
              className={styles.writerAndDateInput}
            />
            <span>작성일자</span>
            <input
              className={styles.writerAndDateInput}
              value={modify?.regdate}
              name="regdate"
            />
          </div>
          <div className={styles.contentBox}>
            <span>본문</span>
            <CKEditor
              editor={ClassicEditor}
              config={{
                placeholder: "내용을 입력하세요.",
              }}
              value={modify?.content}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                setModify({
                  ...modify,
                  content: data.replace(/(<([^>]+)>)/gi, ""),
                });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>

          <div className={styles.btnBox}>
            <button className={styles.modifyBtn}>
              <span className={styles.modifyText} onClick={modifyBtn}>
                수정하기
              </span>
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
      </div>
    </div>
  );
};
export default InvestingInfomationModify;
