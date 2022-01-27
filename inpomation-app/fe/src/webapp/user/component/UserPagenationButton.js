import React from "react";
import { useDispatch } from "react-redux";
import { UserCurrentPageLocation } from "webapp/reducers/user.reducer";

const UserPagenationButton = ({
  pageList,
  page,
  start,
  end,
  prev,
  next,
  type = "",
  keyword = "",
}) => {
  console.log("pageList : ", pageList);
  console.log("page : ", page);
  console.log("start : ", start);
  console.log("end : ", end);
  console.log("prev : ", prev);
  console.log("next : ", next);
  console.log("type : ", type);
  console.log("keyword : ", keyword);

  const dispatch = useDispatch();
  const movePage = (page) => {
    const param = { page: page, keyword: keyword, type: type };
    console.log("param : ", param);
    dispatch(UserCurrentPageLocation(param));
  };

  const list = pageList?.map((i) => (
    <button key={i} className="userPageListBtn" onClick={() => movePage(i)}>
      {i}
    </button>
  ));
  console.log("list : ", list);

  return (
    <>
      {prev ? (
        <button className="pageListBtn" onClick={() => movePage(start - 1)}>
          prev
        </button>
      ) : (
        <></>
      )}
      {list}
      {next ? (
        <button className="pageListBtn" onClick={() => movePage(end + 1)}>
          next
        </button>
      ) : (
        <></>
      )}
    </>
  );
};
export default UserPagenationButton;
