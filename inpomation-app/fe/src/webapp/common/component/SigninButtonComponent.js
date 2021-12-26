import React from "react";
import { useNavigate } from "react-router";
import { Button } from "semantic-ui-react";

const SigninButtonComponent = () => {
  const navigate = useNavigate();

  const signinComponentButton = () => {
    navigate("/users_signin");
  };

  return (
    <>
      <Button positive onClick={signinComponentButton}>
        로그인
      </Button>
    </>
  );
};
export default SigninButtonComponent;
