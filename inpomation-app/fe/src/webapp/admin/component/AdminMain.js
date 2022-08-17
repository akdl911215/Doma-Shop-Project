import React from "react";
import TopMenuBar from "webapp/layout/component/TopMenuBar";
import AdminChart from "./AdminChart";
import UserNumberOfVists from "./UserNumberOfVists";
import { Container, Menu, Dropdown, Label } from "semantic-ui-react";

const AdminMain = () => {
  const style = {
    UserNumberOfVistsStyle: {
      paddingTop: "5rem",
    },
  };
  return (
    <>
      <TopMenuBar />
      <Container>
        <div style={style.UserNumberOfVistsStyle}>
          <UserNumberOfVists />
          <AdminChart />
        </div>
      </Container>
    </>
  );
};
export default AdminMain;
