import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "webapp/common/style/Home.css";
import { InvestingInfomationList } from "webapp/prodeuct-infomatin";

const Home = () => {
  return (
    <>
      <InvestingInfomationList />
    </>
  );
};
export default Home;
