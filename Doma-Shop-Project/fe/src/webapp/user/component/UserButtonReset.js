import React from "react";
import { useDispatch } from "react-redux";
import { fetchPage } from "webapp/user/reducer/user.reducer";

const UserButtonReset = () => {
  const dispatch = useDispatch();
  const runReset = () => {
    dispatch(fetchPage(1));
  };

  return (
    <>
      <button className="usersPageResetBtn" onClick={() => runReset()}>
        Reset
      </button>
    </>
  );
};
export default UserButtonReset;
