import React, { useState } from "react";
import { Betazon } from "../../images/index";
import { useNavigate } from "react-router";
// import {
//   Button,
//   Form,
//   Grid,
//   Header,
//   Message,
//   Segment,
// } from "semantic-ui-react";
import SignupButton from "../../common/component/SignupButton";
import { UserSigninDataAPI, UserAuthDataAPI } from "../../api/userApi";
import SignOutButton from "webapp/common/component/SignOutButton";
import styles from "../style/Signin.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";
// import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const Signin = () => {
  const navigate = useNavigate();
  const [signin, setSignin] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signin;

  const signinButton = () => {
    alert("로그인버튼누름");
    sessionStorage.setItem("username", username);

    if (username === "" || password === "") {
      window.alert("아이디 또는 비밀번호를 입력해주세요.");
      return;
    }

    UserSigninDataAPI(signin).then((res) => {
      if (res.data.message === "로그인 성공") {
        sessionStorage.setItem("jwtToken", res?.data?.token);
        sessionStorage.setItem("roles", res?.data?.roles);

        UserAuthDataAPI(res?.data?.token, res?.data?.roles)
          .then((res) => navigate("/"))
          .catch((err) => console.error(`signin error : ${err}`));
      } else {
        sessionStorage.removeItem("username");
        if (res.data.message === "비밀번호 틀렸습니다.")
          window.alert("비밀번호가 틀렸습니다");
        if (res.data.message === "아이디가 틀렸습니다.")
          window.alert("아이디가 틀렸습니다.");
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignin({
      ...signin,
      [name]: value,
    });
  };

  return (
    <>
      <div className={styles.signinBox}>
        <div className={styles.title}>
          <spna className={styles.titleText}>Login</spna>
        </div>

        <div className={styles.body}>
          <input
            className={styles.usernameBox}
            type="text"
            placeholder="아이디를 입력하세요."
          />
          <input
            className={styles.passwordBox}
            type="password"
            placeholder="비밀번호를 입력하세요."
          />
          <div className={styles.signinBtnBox}>
            <button className={styles.signinButton}>
              <span className={styles.signinBtnText}>Login</span>
            </button>
          </div>
          <span className={styles.guidePharse}>
            Don't have an account?
            <span className={styles.guidePharseSignup}>Sign up</span>
          </span>
          <div className={styles.divide}>
            <hr className={styles.divideLine1} />
            <span className={styles.divideSNS}>SNS</span>
            <hr className={styles.divideLine2} />
          </div>
          <div className={styles.snsBox}>
            <div className={styles.facebook}>
              {/* <FacebookIcon /> */}
              <Button>heloo</Button>
            </div>
            <div className={styles.twiter}></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signin;
