import React from "react";
import { useDispatch } from "react-redux";
import { UserCurrentPageLocation } from "webapp/reducers/user.reducer";
import { Pagination } from "semantic-ui-react";
import { YoutubeCurrentPageLocation } from "webapp/reducers/youtube.reducer";
import { InvestingBoardCurrentPageLocation } from "webapp/reducers/investingBoard.reducer";

const PagenationBtn = ({ name, totalPages }) => {
  console.log(`name : ${name}, totalPages : ${totalPages}`);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const boolNum = e.target.text;
    let num = 0;
    if (boolNum < "1") {
      num = 1;
    } else if (boolNum === "⟩") {
      num = Number(sessionStorage.getItem("pageList")) + 1;
    } else if (boolNum === "⟨") {
      num = Number(sessionStorage.getItem("pageList")) - 1;
    } else {
      num = Number(e.target.text);
    }

    if (name === "userPageList") {
      dispatch(UserCurrentPageLocation(num));
    }
    if (name === "videoManagementPage") {
      dispatch(YoutubeCurrentPageLocation(num));
    }
    if (name === "investingBoardPageList") {
      dispatch(InvestingBoardCurrentPageLocation(num));
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
export default PagenationBtn;
