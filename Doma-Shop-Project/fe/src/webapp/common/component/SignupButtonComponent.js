import React from "react";
import { useNavigate } from "react-router";
import { Button } from "semantic-ui-react";

const SignupButtonComponent = () => {
  const navigate = useNavigate();

  const signupComponentButton = () => {
    navigate("/users_signup");
  };

  return (
    <>
      <Button positive onClick={signupComponentButton}>
        회원가입
      </Button>
    </>
  );
};
export default SignupButtonComponent;
