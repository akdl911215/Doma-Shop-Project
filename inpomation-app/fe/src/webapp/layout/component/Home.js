import React, { useEffect } from "react";
import "webapp/layout/style/Home.css";
import InvestingInfomationList from "../../investing-infomation/component/InvestingInfomationList";
import Header from "./Header";
import Footer from "./Footer";
import YoutubeHome from "../../youtube-upload/component/Home";

const Home = () => {
  useEffect(() => {
    sessionStorage.removeItem("currentPage");
    sessionStorage.removeItem("signinPage");
  }, []);
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
