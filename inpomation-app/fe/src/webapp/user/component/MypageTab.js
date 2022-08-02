import React, { useEffect, useState } from "react";
import { Tab } from "semantic-ui-react";
import Mypage from "webapp/user/component/Mypage";
import Portfolio from "webapp/user/component/Portfolio";

const MypageTab = () => {
  const [rolesCheck, setRolesCheck] = useState(null);
  useEffect(() => {
    setRolesCheck(sessionStorage.getItem("roles"));
  }, []);
  const panes = [
    {
      menuItem: "포트폴리오 관리",
      render: () => (
        <Tab.Pane attached="top">
          <Portfolio />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "회원 정보 수정",
      render: () => (
        <Tab.Pane attached="top">
          <Mypage />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <>
      <Tab
        menu={{ attached: "bottom" }}
        panes={rolesCheck === null ? panes.filter((el, key) => key < 1) : panes}
      />
    </>
  );
};
export default MypageTab;
