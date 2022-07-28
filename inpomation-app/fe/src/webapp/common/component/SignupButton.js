import React from "react";
import { useNavigate } from "react-router";
import { Button } from "semantic-ui-react";

const SignupButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button secondary onClick={() => navigate("/users_signup")}>
        회원가입
      </Button>
    </>
  );
};
export default SignupButton;
