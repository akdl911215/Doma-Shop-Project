import React, { useCallback, useState } from "react";
import axios from "axios";
import { Button, Form, Input, Container } from "semantic-ui-react";
import { GoBackButtonComponent } from "webapp/common/index";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    username: "",
    password: "",
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
  });

  const colors = ["teal"];

  const { username, password, name, address, email, phoneNumber } = signup;

  const cancelButton = () => {};

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setSignup({
        ...signup,
        [name]: value,
      });
    },
    [signup]
  );
  let signupSucess = false;
  const handleSubmit = (e) => {
    // e.preventDefault();
    // e.stopPropagation();

    alert("회원가입 버튼 누름");

    axios
      .post("http://localhost:8080/users/signup", {
        username: username,
        password: password,
        name: name,
        address: address,
        email: email,
        phoneNumber: phoneNumber,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    navigate.push("/users_signin");
  };

  const [inputID, setInputID] = useState("");
  const changeInputID = (e) => {
    setInputID(e.target.value);
  };

  const style = {
    buttonStyle: {
      float: "right",
    },
    textareatStyle: {
      width: "100%",
    },
  };

  return (
    <>
      <form className="artistSignupHead">
        <div className="container">
          <h2>회원가입(Sign Up)</h2>

          <label htmlFor="username">
            <b>아이디</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            onChange={handleChange}
          />

          <label htmlFor="password">
            <b>비밀번호</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={handleChange}
          />

          <label htmlFor="name">
            <b>이름</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={handleChange}
          />

          <label htmlFor="email">
            <b>E-Mail</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={handleChange}
          />

          <label htmlFor="phoneNumber">
            <b>핸드폰 번호</b>
          </label>
          <input
            type="text"
            placeholder="Enter PhoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
          />

          <label htmlFor="address">
            <b>주소</b>
          </label>
          <input
            type="text"
            placeholder="Enter Address"
            name="address"
            value={address}
            onChange={handleChange}
          />

          <div class="clearfix">
            <button
              type="button"
              className="cancelbtn"
              onClick={(e) => cancelButton(e)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="signupbtn"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>

      {/* <Container>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="아이디"
              placeholder="ID"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="비밀번호"
              placeholder="PASSWORD"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="주소"
              placeholder="ADDRESS"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="이메일"
              placeholder="E-MAIL"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="핸드폰번호"
              placeholder="PHONENUMBER"
              onChange={handleChange}
            />
          </Form.Group>
          <div>
            <div style={style.buttonStyle}>
              <Form.Field secondary control={Button} onClick={handleSubmit}>
                회원가입
              </Form.Field>
            </div>
            <div style={style.buttonStyle}>
              <GoBackButtonComponent />
            </div>
          </div>
        </Form>
      </Container> */}
    </>
  );
};
export default Signup;
