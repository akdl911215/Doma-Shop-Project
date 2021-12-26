import React from "react";
import ProductInfomationList from "webapp/prodeuct-infomatin/component/ProductInfomationList";
import { Tab } from "semantic-ui-react";

const ProductInfomationTab = () => {
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
      render: () => <Tab.Pane attached="top">Tab 2 Content</Tab.Pane>,
    },
    // {
    //   menuItem: "Tab 3",
    //   render: () => <Tab.Pane attached="top">Tab 3 Content</Tab.Pane>,
    // },
  ];

  return (
    <>
      <Tab menu={{ attached: "bottom" }} panes={panes} />
    </>
  );
};
export default ProductInfomationTab;
