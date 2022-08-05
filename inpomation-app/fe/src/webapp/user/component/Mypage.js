import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import { Button, Form, Input, Container } from "semantic-ui-react";
import styles from "../style/MyPage.module.css";
import {
  UserAuthDataAPI,
  UserModifyDataAPI,
  UserInquiryDataAPI,
} from "webapp/api/userApi";

const Mypage = () => {
  const navigate = useNavigate();
  const [mypage, setMypage] = useState({
    address: "",
    email: "",
    id: 0,
    name: "",
    password: "",
    phone_number: "",
    roles: "",
    salt: "",
    username: "",
  });
  useEffect(() => {
    UserAuthDataAPI(
      sessionStorage.getItem("jwtToken"),
      sessionStorage.getItem("roles")
    )
      .then((res) => {
        if (res?.data?.message === "토큰이 정상입니다.") {
          UserInquiryDataAPI(sessionStorage.getItem("username"))
            .then((res) => setMypage(res?.data))
            .catch((err) => console.error(`mypage inquiry error : ${err}`));
        } else {
          alert("다시 로그인을 시도하세요.");
          navigate("/users_signin");
        }
      })
      .catch((err) => console.error(`mypage auth error : ${err}`));
  }, []);

  const userModify = (e) => {
    let mypageResult = window.confirm("정보를 수정하시겠습니까?");

    if (mypageResult) {
      UserModifyDataAPI(mypage).then((res) => {
        if (res?.data?.message === "회원 정보 수정이 완료되었습니다.")
          window.location.reload();
        else alert("회원 정보 수정이 실패되었습니다.");
      });
    }
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setMypage({
      ...mypage,
      [name]: value,
    });
  });

  return (
    <>
      <Container>
        <h2>회원 정보 수정</h2>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="아이디"
              value={mypage.username}
              name="username"
              onChange={handleChange}
              readOnly
            ></Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="이름"
              name="name"
              value={mypage.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="주소"
              name="address"
              value={mypage.address}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="이메일"
              name="email"
              value={mypage.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="핸드폰번호"
              name="phoneNumber"
              value={mypage.phone_number}
              onChange={handleChange}
            />
          </Form.Group>
          <div>
            <div className={styles.ButtonStyle}>
              <Form.Field secondary control={Button} onClick={userModify}>
                정보 수정
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
export default Mypage;
