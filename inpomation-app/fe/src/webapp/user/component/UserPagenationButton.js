import React from "react";
import { useDispatch } from "react-redux";
import { UserCurrentPageLocation } from "webapp/reducers/user.reducer";

const UserPagenationButton = ({
  pageList,
  page = 1,
  start,
  end,
  prev,
  next,
  type = "",
  keyword = "",
}) => {
  const dispatch = useDispatch();
  const movePage = (page) => {
    const param = { page: page, keyword: keyword, type: type };
    dispatch(UserCurrentPageLocation(param));
  };

  const list = pageList?.map((i) => (
    <button key={i} onClick={() => movePage(i)}>
      {i}
    </button>
  ));

  return (
    <>
      {prev ? <button onClick={() => movePage(start - 1)}>prev</button> : <></>}
      {list}
      {next ? <button onClick={() => movePage(end + 1)}>next</button> : <></>}
    </>
  );
};
export default UserPagenationButton;
