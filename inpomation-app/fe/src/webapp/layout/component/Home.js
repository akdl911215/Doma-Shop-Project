import React, { useEffect } from "react";
import "webapp/layout/style/Home.css";
import InvestingInfomationList from "../../investing-infomation/component/InvestingInfomationList";
import Header from "./Header";
import Footer from "./Footer";
import YoutubeHome from "../../youtube-upload/component/Home";
import InvestingInfomationHome from "../../investing-infomation/component/Home";
import YoutubeLikeTopThreeHome from "../../youtube-upload/component/LikeTopThreeHome";
import { YoutubeLikeScoreUpdateDataAPI } from "webapp/api/youtubeApi";
import EconomicIndexMainList from "webapp/economicIndex/component/Home";

const Home = () => {
  useEffect(() => {
    sessionStorage.removeItem("currentPage");
    sessionStorage.removeItem("signinPage");
    YoutubeLikeScoreUpdateDataAPI()
      .then((res) => console.log("youtube like score update result : ", res))
      .catch((err) => console.error("youtube like score update error : ", err));
  }, []);
  return (
    <>
      <Header />
      <YoutubeHome />
      <YoutubeLikeTopThreeHome />
      <InvestingInfomationHome />
      <EconomicIndexMainList />
      <Footer />
    </>
  );
};
export default Home;
