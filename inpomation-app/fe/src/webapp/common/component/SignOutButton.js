import React from "react";
// import { useNavigate } from "react-router";
import { Button } from "semantic-ui-react";

const SignOutButton = () => {
  // const navigate = useNavigate();
  const clickButton = () => {
    alert("로그아웃을 진행합니다");
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("roles");
    window.location.reload();
  };

  return (
    <>
      <Button secondary onClick={clickButton}>
        로그아웃
      </Button>
    </>
  );
};
export default SignOutButton;
