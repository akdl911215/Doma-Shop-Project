import React from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router";

const HomeButtonComponent = () => {
  const navigate = useNavigate();

  const goHomeButton = () => {
    navigate("/");
  };
  return (
    <>
      <Button onClick={goHomeButton} color="black">
        홈으로
      </Button>
    </>
  );
};
export default HomeButtonComponent;
