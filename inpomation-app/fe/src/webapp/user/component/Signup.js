import React, { useCallback, useState } from "react";
import axios from "axios";
import { Button, Form, Input, Container } from "semantic-ui-react";
import { GoBackButtonComponent } from "webapp/common/index";

const Signup = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

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
      <Container>
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
      </Container>
    </>
  );
};
export default Signup;
