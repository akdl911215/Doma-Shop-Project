import React from "react";
import "webapp/layout/style/Home.css";
import InvestingInfomationList from "../../investing-infomation/component/InvestingInfomationList";
import Header from "./Header";
import Footer from "./Footer";
import YoutubeHome from "../../youtube-upload/pages/Home";

const Home = () => {
  return (
    <>
      <Header />
      <YoutubeHome />
      <InvestingInfomationList />
      <Footer />
    </>
  );
};
export default Home;
