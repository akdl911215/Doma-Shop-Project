import React, { useEffect, useState } from "react";
import ProductInfomationList from "webapp/prodeuct-infomatin/component/InvestingInfomationList";
import { Tab } from "semantic-ui-react";
import Mypage from "webapp/user/component/Mypage";
import Portfolio from "webapp/user/component/Portfolio";
const ProductInfomationTab = () => {
  const [rolesCheck, setRolesCheck] = useState(null);
  useEffect(() => {
    setRolesCheck(localStorage.getItem("roles"));
  }, []);
  const panes = [
    {
      menuItem: "홈",
      render: () => (
        <Tab.Pane attached="top">
          <ProductInfomationList />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "MY",
      render: () => (
        <Tab.Pane attached="top">
          <Mypage />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "포트폴리오 관리",
      render: () => (
        <Tab.Pane attached="top">
          <Portfolio />
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
export default ProductInfomationTab;
