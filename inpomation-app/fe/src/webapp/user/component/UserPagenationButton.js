import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserCurrentPageLocation } from "webapp/reducers/user.reducer";
import { Pagination } from "semantic-ui-react";

const UserPagenationButton = ({ totalPages, deaultPage }) => {
  const dispatch = useDispatch();
  // console.log(`totalPages: ${totalPages}`);

  // const [page, setPage] = useState(1);
  // const { pageNumber } = useSelector(({ UserReducer }) => ({
  //   pageNumber: UserReducer?.UserPageListInitial?.pageResult?.paging?.page,
  // }));
  // console.log("pageNumber :::: ", pageNumber);

  const handleChange = (e) => {
    console.log("e.target.text  ", e.target.text);
    console.log("typeof e.target.text  ", typeof e.target.text);
    let num = 0;
    const boolNum = Number(e.target.text);
    conso;
    if (boolNum < 1) {
      alert("1");
      num = 1;
    } else if (boolNum === "⟩") {
      alert("2");
      num = boolNum + 1;
    } else if (boolNum === "⟨") {
      alert("3");
      num = boolNum - 1 < 1 ? 1 : boolNum - 1;
    }

    console.log("num :::: ", num);
    dispatch(UserCurrentPageLocation(num));

    // alert(sessionStorage.getItem("pageNumber"));
  };

  // console.log("page :: ", page);
  // dispatch(UserCurrentPageLocation(page + 1));
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
