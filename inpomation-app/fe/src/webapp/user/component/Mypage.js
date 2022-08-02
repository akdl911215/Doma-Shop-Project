import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import { Button, Form, Input, Container } from "semantic-ui-react";
import styles from "../style/MyPage.module.css";
import MypageTab from "./MypageTab";

const Mypage = () => {
  const history = useNavigate();

  useEffect(() => {
    // dispatch(getLocalUserLogin());
  });

  // const [mypage, setMypage] = useState({
  //   userId: userState.userId,
  //   username: userState.username,
  //   password: "",
  //   name: userState.name,
  //   companyName: "",
  //   companyNumber: "",
  //   address: "",
  //   email: "",
  //   number: "", //일반전화
  //   phoneNumber: "",
  // });

  const goMypage = async (e) => {
    let mypageResult = window.confirm("정보를 수정하시겠습니까?");

    // const obj = {
    //   userId: userState.userId,
    //   username: userState.username,
    //   password: mypage.password,
    //   name: userState.name,
    //   companyName: mypage.companyName,
    //   companyNumber: mypage.companyNumber,
    //   address: mypage.address,
    //   email: mypage.email,
    //   number: mypage.number, //일반전화
    //   phoneNumber: mypage.phoneNumber,
    // };

    // console.log("obj :::::: ", obj);

    if (mypageResult) {
      alert("수정을 완료하셨습니다.");
      // dispatch(reviseMypage(obj));
    }
  };

  const handleChange = useCallback((e) => {
    // const { name, value } = e.target;
    // setMypage({
    //   ...mypage,
    //   [name]: value,
    // });
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
