import React, { useEffect } from "react";
import UserBtnReset from "./UserButtonReset";
import { Table, Container, Checkbox, Button } from "semantic-ui-react";
import UserDeleteButton from "./UserDeleteButton";
import { useDispatch, useSelector } from "react-redux";
import { UserCurrentPageLocation } from "webapp/reducers/user.reducer";
import ShowPageNation from "webapp/user/component/UserPagenationButton";
import { useNavigate } from "react-router-dom";
import styles from "../style/UserPageList.module.css";
import UserPageSearch from "./UserPageSearch";
import { UserAuthDataAPI, UserRemoveDataAPI } from "webapp/api/userApi";

const UserPageList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(UserCurrentPageLocation(1));
  }, []);

  const { totalList, end, next, page, pageList, prev, start, total } =
    useSelector(({ UserReducer }) => ({
      total: UserReducer?.UserPageListInitial?.pageResult,
      page: UserReducer?.UserPageListInitial?.pageResult?.paging?.page,
      totalList:
        UserReducer?.UserPageListInitial?.pageResult?.result?.result?.usersList,
      pageList:
        UserReducer?.UserPageListInitial?.pageResult?.result?.pageListCount,
      //
      // end: UserReducer?.UserPageListInitial?.pageResult?.end,
      // next: UserReducer?.UserPageListInitial?.pageResult?.next,
      // prev: UserReducer?.UserPageListInitial?.pageResult?.prev,
      // start: UserReducer?.UserPageListInitial?.pageResult?.start,
    }));

  console.log("total :: ", total);
  console.log("page :: ", page);
  console.log("totalList :: ", totalList);
  console.log("pageList :: ", pageList);

  const sessionRemove = () => {
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("roles");
    navigate("/users_signin");
  };

  const userRemove = (id) => {
    const remove = window.confirm(`회원번호 [ ${id} ] 번 회원 탈퇴시킵니까?`);
    if (remove) {
      UserAuthDataAPI().then((res) => {
        if (res?.data?.code === 200) {
          UserRemoveDataAPI({ userId: id })
            .then((res) => {
              if (res?.data?.result?.code === 200) {
                window.location.reload();
              }
            })
            .catch((err) => console.error("user remove error : ", err));
        } else {
          alert("다시 로그인을 시도하세요.");
          sessionRemove();
        }
      });
    }
  };

  const colors = ["blue"];

  return (
    <>
      <Container>
        {colors.map((color) => (
          <Table color={color} key={color}>
            <div>
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
              {totalList?.map((element, index) => {
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
            </div>
          </Table>
        ))}

        <UserPageSearch />
        <div className={styles.UserPageListButtonStyle}>
          <Button primary onClick={() => navigate("/admin_main")}>
            뒤로가기
          </Button>
          <UserBtnReset />
          {/* <UserDeleteButton /> */}
        </div>
        <div className={styles.PaginationStyle}>
          <ShowPageNation
            // end={end}
            // next={next}
            page={page}
            pageList={pageList}
            // prev={prev}
            // start={start}
          />
        </div>
      </Container>
    </>
  );
};
export default UserPageList;
