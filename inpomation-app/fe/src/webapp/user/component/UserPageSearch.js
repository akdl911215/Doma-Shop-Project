import React, { useRef } from "react";
import { Input, Select } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { UserCurrentPageLocation } from "webapp/reducers/user.reducer";

const UserPageSearch = () => {
  const dispatch = useDispatch();
  const refType = useRef();
  const refKeyword = useRef();

  const searchOptions = [
    { key: "unaep", value: "unaep", text: "통합검색" },
    { key: "u", value: "u", text: "아이디" },
    { key: "n", value: "n", text: "이름" },
    { key: "a", value: "a", text: "주소" },
    { key: "e", value: "e", text: "이메일" },
    { key: "p", value: "p", text: "핸드폰번호" },
  ];

  const type = searchOptions.value;
  console.log("type : ", type);

  const searchPage = (search) => {
    // const type = refType.current.value;
    // console.log("type : ", type);
    const keyword = refKeyword.current.value;
    const param = { keyword: keyword, type: type };
    console.log("param : ", param);
    dispatch(UserCurrentPageLocation(param));
  };

  return (
    <>
      <Select
        placeholder="검색조건을 선택하세요"
        options={searchOptions}
        // ref={refType}
      />
      <Input
        icon={{ name: "search", circular: true, link: true }}
        placeholder="키워드를 입력하세요"
      />
    </>
  );
};

export default UserPageSearch;
