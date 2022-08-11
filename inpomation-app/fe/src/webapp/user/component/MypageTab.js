import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab } from "semantic-ui-react";
import Mypage from "webapp/user/component/Mypage";
import Portfolio from "webapp/user/component/Portfolio";

const MypageTab = () => {
  const navigate = useNavigate();
  const [rolesCheck, setRolesCheck] = useState(null);
  useEffect(() => {
    setRolesCheck(sessionStorage.getItem("roles"));
  }, []);
  const panes = [
    {
      menuItem: "포트폴리오 관리",
      render: () => (
        <Tab.Pane attached="bottom">
          <Portfolio />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "회원 정보 수정",
      render: () => (
        <Tab.Pane attached="bottom">
          <Mypage />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "홈으로",
      render: (e) => {
        alert("메인페이지로 이동합니다.");
        navigate("/");
      },
    },
  ];

  return (
    <>
      <Tab
        menu={{ attached: "top" }}
        panes={rolesCheck === null ? panes.filter((el, key) => key < 1) : panes}
      />
    </>
  );
};
export default MypageTab;
