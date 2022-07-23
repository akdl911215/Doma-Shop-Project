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

import styles from "../style/UserSignin.module.css";

const Signin = () => {
  const navigate = useNavigate();
  const [signin, setSignin] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signin;

  // if (!emailCheck(username)) {
  //   window.alert("이메일 형식이 맞지 않습니다.");
  // }

  // https://velog.io/@mygomi/React-%EC%87%BC%ED%95%91%EB%AA%B0-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-4.-axios%EB%A1%9C-API-%ED%86%B5%EC%8B%A0%ED%95%98%EA%B8%B0-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EB%A9%94%EC%9D%B8-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80

  //https://joonganglib.tistory.com/m/13

  // https://wiki.jjagu.com/?p=273

  const signinButton = () => {
    alert("로그인버튼누름");

    if (username === "" || password === "") {
      window.alert("아이디 또는 비밀번호를 입력해주세요.");
      return;
    }

    UserSigninDataAPI(signin).then((res) => {
      console.log("res : ", res);

      if (res.data.result === "로그인 성공") {
        console.log(
          "encodeURI(res?.data?.token ) :: ",
          encodeURI(res?.data?.token)
        );
        UserPayloadDataAPI({ token: res?.data?.token });
        // navigate("/");
      } else {
        if (res.data.result === "비밀번호 틀렸습니다.")
          window.alert("비밀번호가 틀렸습니다");
        if (res.data.result === "아이디가 틀렸습니다.")
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
