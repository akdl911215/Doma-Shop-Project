import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";

const UserButtonReset = () => {
  const dispatch = useDispatch();
  // const runReset = () => {
  //   dispatch(fetchPage(1));
  // };

  return (
    <>
      {/* <Button primary onClick={() => runReset()}>
       1페이지로 초기화
      </Button> */}
    </>
  );
};
export default UserButtonReset;
