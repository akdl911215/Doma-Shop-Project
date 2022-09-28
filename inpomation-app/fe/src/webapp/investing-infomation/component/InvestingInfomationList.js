import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "../style/IvestingInfomationList.module.css";
import {
  InvestingBoardCurrentPageLocation,
  InvestingBoardId,
} from "webapp/reducers/investingBoard.reducer";
import { useDispatch } from "react-redux";
import moment from "moment";
import ShowPageNation from "webapp/common/component/PagenationBtn";

const InvestingInfomationList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  sessionStorage.removeItem("investingBoardId");

  const [viewArr, setViewArr] = useState([]);

  useEffect(() => {
    dispatch(InvestingBoardCurrentPageLocation(1));
    // InvestingListDataAPI()
    // .then((res) => {
    //   if (res?.data?.code === 200) {
    //     setViewArr(res?.data?.list);
    //   } else {
    //     alert("리스트 조회 실패하였습니다");
    //   }
    // })
    // .catch((err) => console.error("investing list error : ", err));
  }, []);

  const movePage = (id) => {
    sessionStorage.setItem("investingBoardId", id);
    dispatch(InvestingBoardId(id));
    navigate("/investing_infomation_read");
  };

  return (
    <>
      <div className={styles.list}>
        <div className={styles.active}>
          {/* <div>
              <span>투자 커뮤니티</span>
            </div> */}
          <div className={styles.contents}>
            <div className={styles.tableBox}>
              <table className={styles.table}>
                <colgroup>
                  <col width="10%" />
                  {/* <col width="*" /> */}
                  <col width="50%" />
                  <col width="*" />
                  <col width="*" />
                  <col width="*" />
                </colgroup>
                <thead>
                  <tr>
                    <th>번호</th>
                    {/* <th>구분</th> */}
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일시</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody className={styles.tableBody}>
                  {viewArr?.map((el) => (
                    <tr key={el.id}>
                      <td onClick={() => movePage(el.id)}>{el.id}</td>
                      {/* <td>{el.type}</td> */}
                      <td onClick={() => movePage(el.id)}>{el.title}</td>
                      <td onClick={() => movePage(el.id)}>{el.writer}</td>
                      {/* <td>{moment(el.date).format("YYYY-MM-DD")}</td> */}
                      {/* <td onClick={() => movePage(el.id)}>{el.regdate}</td> */}
                      <td onClick={() => movePage(el.id)}>
                        {moment(el.regdate).format("YYYY-MM-DD")}
                      </td>
                      <td onClick={() => movePage(el.id)}>{el.viewCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="top-controls">
            {sessionStorage.getItem("username") === null ? null : (
              <button className={styles.contentRegisterBtn}>
                <span
                  className={styles.contentRegisterText}
                  onClick={() => navigate("/investing_infomation_register")}
                >
                  글쓰기
                </span>
              </button>
            )}
          </div>
          <div className={styles.PaginationStyle}>
            {/* <ShowPageNation name="userPageList" totalPages={pageList} /> */}
            <ShowPageNation name="investingBoardPageList" />
          </div>
        </div>
      </div>
    </>
  );
};
export default InvestingInfomationList;
