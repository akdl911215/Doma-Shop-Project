import React from "react";
import "./App.css";
import { Signup, Signin, Mypage, UserWithdrawal } from "webapp/user/index";
import {
  NoticeList,
  NoticeModify,
  NoticeRead,
  NoticeRegister,
} from "webapp/notice/index";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import UserPageList from "webapp/user/component/UserPageList";
import { Home } from "webapp/common/index";

const App = () => {
  return (
    <>
      {/* <Router basename="/"> */}
      {/* <ScrollIntoView>
          <ScrollToTop> */}
      <Routes>
        <Route exact path={`/`} element={Home} />
        <Route exact path="/users/users_signup" element={Signup} />
        <Route exact path="/users/users_signin" element={Signin} />
        <Route exact path="/users/users_list" element={UserPageList} />
        <Route exact path="/users/users_mypage" element={Mypage} />
        <Route
          exact
          path="/users/users_withdrawal"
          component={UserWithdrawal}
        />

        <Route exact path="/notice/notice_list" element={NoticeList} />
        <Route
          exact
          path="/notice/notice_register"
          component={NoticeRegister}
        />
        <Route exact path="/notice/notice_read" element={NoticeRead} />
        <Route exact path="/notice/notice_modify" element={NoticeModify} />
      </Routes>
      {/* </ScrollToTop>
        </ScrollIntoView> */}
      {/* </Router> */}
    </>
  );
};

export default App;
