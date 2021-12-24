import React from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router";

const GoBackButtonComponent = ({ name }) => {
  const navigate = useNavigate();

  const goBackButton = () => {
    console.log("name : ", name);

    switch (name) {
      case "ProductInfomationRegister":
        navigate("/product_infomation_list");
        break;

      case "ProductInfomationModify":
        navigate("/product_infomation_read");
        break;

      case "ProductInfomationRead":
        navigate("/product_infomation_list");
        break;

      default:
        navigate("/");
    }
  };

  return (
    <>
      <Button onClick={goBackButton} color="black">
        뒤로가기
      </Button>
    </>
  );
};
export default GoBackButtonComponent;
