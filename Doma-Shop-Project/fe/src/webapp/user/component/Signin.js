import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import betazon from "webapp/images/betazon.png";
import "webapp/user/style/UserSignin.css";
import { signinPage } from "webapp/user/reducer/user.reducer";

const Signin = () => {
  const [signin, setSignin] = useState({
    username: "",
    password: "",
  });

  const history = useNavigate();
  const dispatch = useDispatch();

  const goSignin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(signinPage(signin));
    // history.push('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignin({
      ...signin,
      [name]: value,
    });
  };

  return (
    <>
      <div className="headerLoginFrom">
        <h2>로그인(Login)</h2>
      </div>

      <div className="imgcontainer">
        <img src={betazon} alt="betazon_logo" className="betazonLogo" />
      </div>
      <div className="container">
        <label htmlFor="username">
          <b>ID</b>
        </label>
        <input
          type="text"
          style={{ color: "black" }}
          placeholder="Enter Username"
          name="username"
          value={signin.username || ""}
          onChange={handleChange}
        />

        <label htmlFor="password">
          <b>비밀번호</b>
        </label>
        <input
          type="password"
          style={{ color: "black" }}
          placeholder="Enter Password"
          name="password"
          value={signin.password || ""}
          onChange={handleChange}
        />

        <button type="submit" className="userBtn" onClick={(e) => goSignin(e)}>
          Login
        </button>
      </div>

      <div>
        <Link to="/">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
        </Link>
      </div>

      <span className="psw">
        Forgot <a href="#">password?</a>
      </span>
    </>
  );
};
export default Signin;
