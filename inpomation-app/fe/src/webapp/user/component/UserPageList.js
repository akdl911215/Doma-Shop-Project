import React, { useEffect, useState } from "react";
import UserBtnReset from "./UserButtonReset";
import UserPageListBtn from "./UserPageListButton";
import {
  Table,
  Container,
  Checkbox,
  Pagination,
  Input,
} from "semantic-ui-react";
import UserDeleteButton from "./UserDeleteButton";
import { Client } from "webapp/api/Client";

const UserPageList = () => {
  useEffect(() => {
    userListTotalFetch();
  }, []);

  const [userStateList, setUserStateList] = useState([]);
  const userListTotalFetch = () => {
    Client.get("http://localhost:8080/users/list")
      .then((res) => {
        console.log("list fetch res : ", res);
        setUserStateList(res);
      })
      .catch((error) => console.log("lest fetch error : ", error));
  };
  const userTotalList = userStateList?.data?.dtoList;
  const end = userStateList?.data?.end;
  const next = userStateList?.data?.next;
  const page = userStateList?.data?.page;
  const pageList = userStateList?.data?.pageList;
  const prev = userStateList?.data?.prev;
  const size = userStateList?.data?.size;
  const start = userStateList?.data?.start;
  const totalpage = userStateList?.data?.totalPage;
  // console.log("userTotalList : ", userTotalList);

  const style = {
    UsePageListButtonStyle: {
      float: "right",
    },
    PaginationStyle: {
      paddingTop: "4rem",
      textAlign: "center",
    },
  };

  const colors = ["blue"];

  const [activePage, setActivePage] = useState(1);
  console.log("activePage : ", activePage);
  const [apiUrl, setApiUrl] = useState("http://localhost:3000/users_list/");
  console.log("apiUrl : ", apiUrl);
  const pageChangeButtonClick = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
    setApiUrl(
      "http://localhost:3000/users_list/?page=" + activePage.toString()
    );
  };

  return (
    <>
      <Container>
        <div>
          {colors.map((color) => (
            <Table color={color} key={color}>
              {userTotalList?.map((element) => {
                return (
                  <>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>체크박스</Table.HeaderCell>
                        <Table.HeaderCell>유저넘버</Table.HeaderCell>
                        <Table.HeaderCell>아이디</Table.HeaderCell>
                        <Table.HeaderCell>비밀번호</Table.HeaderCell>
                        <Table.HeaderCell>이름</Table.HeaderCell>
                        <Table.HeaderCell>주소</Table.HeaderCell>
                        <Table.HeaderCell>이메일</Table.HeaderCell>
                        <Table.HeaderCell>핸드폰번호</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>
                          <Checkbox />
                        </Table.Cell>
                        <Table.Cell>{element.userno}</Table.Cell>
                        <Table.Cell>{element.username}</Table.Cell>
                        <Table.Cell>{element.password}</Table.Cell>
                        <Table.Cell>{element.name}</Table.Cell>
                        <Table.Cell>{element.address}</Table.Cell>
                        <Table.Cell>{element.email}</Table.Cell>
                        <Table.Cell>{element.phoneNumber}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </>
                );
              })}
            </Table>
          ))}
        </div>
        <Input
          icon={{ name: "search", circular: true, link: true }}
          placeholder="Search..."
        />
        <div style={style.UsePageListButtonStyle}>
          <UserBtnReset />
          <UserDeleteButton />
        </div>
        <div style={style.PaginationStyle}>
          <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={totalpage}
            totalPages={totalpage}
            naxtItem={next}
            onPageChange={pageChangeButtonClick}
          />
        </div>
      </Container>
    </>
  );
};
export default UserPageList;
