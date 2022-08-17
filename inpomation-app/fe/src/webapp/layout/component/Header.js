import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import { SessionRemove } from "webapp/common/component/SessionRemove";

const Header = () => {
  const [rolesCheck, setRolesCheck] = useState(null);
  useEffect(() => {
    setRolesCheck(sessionStorage.getItem("roles"));
    sessionStorage.removeItem("option");
  }, []);

  return (
    <>
      <>
        <div className="menubar">
          <nav id="top-menu">
            <ul>
              {/* <li>
                {rolesCheck !== null ? (
                  <>
                    <Link
                      to="/portfolio"
                      onClick={() =>
                        sessionStorage.setItem("option", "cashAsset")
                      }
                    >
                      포트폴리오
                    </Link>
                  </>
                ) : null}
              </li> */}
              <li>
                {rolesCheck === null ? (
                  <>
                    <Link to="/users_signup">회원가입</Link>
                  </>
                ) : null}
              </li>
              <li>
                {sessionStorage.getItem("roles") === null ? (
                  <Link to="/users_signin">로그인</Link>
                ) : (
                  <Link
                    to="/"
                    onClick={(e) => {
                      alert("로그아웃을 진행합니다");
                      SessionRemove();
                      window.location.reload();
                    }}
                  >
                    로그아웃
                  </Link>
                )}
              </li>

              {rolesCheck !== null ? (
                <>
                  <Link
                    to="/users_mypage"
                    onClick={() =>
                      sessionStorage.setItem("option", "cashAsset")
                    }
                  >
                    마이페이지
                  </Link>
                </>
              ) : (
                <></>
              )}
              <li>
                <Link to="/notice_list">공지 사항</Link>
              </li>
              <li>
                <Link to="/data_list">수출 및 수입 정보 확인</Link>
              </li>
              {rolesCheck === "MASTER" || rolesCheck === "MANAGER" ? (
                <>
                  <Link to="/admin_main">어드민 페이지 이동</Link>
                </>
              ) : (
                ""
              )}
            </ul>
          </nav>
        </div>
      </>
    </>
  );
};
export default Header;
