import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button, Container, Card, Image } from "semantic-ui-react";
import SigninButton from "../../common/component/SigninButton";
import SignupButton from "../../common/component/SignupButton";
import {
  AuaOasisToner,
  SoptCamingGell,
  superAdaptogenFaceToBodyEmulgeon,
} from "webapp/images/index";
import SignOutButton from "webapp/common/component/SignOutButton";
import styles from "../style/IvestingInfomationList.module.css";
import { UserAuthDataAPI } from "webapp/api/userApi";
import { padding } from "@mui/system";
import { InvestingListDataAPI } from "webapp/api/investingInfomationApi";

const InvestingInfomationList = () => {
  const navigate = useNavigate();

  const colors = ["teal"];
  const [rolesCheck, SetRolesCheck] = useState(null);

  const [viewArr, setViewArr] = useState([]);
  useEffect(() => console.log("viewArr : ", viewArr), [viewArr]);
  useEffect(() => {
    InvestingListDataAPI()
      .then((res) => {
        if (res?.data?.code === 200) {
          setViewArr(res?.data?.list);
        } else {
          alert("리스트 조회 실패하였습니다");
        }
      })
      .catch((err) => console.error("investing list error : ", err));
  }, []);

  const listArr = [
    {
      id: "1",
      type: "구분",
      title: "타이틀",
      name: "이정현",
      date: 20200921,
      viewCount: 1111,
    },
  ];

  return (
    <>
      <div className={styles.list}>
        <div className={styles.active}>
          <div className="lf-menu-nav">
            <span>투자 커뮤니티</span>
          </div>
          <div className={styles.contents}>
            <div className="top-controls">
              <button
                className="lf-button primary float-right"
                onClick={() => navigate("/investing_infomation_register")}
              >
                글쓰기
              </button>
            </div>
            <div className={styles.tableBox}>
              <table className={styles.table}>
                <colgroup>
                  <col width="10%" />
                  <col width="*" />
                  <col width="50%" />
                  <col width="*" />
                  <col width="*" />
                  <col width="*" />
                </colgroup>
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>구분</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일시</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody className={styles.tableBody}>
                  {viewArr?.map((el) => (
                    <tr key={el.id}>
                      <td>{el.id}</td>
                      <td>{el.type}</td>
                      <td>{el.title}</td>
                      <td>{el.writer}</td>
                      {/* <td>{moment(el.date).format("YYYY-MM-DD")}</td> */}
                      <td>{el.regdate}</td>
                      <td>{el.viewCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InvestingInfomationList;
