import React, { useState } from "react";
import { Betazon } from "webapp/images/index";
import { useNavigate } from "react-router";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import SignupButton from "webapp/common/component/SignupButton";
import { UserSigninDataAPI } from "webapp/api/UserApi";

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

    UserSigninDataAPI(signin);
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
      );
    </>
  );
};
export default Signin;
