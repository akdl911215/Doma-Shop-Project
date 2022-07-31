import React from "react";
import "webapp/layout/style/Home.css";
import InvestingInfomationList from "../../investing-infomation/component/InvestingInfomationList";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <InvestingInfomationList />
      {/* <Footer /> */}
    </>
  );
};
export default Home;
