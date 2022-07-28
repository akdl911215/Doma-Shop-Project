import React, { useState } from "react";
import { Betazon } from "../../images/index";
import { useNavigate } from "react-router";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import SignupButton from "../../common/component/SignupButton";
import { UserSigninDataAPI, UserPayloadDataAPI } from "../../api/userApi";
import SignOutButton from "webapp/common/component/SignOutButton";

import styles from "../style/UserSignin.module.css";

const Signin = () => {
  const navigate = useNavigate();
  const [signin, setSignin] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signin;

  const signinButton = () => {
    alert("로그인버튼누름");

    if (username === "" || password === "") {
      window.alert("아이디 또는 비밀번호를 입력해주세요.");
      return;
    }

    UserSigninDataAPI(signin).then((res) => {
      console.log("res : ", res);

      console.log("res.data.result : ", res.data.result);
      if (res.data.message === "로그인 성공") {
        console.log("성공");
        console.log(
          "localstorage jwtToken : ",
          localStorage.setItem("jwtToken", res?.data?.token)
        );
        console.log(
          "localstorage roles : ",
          localStorage.setItem("roles", res?.data?.roles)
        );
        console.log("시작?");
        UserPayloadDataAPI(res?.data?.token);
        // redux로 권한 가지고 있기? 로컬스토리지?
        // 뭐로할지 알아보기
        // nodejs role-based
        navigate("/");
      } else {
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
      <Grid
        className={styles.SigninGridStyle}
        textAlign="center"
        verticalAlign="middle"
      >
        <Grid.Column className={styles.SigninGridColumnStyle}>
          <Header as="h2" color="blue" textAlign="center">
            <img src={Betazon} alt="betazon_logo" className="betazonLogo" />
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                name="username"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon="lock"
                name="password"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={handleChange}
              />
              <Button secondary onClick={signinButton}>
                로그인
              </Button>
              <SignOutButton />
            </Segment>
          </Form>

          <Message>
            회원가입이 안됬나요?ㅤ <SignupButton />
          </Message>
        </Grid.Column>
      </Grid>
    </>
  );
};
export default Signin;
