import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserCurrentPageLocation } from "webapp/reducers/user.reducer";
import { Button } from "semantic-ui-react";

const UserPagenationButton = ({
  pageList,
  page = 1,
  start,
  end,
  prev,
  next,
}) => {
  const dispatch = useDispatch();
  const movePage = (page) => {
    dispatch(UserCurrentPageLocation(page));
  };

  const arr = new Array(pageList);
  let arr2 = [];

  console.log("pageList : ", pageList);
  console.log("page : ", page);
  // arr.length = pageList;
  console.log("arr.length : ", arr.length);
  console.log("arr : ", arr);
  console.log("arr2 : ", arr2);

  const list = arr?.map((el, key) => (
    <Button key={key + 1} onClick={() => movePage(key + 1)}>
      {key + 1}
    </Button>
  ));

  return (
    <>
      {/* {prev ? <Button onClick={() => movePage(start - 1)}>prev</Button> : <></>} */}
      {list}
      {/* {next ? <Button onClick={() => movePage(end + 1)}>next</Button> : <></>} */}
    </>
  );
};
export default UserPagenationButton;
