import React, { useCallback, useState } from "react";
import { Button, Form, Input, Container } from "semantic-ui-react";
import GoHomeButton from "../../common/component/GoHomeButton";
import styles from "../style/UserSignup.module.css";
import { UserEmailAuthDataAPI, UserSignupDataAPI } from "../../api/userApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signup, setSignup] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
  });

  const [emailAuthBool, setEmailAuthBool] = useState({
    bool: false,
    number: 0,
    emailCheck: 0,
  });
  const navigate = useNavigate();

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      let input = "";
      name === "phoneNumber"
        ? (input = value.replace(/[^0-9]/g, ""))
        : (input = value);

      setSignup({
        ...signup,
        [name]: input,
      });
    },
    [signup]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const result = window.confirm("회원가입을 진행하시겠습니까?");

    if (result) {
      alert("회원가입 완료");
      signup.roles = "USER";
      console.log("signup : ", signup);

      UserSignupDataAPI(signup);
      navigate("/users_signin");
    }
  };

  const emailAuth = () => {
    // emailAuthBool true 면 이메일 인증 완료
    UserEmailAuthDataAPI({
      email: signup.email,
    })
      .then((res) => {
        if (res?.data?.code === 200) {
          setEmailAuthBool({
            ...emailAuthBool,
            number: res?.data?.number,
          });
        }
      })
      .catch((err) => console.error("email auth error : ", err));
  };

  const emailCheck = () => {
    if (emailAuthBool.number === Number(emailAuthBool.emailCheck)) {
      setEmailAuthBool({
        ...emailAuthBool,
        bool: true,
      });
    }
  };

  const emailHandleChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setEmailAuthBool({
        ...emailAuthBool,
        [name]: value,
      });
    },
    [emailAuthBool]
  );

  const goSignup = () => {
    if (signup.username === "") {
      alert("아이디를 입력하세요.");
    } else if (signup.password === "") {
      alert("비밀번호를 입력하세요.");
    } else if (signup.confirmPassword === "") {
      alert("비밀번호 확인을 입력하세요.");
    } else if (signup.password !== signup.confirmPassword) {
      alert("비밀번호와 비밀번호 확인의 값이 다릅니다.");
    } else if (signup.name === "") {
      alert("이름을 입력하세요.");
    } else if (signup.address === "") {
      alert("주소를 입력하세요.");
    } else if (signup.email === "") {
      alert("이메일을 입력하세요.");
    } else if (emailAuthBool.bool === false) {
      alert("이메일 인증이 필요합니다.");
    } else if (signup.phoneNumber === "") {
      alert("핸드폰 번호를 입력하세요.");
    }
  };

  return (
    <>
      <div className={styles.signupContiner}>
        <div className={styles.title}>
          <span className={styles.titleText}>SignUp</span>
        </div>
        <div className={styles.signupBody}>
          <span>아이디</span>
          <input
            name="username"
            placeholder="아이디를 입력하세요"
            className={styles.signupInput}
            onChange={handleChange}
          ></input>
          <span>비밀번호</span>
          <input
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            className={styles.signupInput}
            onChange={handleChange}
          ></input>
          <span>비밀번호 확인</span>
          <input
            name="confirmPassword"
            type="confirmPassword"
            placeholder="비밀번호를 입력하세요"
            className={styles.signupInput}
            onChange={handleChange}
          ></input>
          <span>이름</span>
          <input
            name="name"
            placeholder="이름을 입력하세요"
            className={styles.signupInput}
            onChange={handleChange}
          ></input>
          <span>주소</span>
          <input
            name="address"
            placeholder="주소를 입력하세요"
            className={styles.signupInput}
            onChange={handleChange}
          ></input>
          <span>E-mail</span>
          <input
            name="email"
            placeholder="E-mail 입력하세요"
            className={styles.signupInput}
            onChange={handleChange}
          ></input>
          {!emailAuthBool.bool ? (
            <button onClick={emailAuth}>이메일 인증</button>
          ) : (
            <button disabled={emailAuthBool.bool}>인증 완료</button>
          )}
          <span>E-mail 확인</span>
          <input
            name="emailCheck"
            placeholder="인증번호를 입력하세요"
            className={styles.signupInput}
            onChange={emailHandleChange}
            disabled={emailAuthBool.bool}
          ></input>
          <button onClick={emailCheck} disabled={emailAuthBool.bool}>
            인증번호 확인
          </button>
          <span>핸드폰 번호</span>
          <input
            name="phoneNumber"
            placeholder="핸드폰 번호를 입력하세요"
            className={styles.signupInput}
            onChange={handleChange}
          ></input>
          <div>
            <div className={styles.buttonStyle}>
              <Form.Field
                secondary
                control={Button}
                onClick={emailAuthBool.bool === false ? goSignup : handleSubmit}
              >
                회원가입
              </Form.Field>
            </div>
            <div className={styles.buttonStyle}>
              <GoHomeButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
