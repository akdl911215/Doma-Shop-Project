import React from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate("/")} color="black">
        홈으로
      </Button>
    </>
  );
};
export default GoBackButton;
