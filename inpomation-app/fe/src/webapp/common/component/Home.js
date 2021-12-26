import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "webapp/common/style/Home.css";
import { ProductInfomationList } from "webapp/prodeuct-infomatin";

const Home = () => {
  return (
    <>
      <ProductInfomationList />
    </>
  );
};
export default Home;
