import React, { useCallback, useState } from "react";
import axios from "axios";
import "webapp/user/style/UserSignup.css";

const Signup = () => {
  const [signup, setSignup] = useState({
    username: "",
    password: "",
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
  });

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
  return (
    <>
      <form action="/users/signup" className="artistSignupHead">
        <div className="container">
          <h2>회원가입(Sign Up)</h2>
          <p>Please fill in this form to create an account.</p>
          <hr />
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

          <div class="clearfix">
            <button type="button" className="cancelbtn" onClick={cancelButton}>
              취소
            </button>
            <button type="submit" className="signupbtn" onClick={handleSubmit}>
              회원가입
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Signup;
