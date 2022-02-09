import React from "react";
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

  const list = pageList?.map((i) => (
    <Button key={i} onClick={() => movePage(i)}>
      {i}
    </Button>
  ));

  return (
    <>
      {prev ? <Button onClick={() => movePage(start - 1)}>prev</Button> : <></>}
      {list}
      {next ? <Button onClick={() => movePage(end + 1)}>next</Button> : <></>}
    </>
  );
};
export default UserPagenationButton;
