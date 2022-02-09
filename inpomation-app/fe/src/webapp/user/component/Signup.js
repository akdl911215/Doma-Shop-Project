import React, { useCallback, useState } from "react";
import { Button, Form, Input, Container } from "semantic-ui-react";

import { useNavigate } from "react-router-dom";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import styles from "../style/UserSignup.module.css";
import { client } from "webapp/api/Client";

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

  const { username, password, name, address, email, phoneNumber } = signup;

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
    // e.preventDefault();
    // e.stopPropagation();

    alert("회원가입 버튼 누름");

    client
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

    navigate("/users_signin");
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
              name="username"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="비밀번호"
              name="password"
              placeholder="PASSWORD"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="이름"
              name="name"
              placeholder="성함"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="주소"
              name="address"
              placeholder="ADDRESS"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="이메일"
              name="email"
              placeholder="E-MAIL"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="핸드폰번호"
              name="phoneNumber"
              placeholder="PHONENUMBER"
              onChange={handleChange}
            />
          </Form.Group>
          <div>
            <div className={styles.ButtonStyle}>
              <Form.Field secondary control={Button} onClick={handleSubmit}>
                회원가입
              </Form.Field>
            </div>
            <div className={styles.ButtonStyle}>
              <GoHomeButton />
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};
export default Signup;
