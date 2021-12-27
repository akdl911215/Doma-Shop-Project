import React from "react";
import { Button } from "semantic-ui-react";

const UserDeleteButton = () => {
  const userDelete = () => {};
  return (
    <>
      <Button negative onClick={userDelete}>
        회원 탈퇴 시키기
      </Button>
    </>
  );
};
export default UserDeleteButton;
