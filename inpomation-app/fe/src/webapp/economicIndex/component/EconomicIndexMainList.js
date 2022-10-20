import React, { useState } from "react";
import moment from "moment";
import styles from "../style/EconomicIndexMainList.module.css";

const EconomicIndexMainList = () => {
  const [totalList, setTotalList] = useState([]);

  const movePage = () => {
    //
  };
  return (
    <>
      <div>
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
              {totalList?.map((el) => (
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
    </>
  );
};
export default EconomicIndexMainList;
