import React from "react";
import "./App.css";
import Signup from "./webapp/user/component/Signup";
import Signin from "./webapp/user/component/Signin";
import Mypage from "./webapp/user/component/Mypage";
import AdminMain from "./webapp/admin/component/AdminMain";
import NoticeList from "./webapp/notice/component/NoticeList";
import NoticeModify from "./webapp/notice/component/NoticeModify";
import NoticeRead from "./webapp/notice/component/NoticeRead";
import NoticeRegister from "./webapp/notice/component/NoticeRegister";
import InvestingInfomationList from "./webapp/investing-infomation/component/InvestingInfomationList";
import InvestingInfomationModify from "./webapp/investing-infomation/component/InvestingInfomationModify";
import InvestingInfomationRegister from "./webapp/investing-infomation/component/InvestingInfomationRegister";
import InvestingInfomationReview from "./webapp/investing-infomation/component/InvestingInfomationReview";
import InvestingInfomationTab from "./webapp/investing-infomation/component/InvestingInfomationTab";
import InvestingInfomationRead from "./webapp/investing-infomation/component/InvestingInfomationRead";
import { Route, Routes } from "react-router-dom";
import UserPageList from "./webapp/user/component/UserPageList";
import SmokingAreaInGwangjinGu from "webapp/public-data/component/SmokingAreaInGwangjinGu";
import PublicDataList from "webapp/public-data/component/PublicDataList";
import CityAndProvince from "webapp/public-data/component/importAndExportPerformence.js/CityAndProvince";
import CityAndProvinceByItem from "webapp/public-data/component/importAndExportPerformence.js/CityAndProvinceByItem";
import CityAndProvineceByNature from "webapp/public-data/component/importAndExportPerformence.js/CityAndProvineceByNature";
import Home from "webapp/layout/component/Home";
import MypageTab from "webapp/user/component/MypageTab";
import Portfolio from "webapp/user/component/Portfolio";
import Explore from "webapp/youtube-upload/component/Explore";
import YoutubeRegister from "webapp/youtube-upload/component/Register";
import YoutubeBoard from "webapp/youtube-upload/component/board/Board";
import YoutubeMyList from "webapp/youtube-upload/component/MyList";
import YoutubeManagementPage from "webapp/youtube-upload/component/VideoManagementPage";
import EconomicIndexList from "webapp/economicIndex/component/EconomicIndexList";
import EconomicIndexKospi from "webapp/economicIndex/component/KospiIndex";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin_main" element={<AdminMain />} />

        <Route path="/users_signup" element={<Signup />} />
        <Route path="/users_signin" element={<Signin />} />
        <Route path="/users_list" element={<UserPageList />} />
        <Route path="/users_mypage" element={<MypageTab />} />

        <Route path="/notice_list" element={<NoticeList />} />
        <Route path="/notice_register" element={<NoticeRegister />} />
        <Route path="/notice_read" element={<NoticeRead />} />
        <Route path="/notice_modify" element={<NoticeModify />} />

        <Route path="/economic_index_list" element={<EconomicIndexList />} />
        <Route path="/economic_index_kospi" element={<EconomicIndexKospi />} />

        <Route
          path="/investing_infomation_modify"
          element={<InvestingInfomationModify />}
        />
        <Route
          path="/investing_infomation_list"
          element={<InvestingInfomationList />}
        />
        <Route
          path="/investing_infomation_register"
          element={<InvestingInfomationRegister />}
        />
        <Route
          path="/investing_infomation_read"
          element={<InvestingInfomationRead />}
        />
        <Route
          path="/investing_infomation_review"
          element={<InvestingInfomationReview />}
        />
        <Route
          path="/investing_infomation_tab"
          element={<InvestingInfomationTab />}
        />

        <Route path="/data_list" element={<PublicDataList />} />
        <Route
          path="/data_api_smoking_gwangjingu"
          element={<SmokingAreaInGwangjinGu />}
        />
        <Route
          path="/data_list/data_city_and_province"
          element={<CityAndProvince />}
        />
        <Route
          path="/data_list/data_city_and_province_by_item"
          element={<CityAndProvinceByItem />}
        />
        <Route
          path="/data_list/data_city_and_province_by_nature"
          element={<CityAndProvineceByNature />}
        />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/youtube_explore" element={<Explore />} />
        <Route path="/youtube_register" element={<YoutubeRegister />} />
        <Route path="/youtube_board" element={<YoutubeBoard />} />
        <Route path="/youtube_myList" element={<YoutubeMyList />} />
        <Route
          path="/youtube_management_list"
          element={<YoutubeManagementPage />}
        />
      </Routes>
    </>
  );
};

export default App;
