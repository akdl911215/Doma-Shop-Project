import React from "react";
import { useDispatch } from "react-redux";
import { UserCurrentPageLocation } from "webapp/reducers/user.reducer";
import { Pagination } from "semantic-ui-react";

const UserPagenationButton = ({ totalPages }) => {
  const dispatch = useDispatch();

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
        onPageChange={(e) => dispatch(UserCurrentPageLocation(e.target.text))}
      />
    </>
  );
};
export default UserPagenationButton;
