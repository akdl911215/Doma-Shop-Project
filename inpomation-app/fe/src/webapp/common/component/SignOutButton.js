import React from "react";
import { Button } from "semantic-ui-react";

const SignOutButton = () => {
  return (
    <>
      <Button
        secondary
        onClick={() => {
          alert("로그아웃을 진행합니다");
          sessionStorage.removeItem("jwtToken");
          sessionStorage.removeItem("roles");
          window.location.reload();
        }}
      >
        로그아웃
      </Button>
    </>
  );
};
export default SignOutButton;
