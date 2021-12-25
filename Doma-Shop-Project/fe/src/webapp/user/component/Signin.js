import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import betazon from "webapp/images/betazon.png";
import "webapp/user/style/UserSignin.css";
import { signinPage } from "webapp/user/reducer/user.reducer";
import { useNavigate } from "react-router";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Checkbox,
  Input,
  ButtonOr,
} from "semantic-ui-react";
import SigninButtonComponent from "webapp/common/component/SigninButtonComponent";
import SignupButtonComponent from "webapp/common/component/SignupButtonComponent";

const Signin = () => {
  const [inputID, setInputID] = useState("");
  const changeInputID = (e) => {
    setInputID(e.target.value);
  };

  const [signin, setSignin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goSignin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(signinPage(signin));
    // navigate.push('/');
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
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
            <img src={betazon} alt="betazon_logo" className="betazonLogo" />
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={changeInputID}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <div>
                <SigninButtonComponent />
                <SignupButtonComponent />
              </div>
            </Segment>
          </Form>
          <Message>
            회원가입이 안됬나요? <a href="#">회원가입</a>
          </Message>
        </Grid.Column>
      </Grid>
      );
    </>
  );
};
export default Signin;
