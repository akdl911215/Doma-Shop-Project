import React, { Fragment } from "react";
import "./App.css";
import { Signup, Signin, Mypage, UserWithdrawal } from "webapp/user/index";
import { AdminMain } from "webapp/admin/index";
import {
  NoticeList,
  NoticeModify,
  NoticeRead,
  NoticeRegister,
} from "webapp/notice/index";
import {
  ProductInfomationRegister,
  ProductInfomationList,
  ProductInfomationRead,
  ProductInfomationModify,
  ProductInfomationReview,
} from "webapp/prodeuct-infomatin/index";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import { StaticRouter } from "react-router-dom/server";
import UserPageList from "webapp/user/component/UserPageList";
import { Home } from "webapp/common/index";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Link to="/">Home</Link> */}
        <Route path="/" element={<Home />} />

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
      </Routes>
    </>
  );
};

export default App;
