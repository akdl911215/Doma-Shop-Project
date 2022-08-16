import React from "react";
import { useDispatch } from "react-redux";
import { UserCurrentPageLocation } from "webapp/reducers/user.reducer";
import { Pagination } from "semantic-ui-react";

const UserPagenationButton = ({ totalPages }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const boolNum = e.target.text;
    let num = 0;
    if (boolNum < "1") {
      num = 1;
    } else if (boolNum === "⟩") {
      num = Number(sessionStorage.getItem("userList")) + 1;
    } else if (boolNum === "⟨") {
      num = Number(sessionStorage.getItem("userList")) - 1;
    } else {
      num = Number(e.target.text);
    }

    dispatch(UserCurrentPageLocation(num));
  };

  return (
    <>
      <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={totalPages}
        onClick={(e) => handleChange(e)}
      />
    </>
  );
};
export default UserPagenationButton;
