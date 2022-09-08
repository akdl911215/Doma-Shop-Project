import React from "react";
import { Link } from "react-router-dom";
import "webapp/layout/style/TopMenuBar.css";

const TopMenuBar = () => {
  return (
    <>
      <div className="menubar">
        <nav id="top-menu">
          <ul>
            <li>
              <Link to="/users_signup">회원가입</Link>
            </li>
            <li>
              <Link to="/users_signin">로그인</Link>
            </li>
            <li>
              <Link to="/users_list">유저 목록</Link>
            </li>
            <li>
              <Link to="/youtube_management_list">유튜브 목록</Link>
            </li>
            <li>
              <Link to="/notice_list">공지 사항</Link>
            </li>
            <li>
              <Link to="/product_infomation_list">제품 정보 리스트</Link>
            </li>
            <li>
              <Link to="/data_list">API</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default TopMenuBar;
