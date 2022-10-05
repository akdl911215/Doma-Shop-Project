import React, { useCallback, useState } from "react";
import { Button, Form, Input, Container } from "semantic-ui-react";
import GoHomeButton from "../../common/component/GoHomeButton";
import styles from "../style/UserSignup.module.css";
import { UserSignupDataAPI } from "../../api/userApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signup, setSignup] = useState({
    username: "",
    password: "",
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();

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

  return (
    <>
      <div className={styles.signupContiner}>
        <div className={styles.title}>
          <span className={styles.titleText}>SignUp</span>
        </div>
        <div className={styles.signupBody}>
          <span>아이디</span>
          <input
            placeholder="아이디를 입력하세요"
            className={styles.signupInput}
          ></input>
          <span>비밀번호</span>
          <input
            placeholder="비밀번호를 입력하세요"
            className={styles.signupInput}
          ></input>
          <span>이름</span>
          <input
            placeholder="이름을 입력하세요"
            className={styles.signupInput}
          ></input>
          <span>주소</span>
          <input
            placeholder="주소를 입력하세요"
            className={styles.signupInput}
          ></input>
          <span>E-mail</span>
          <input
            placeholder="E-mail 입력하세요"
            className={styles.signupInput}
          ></input>
          <span>핸드폰 번호</span>
          <input
            placeholder="핸드폰 번호를 입력하세요"
            className={styles.signupInput}
          ></input>
        </div>
      </div>
      {/* <div>
          <div className={styles.buttonStyle}>
            <Form.Field secondary control={Button} onClick={handleSubmit}>
              회원가입
            </Form.Field>
          </div>
          <div className={styles.buttonStyle}>
            <GoHomeButton />
          </div>
        </div> */}
    </>
  );
};
export default Signup;
