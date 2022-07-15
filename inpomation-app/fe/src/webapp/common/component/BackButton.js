import React from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router";

const BackButton = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate(props.link)} color="black">
        뒤로가기
      </Button>
    </>
  );
};
export default BackButton;
