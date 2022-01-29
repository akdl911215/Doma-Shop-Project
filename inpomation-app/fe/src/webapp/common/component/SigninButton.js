import React from "react";
import { useNavigate } from "react-router";
import { Button } from "semantic-ui-react";

const SigninButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button positive onClick={() => navigate("/users_signin")}>
        로그인
      </Button>
    </>
  );
};
export default SigninButton;
