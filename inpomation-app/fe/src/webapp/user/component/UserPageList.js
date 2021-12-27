import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPage } from "webapp/user/reducer/user.reducer";
import UserBtnReset from "./UserButtonReset";
import UserPageListBtn from "./UserPageListButton";
import { Table, Container, Checkbox, Pagination } from "semantic-ui-react";
import UserDeleteButton from "./UserDeleteButton";

const UserPageList = () => {
  const dispatch = useDispatch();
  const pageResult = useSelector((state) => state.users.pageResult);
  console.log("pageResult : ", pageResult);
  const type = useSelector((state) => state.users.type);
  console.log("type : ", type);
  const keyword = useSelector((state) => state.users.keyword);
  console.log("keyword : ", keyword);
  const page = pageResult.page;
  console.log("page : ", page);

  useEffect(() => {
    const param = { type: type, keyword: keyword, page: page };
    dispatch(fetchPage(param));
  }, []);

  const style = {
    UsePageListButtonStyle: {
      float: "right",
    },
    PaginationStyle: {
      paddingTop: "4rem",
      // display: "flex",
      justifyContent: "center",
    },
  };

  const colors = ["blue"];

  return (
    <>
      <Container>
        <div>
          {colors.map((color) => (
            <Table color={color} key={color}>
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
                  <Table.Cell>3</Table.Cell>
                  <Table.Cell>akdl911215</Table.Cell>
                  <Table.Cell>3333</Table.Cell>
                  <Table.Cell>삼정현</Table.Cell>
                  <Table.Cell>서울시 중랑구 상봉중앙로 3길</Table.Cell>
                  <Table.Cell>akdl911215@naver.com</Table.Cell>
                  <Table.Cell>010-5093-9903</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>2</Table.Cell>
                  <Table.Cell>gksrnr2001</Table.Cell>
                  <Table.Cell>2222</Table.Cell>
                  <Table.Cell>이정현</Table.Cell>
                  <Table.Cell>서울시 중랑구 상봉중앙로 2길</Table.Cell>
                  <Table.Cell>akdl911215@naver.com</Table.Cell>
                  <Table.Cell>010-5093-9902</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>akdl20000</Table.Cell>
                  <Table.Cell>1111</Table.Cell>
                  <Table.Cell>일정현</Table.Cell>
                  <Table.Cell>서울시 중랑구 상봉중앙로 1길</Table.Cell>
                  <Table.Cell>akdl911215@naver.com</Table.Cell>
                  <Table.Cell>010-5093-9901</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          ))}
        </div>
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
            siblingRange={1}
            totalPages={10}
          />
        </div>
      </Container>
    </>
  );
};
export default UserPageList;
