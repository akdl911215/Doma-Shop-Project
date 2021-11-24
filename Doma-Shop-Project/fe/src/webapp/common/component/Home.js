import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "webapp/user/component/Signup";

const Home = () => {
  return (
    <>
      <Router>
        <Signup />
      </Router>
    </>
  );
};
export default Home;
