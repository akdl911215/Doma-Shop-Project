import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import // reviseMypage,
// getLocalUserLogin,
"webapp/user/reducer/user.reducer";
import UserWithdrawal from "./UserWithdrawal";

const Mypage = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  // const userState = useSelector((state) => state.users.usersState);
  // console.log("userState : ", userState);
  // console.log("userState.userId : ", userState.userId);

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

  // 메모제이션이란 계산된 값을 자료구조에 저장하고 이후 같은 계산을 반복하지 않고 자료구조에서
  // 꺼내 재사용하는 것을 말한다

  // useCallback : 렌더링 성능 최적화를 위한 훅
  // 훅은 전달된 콜백 함수를 메모제이션하여 반환하고, 이 함수는
  // 오직 의존하는 상태값이 변경된 경우에만 갱신된다
  const handleChange = useCallback(
    (e) => {
      // const { name, value } = e.target;
      // setMypage({
      //   ...mypage,
      //   [name]: value,
      // });
    },
    [] // [] 상태값이 변경된 경우에만 다시 생성
    // 빈배열을 넣으면 어떤 상태값에도 반응하지않으며,
    // 두번째 인자로 아무것도 넣지 않으면 모든 상태 변화에 반응
  );

  return (
    <>
      <form>
        {" "}
        {/* 정보를 제출하기 위한 대화형 커트롤을 포함하는 문서 구획을 나타냄 */}
        <div className="mypageContainer">
          <h2>마이 페이지</h2>
          <hr />
          {/* 이야기 장면 전환, 구획 내 주제 변경 등, 문단 레벨 요소에서 주제의 분리를 나타냄 */}
        </div>
        <form>
          <label htmlFor="userId">
            <b>유저번호</b>
          </label>
          <br />
          <input
            type="userId"
            name="userId"
            // value={userState.userId}
            disabled
          />
          <br />
          <br />
          <label htmlFor="username">
            <b>아이디</b>
          </label>
          <br />
          <input
            type="text"
            name="username"
            // value={userState.username}
            disabled
          />
          <br />
          <br />

          <label htmlFor="password">
            <b>비밀번호</b>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            // value={mypage.password}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="name">
            <b>이름</b>
          </label>
          <br />
          <input
            type="text"
            name="name"
            // value={userState.name}
            disabled
          />
          <br />
          <br />

          <label htmlFor="companyName">
            <b>회사 이름</b>
          </label>
          <input
            type="text"
            placeholder="Enter company name"
            name="companyName"
            // value={mypage.companyName}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="companyNumber">
            <b>사업자번호</b>
          </label>
          <input
            type="text"
            placeholder="Enter company number"
            name="companyNumber"
            // value={mypage.companyNumber}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="address">
            <b>주소</b>
          </label>
          <input
            type="text"
            placeholder="Enter address"
            name="address"
            // value={mypage.address}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="email">
            <b>이메일 주소</b>
          </label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            // value={mypage.email}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="number">
            <b>일반전화</b>
          </label>
          <input
            type="text"
            placeholder="Enter number"
            name="number"
            // value={mypage.number}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="phoneNumber">
            <b>핸드폰번호</b>
          </label>
          <input
            type="text"
            placeholder="Enter phone number"
            name="phoneNumber"
            // value={mypage.phoneNumber}
            onChange={(e) => handleChange(e)}
          />

          <button
            type="submit"
            className="updateBtn"
            onClick={(e) => goMypage(e)}
          >
            정보 수정
          </button>
        </form>
        <div>
          <Link to="/">
            <button type="button" className="cancelbtn">
              홈으로
            </button>
          </Link>
        </div>
      </form>
      {/* <div>
                <UserWithdrawal />
            </div> */}
    </>
  );
};
export default Mypage;
