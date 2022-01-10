import React, { Fragment } from "react";
import "./App.css";
import Signup from "webapp/user/component/Signup";
import Signin from "webapp/user/component/Signin";
import Mypage from "webapp/user/component/Mypage";
import UserWithdrawal from "webapp/user/component/UserWithdrawal";
import AdminMain from "webapp/admin/component/AdminMain";
import NoticeList from "webapp/notice/component/NoticeList";
import NoticeModify from "webapp/notice/component/NoticeModify";
import NoticeRead from "webapp/notice/component/NoticeRead";
import NoticeRegister from "webapp/notice/component/NoticeRegister";
import ProductInfomationList from "webapp/prodeuct-infomatin/component/ProductInfomationList";
import ProductInfomationModify from "webapp/prodeuct-infomatin/component/ProductInfomationModify";
import ProductInfomationRegister from "webapp/prodeuct-infomatin/component/ProductInfomationRegister";
import ProductInfomationReview from "webapp/prodeuct-infomatin/component/ProductInfomationReview";
import ProductInfomationTab from "webapp/prodeuct-infomatin/component/ProductInfomationTab";
import ProductInfomationRead from "webapp/prodeuct-infomatin/component/ProductInfomationRead";

import { Route, Routes } from "react-router-dom";
// import { StaticRouter } from "react-router-dom/server";
import UserPageList from "webapp/user/component/UserPageList";
import { Home } from "webapp/common/index";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Link to="/">Home</Link> */}
        <Route path="/" element={<ProductInfomationTab />} />

        <Route path="/admin_main" element={<AdminMain />} />

        <Route path="/users_signup" element={<Signup />} />
        <Route path="/users_signin" element={<Signin />} />
        <Route path="/users_list" element={<UserPageList />} />
        <Route path="/users_mypage" element={<Mypage />} />
        <Route path="/users_withdrawal" element={<UserWithdrawal />} />

        <Route path="/notice_list" element={<NoticeList />} />
        <Route path="/notice_register" element={<NoticeRegister />} />
        <Route path="/notice_read" element={<NoticeRead />} />
        <Route path="/notice_modify" element={<NoticeModify />} />

        <Route
          path="/product_infomation_modify"
          element={<ProductInfomationModify />}
        />
        <Route
          path="/product_infomation_list"
          element={<ProductInfomationList />}
        />
        <Route
          path="/product_infomation_register"
          element={<ProductInfomationRegister />}
        />
        <Route
          path="/product_infomation_read"
          element={<ProductInfomationRead />}
        />
        <Route
          path="/product_infomation_review"
          element={<ProductInfomationReview />}
        />
        <Route
          path="/product_infomation_tab"
          element={<ProductInfomationTab />}
        />
      </Routes>
    </>
  );
};

export default App;
