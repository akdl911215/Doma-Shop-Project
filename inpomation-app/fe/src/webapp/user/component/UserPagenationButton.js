import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserCurrentPageLocation } from "webapp/reducers/user.reducer";
import { Pagination } from "semantic-ui-react";

const UserPagenationButton = ({ totalPages, deaultPage }) => {
  const dispatch = useDispatch();
  console.log(`totalPages: ${totalPages}`);

  const [page, setPage] = useState([]);
  // const { pageNumber } = useSelector(({ UserReducer }) => ({
  //   pageNumber: UserReducer?.UserPageListInitial?.pageResult?.paging?.page,
  // }));
  // console.log("pageNumber :::: ", pageNumber);

  const handleChange = (e) => {
    dispatch(UserCurrentPageLocation(e.target.text));

    // alert(sessionStorage.getItem("pageNumber"));
    console.log(
      "pageNumber ::::::: ",
      typeof sessionStorage.getItem("pageNumber")
    );
    if (sessionStorage.getItem("pageNumber") === "1") {
      alert(sessionStorage.getItem("pageNumber"));
    }
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
