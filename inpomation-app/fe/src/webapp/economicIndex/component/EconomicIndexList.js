import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "../style/EconomicIndexList.module.css";
// import {
//   InvestingBoardCurrentPageLocation,
//   InvestingBoardId,
// } from "webapp/reducers/investingBoard.reducer";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import ShowPageNation from "webapp/common/component/PagenationBtn";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import KospiIndex from "./KospiIndex";

const EconomicIndexList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // sessionStorage.removeItem("investingBoardId");
  const [viewArr, setViewArr] = useState([
    {
      title: "KOSPI",
      nickname: "관리자",
      regdate: "2022-10-21",
      veiw_count: 0,
    },
  ]);

  useEffect(() => {
    // dispatch(InvestingBoardCurrentPageLocation(1));
    const result = KospiIndex();
    console.log("kospi : ", result);
  }, []);

  const movePage = (id) => {
    //
  };
  const { totalList, pageList } = useSelector(({ InvestingBoardReducer }) => ({
    pageList: InvestingBoardReducer?.InvestingPageListInitial?.pagenationCount,
    totalList:
      InvestingBoardReducer?.InvestingPageListInitial?.result
        ?.investingPageList,
  }));

  return (
    <>
      <div className={styles.list}>
        <div className={styles.active}>
          <div className={styles.contents}>
            <div className={styles.tableBox}>
              <table className={styles.table}>
                <colgroup>
                  <col width="50%" />
                  <col width="20%" />
                  <col width="*" />
                  <col width="*" />
                  <col width="*" />
                </colgroup>
                <thead>
                  <tr>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일시</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody className={styles.tableBody}>
                  {/* {totalList?.map((el) => ( */}
                  {viewArr?.map((el) => (
                    <tr key={el.id}>
                      <td onClick={() => movePage(el.id)}>{el.title}</td>
                      {/* <td onClick={() => movePage(el.id)}>{el.writer}</td> */}
                      <td onClick={() => movePage(el.id)}>{el.nickname}</td>
                      <td onClick={() => movePage(el.id)}>
                        {moment(el.regdate).format("YYYY-MM-DD")}
                      </td>
                      <td onClick={() => movePage(el.id)}>{el.veiw_count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.btnStyle}>
            <GoHomeButton />
            <div className={styles.writeBtn}>
              {sessionStorage.getItem("username") === "MASTER" ? (
                <button className={styles.contentRegisterBtn}>
                  <span
                    className={styles.contentRegisterText}
                    onClick={() => navigate("/economic_index_register")}
                  >
                    글쓰기
                  </span>
                </button>
              ) : null}
            </div>
          </div>
          <div className={styles.paginationStyle}>
            <ShowPageNation
              name="economicIndexBoardPageList"
              totalPages={pageList}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default EconomicIndexList;
