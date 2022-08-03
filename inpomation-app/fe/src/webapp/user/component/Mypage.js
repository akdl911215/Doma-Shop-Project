import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import { Button, Form, Input, Container } from "semantic-ui-react";
import styles from "../style/MyPage.module.css";
import MypageTab from "./MypageTab";
import {
  UserAuthDataAPI,
  UserUpdateDataAPI,
  UserInquiryDataAPI,
} from "webapp/api/userApi";
import userEvent from "@testing-library/user-event";

const Mypage = () => {
  const history = useNavigate();
  const [mypage, setMypage] = useState({});
  useEffect(() => {
    UserAuthDataAPI(
      sessionStorage.getItem("jwtToken"),
      sessionStorage.getItem("roles")
    )
      .then((res) => {
        UserInquiryDataAPI(sessionStorage.getItem("username"))
          .then((res) => {
            console.log("update res : ", res);
            setMypage(res?.data);
          })
          .catch((err) => console.error(`mypage inquiry error : {err}`));
      })
      .catch((err) => console.error(`mypage auth error : ${err}`));
  }, []);

  console.log("mypage :::: ", mypage);

  const userModify = (e) => {
    let mypageResult = window.confirm("정보를 수정하시겠습니까?");

    const obj = {
      id: mypage.id,
      username: mypage.username,
      password: mypage.password,
      name: mypage.name,
      address: mypage.address,
      email: mypage.email,
      phone_number: mypage.phone_number,
    };

    console.log("obj :::::: ", obj);

    if (mypageResult) {
      alert("수정을 완료하셨습니다.");
      // dispatch(reviseMypage(obj));
    }
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setMypage({
      ...mypage,
      [name]: value,
    });
  }, []);

  const handleSubmit = () => {};

  return (
    <>
      {/* <MypageTab /> */}
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
