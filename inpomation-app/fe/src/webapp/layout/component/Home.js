import React from "react";
import "webapp/layout/style/Home.css";
import InvestingInfomationList from "../../investing-infomation/component/InvestingInfomationList";
import Header from "./Header";
import Footer from "./Footer";
import YoutubeRegister from "webapp/youtube-upload/component/YoutubeRegister";

const Home = () => {
  return (
    <>
      <Header />
      <YoutubeRegister />
      <InvestingInfomationList />
      <Footer />
    </>
  );
};
export default Home;
