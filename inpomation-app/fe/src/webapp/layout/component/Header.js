import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = () => {
  useEffect(() => {
    sessionStorage.getItem("roles");
  });
  //  {
  //    rolesCheck === "MASTER" ? (
  //      <>
  //        <Button
  //          secondary
  //          onClick={() => navigate("/product_infomation_register")}
  //        >
  //          글작성
  //          <br />
  //          (admin전용)
  //        </Button>
  //        <Button secondary onClick={() => navigate("/admin_main")}>
  //          어드민 전용 페이지 이동
  //          <br />
  //          (admin전용)
  //        </Button>
  //      </>
  //    ) : (
  //      ""
  //    );
  //  }

  //  {
  //    rolesCheck === null ? <SigninButton /> : <SignOutButton />;
  //  }
  return (
    <>
      <>
        <div className="menubar">
          <nav id="top-menu">
            <ul>
              <li>
                <Link to="/users_signup">회원가입</Link>
              </li>
              <li>
                {sessionStorage.getItem("roles") === null ? (
                  <Link to="/users_signin">로그인</Link>
                ) : (
                  <Link
                    to="/"
                    onClick={(e) => {
                      alert("로그아웃을 진행합니다");
                      sessionStorage.removeItem("jwtToken");
                      sessionStorage.removeItem("roles");
                      window.location.reload();
                    }}
                  >
                    로그아웃
                  </Link>
                )}
              </li>

              <li>
                <Link to="/users_mypage">마이페이지</Link>
              </li>
              <li>
                <Link to="/users_withdrawal">탈퇴하기</Link>
              </li>
              <li>
                <Link to="/notice_list">공지 사항</Link>
              </li>

              <li>
                <Link to="/data_list">수출 및 수입 정보 확인</Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    </>
  );
};
export default Header;
