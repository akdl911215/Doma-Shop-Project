import React, { useEffect } from "react";
import UserBtnReset from "./UserButtonReset";
import { Table, Container, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  UserCurrentPageLocation,
  UserSearchList,
} from "webapp/reducers/user.reducer";
import ShowPageNation from "webapp/user/component/UserPagenationButton";
import { useNavigate } from "react-router-dom";
import styles from "../style/UserPageList.module.css";
import UserPageSearch from "./UserPageSearch";
import { UserAuthDataAPI, UserRemoveDataAPI } from "webapp/api/userApi";
import { SessionRemove } from "webapp/common/component/SessionRemove";

const UserPageList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const colors = ["blue"];
  const { totalList, page, pageSize, pageList, pagingList } = useSelector(
    ({ UserReducer }) => ({
      page: UserReducer?.UserPageListInitial?.pageResult?.paging?.page,
      pageSize: UserReducer?.UserPageListInitial?.pageResult?.paging?.pageSize,
      totalList:
        UserReducer?.UserPageListInitial?.pageResult?.result?.result?.usersList,
      pageList:
        UserReducer?.UserPageListInitial?.pageResult?.result?.pageListCount,
      pagingList: UserReducer?.UserSearchListInitial,
    })
  );
  sessionStorage.setItem("userList", page);
  const boolPage = pagingList.length === 0;

  useEffect(() => {
    UserAuthDataAPI().then((res) => {
      if (res?.data?.code === 200) {
        dispatch(UserCurrentPageLocation(1));
      } else {
        alert("다시 로그인을 시도하세요.");
        SessionRemove();
        sessionStorage.setItem("signinPage", "/users_list");
        navigate("/users_signin");
      }
    });
  }, []);

  const userRemove = (id) => {
    const remove = window.confirm(`회원번호 [ ${id} ] 번 회원 탈퇴시킵니까?`);
    if (remove) {
      UserAuthDataAPI().then((res) => {
        if (res?.data?.code === 200) {
          if (sessionStorage.getItem("roles") === "MASTER") {
            UserRemoveDataAPI({ userId: id })
              .then((res) => {
                if (res?.data?.result?.code === 200) {
                  window.location.reload();
                }
              })
              .catch((err) => console.error("user remove error : ", err));
          } else {
            alert("마스터만 회원을 탈퇴시킬 수 있습니다.");
          }
        } else {
          const bool = window.confirm("마스터로 로그인을 시도하시겠습니까?");
          if (bool) {
            SessionRemove();
            sessionStorage.setItem("signinPage", "/users_list");
            navigate("/users_signin");
          }
        }
      });
    }
  };

  return (
    <>
      <Container>
        {colors.map((color) => (
          <Table color={color} key={color}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>회원번호</Table.HeaderCell>
                <Table.HeaderCell>아이디</Table.HeaderCell>

                <Table.HeaderCell>이름</Table.HeaderCell>
                <Table.HeaderCell>주소</Table.HeaderCell>
                <Table.HeaderCell>이메일</Table.HeaderCell>
                <Table.HeaderCell>핸드폰번호</Table.HeaderCell>
                <Table.HeaderCell>권한</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {boolPage
              ? totalList?.map((element, index) => {
                  return (
                    <>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>{element.id}</Table.Cell>
                          <Table.Cell>{element.username}</Table.Cell>
                          <Table.Cell>{element.name}</Table.Cell>
                          <Table.Cell>{element.address}</Table.Cell>
                          <Table.Cell>{element.email}</Table.Cell>
                          <Table.Cell>{element.phone_number}</Table.Cell>
                          <Table.Cell>{element.roles}</Table.Cell>
                          <Table.Cell>
                            <Button
                              onClick={() => userRemove(element.id)}
                              negative
                            >
                              회원 강제 탈퇴 버튼
                            </Button>
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </>
                  );
                })
              : pagingList?.map((element, index) => {
                  return (
                    <>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>{element.id}</Table.Cell>
                          <Table.Cell>{element.username}</Table.Cell>
                          <Table.Cell>{element.name}</Table.Cell>
                          <Table.Cell>{element.address}</Table.Cell>
                          <Table.Cell>{element.email}</Table.Cell>
                          <Table.Cell>{element.phone_number}</Table.Cell>
                          <Table.Cell>{element.roles}</Table.Cell>
                          <Table.Cell>
                            <Button
                              onClick={() => userRemove(element.id)}
                              negative
                            >
                              회원 강제 탈퇴 버튼
                            </Button>
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </>
                  );
                })}
          </Table>
        ))}

        <UserPageSearch />
        <div className={styles.UserPageListButtonStyle}>
          <Button primary onClick={() => navigate("/admin_main")}>
            뒤로가기
          </Button>
          {boolPage ? (
            <UserBtnReset />
          ) : (
            <Button primary onClick={() => dispatch(UserSearchList([]))}>
              검색 초기화
            </Button>
          )}
        </div>
        {boolPage ? (
          <div className={styles.PaginationStyle}>
            <ShowPageNation totalPages={pageList} />
          </div>
        ) : null}
      </Container>
    </>
  );
};
export default UserPageList;
