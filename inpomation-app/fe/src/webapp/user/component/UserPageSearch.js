import React, { useRef } from "react";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { UserCurrentPageLocation } from "webapp/reducers/user.reducer";
import styles from "webapp/user/style/UserPageSearch.module.css";

const UserPageSearch = () => {
  const dispatch = useDispatch();
  const refType = useRef();
  const refKeyword = useRef();

  const searchPage = () => {
    const type = refType.current?.value;
    const keyword = refKeyword.current?.value;
    const param = { keyword: keyword, type: type };
    dispatch(UserCurrentPageLocation(param));
  };

  return (
    <>
      <select type="text" className={styles.SelectBoxStyle} ref={refType}>
        <option value="unaep">통합검색</option>
        <option value="u">아이디</option>
        <option value="n">이름</option>
        <option value="a">E-mail</option>
        <option value="e">이메일</option>
        <option value="p">핸드폰번호</option>
      </select>
      <input
        type="text"
        name="keyword"
        ref={refKeyword}
        placeholder="검색어를 입력하세요"
        className={styles.InputBoxStyle}
      />
      <Button onClick={searchPage}>검색</Button>
    </>
  );
};

export default UserPageSearch;
