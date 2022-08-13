import React, { useEffect, useState } from "react";
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

  const [viewArr, setViewArr] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= pageList; ++i) {
      arr.push(i);
    }
    setViewArr(arr);
  }, []);

  const list = viewArr?.map((el, key) => (
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
