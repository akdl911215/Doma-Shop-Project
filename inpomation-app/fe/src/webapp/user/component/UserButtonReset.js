import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { UserCurrentPageLocation } from "webapp/reducers/user.reducer";

const UserButtonReset = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button primary onClick={() => dispatch(UserCurrentPageLocation(1))}>
        1페이지로 초기화
      </Button>
    </>
  );
};
export default UserButtonReset;
