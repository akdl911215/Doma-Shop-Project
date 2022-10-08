import React, { useRef, useState } from "react";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { UserSearchList } from "webapp/reducers/user.reducer";
import styles from "webapp/user/style/UserPageSearch.module.css";
import { UserListSearchDataAPI } from "webapp/api/userApi";

const UserPageSearch = () => {
  const dispatch = useDispatch();

  const [options, setOptions] = useState("unaep");
  const [search, setSearch] = useState("");

  const searchPage = () => {
    UserListSearchDataAPI({
      type: options,
      keyword: search,
    }).then((res) => dispatch(UserSearchList(res?.data?.searchUsersList)));
    console.log(`${[options]}:${search}`);
  };

  return (
    <>
      <select
        type="text"
        className={styles.selectBoxStyle}
        onChange={(e) => setOptions(e.target.value)}
      >
        <option value="unaep">통합검색</option>
        <option value="u">아이디</option>
        <option value="n">이름</option>
        <option value="e">이메일</option>
        <option value="a">주소</option>
        <option value="p">핸드폰번호</option>
        <option value="r">권한</option>
      </select>
      <input
        type="text"
        name="keyword"
        placeholder="검색어를 입력하세요"
        className={styles.inputBoxStyle}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={(e) => searchPage(e)}>검색</Button>
    </>
  );
};

export default UserPageSearch;
