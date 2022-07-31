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

      {/* <Menu vertical style={style.menu}>
        <Menu.Item name="home">
          <Label color="blue">1</Label>
          대시 보드
        </Menu.Item>

        <Dropdown item text="주차 현황">
          <Dropdown.Menu>
            <Dropdown.Item name="groupSale">할인권 그룹 관리</Dropdown.Item>
            <Dropdown.Item name="sellGroupSale">
              할인권 판매 관리(수동)
            </Dropdown.Item>
            <Dropdown.Item name="regularDisCount">
              정기 차량 할인 관리
            </Dropdown.Item>
            <Dropdown.Item name="regularCouponGroupManagement">
              정기권 그룹 관리
            </Dropdown.Item>
            <Dropdown.Item name="regularCouponUserMagement">
              정기권 사용자 관리
            </Dropdown.Item>
            <Dropdown.Item name="longTermUnusedRegularCouponManagement">
              장기 미사용 정기권 관리
            </Dropdown.Item>
            <Dropdown.Item name="blackListManagement">
              블랙리스트 관리
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text="출입 현황">
          <Dropdown.Menu>
            <Dropdown.Item>입출차 내역 조회</Dropdown.Item>
            <Dropdown.Item>미출차 현황 조회</Dropdown.Item>
            <Dropdown.Item>오인식 현황 관리</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text="통계 현황">
          <Dropdown.Menu>
            <Dropdown.Item>일일 정산 현황</Dropdown.Item>
            <Dropdown.Item>신용카드 결제현황</Dropdown.Item>
            <Dropdown.Item>총 판매 현황</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text="설정">
          <Dropdown.Menu>
            <Dropdown.Item>현장 할인 그룹 관리</Dropdown.Item>
            <Dropdown.Item>휴일 관리</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text="ADMIN">
          <Dropdown.Menu>
            <Dropdown.Item>주차장 관리</Dropdown.Item>
            <Dropdown.Item>주차장 운영자 관리</Dropdown.Item>
            <Dropdown.Item>주차장 장비 관리</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu> */}
    </>
  );
};
export default AdminMain;
