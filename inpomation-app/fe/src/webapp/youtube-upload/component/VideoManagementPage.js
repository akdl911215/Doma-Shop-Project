import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Table, Container, Button } from "semantic-ui-react";
import { UserAuthDataAPI } from "webapp/api/userApi";
import { YoutubeDeleteDataAPI } from "webapp/api/youtubeApi";
import { SessionRemove } from "webapp/common/component/SessionRemove";
import {
  YoutubeAdminSearchBar,
  YoutubeCurrentPageLocation,
} from "webapp/reducers/youtube.reducer";
import styles from "../style/VideoManagementPage.module.css";
import AdminPageSearchBar from "./searchBar/AdminPageSearchBar";
import ShowPageNation from "webapp/common/component/PagenationBtn";

const VideoManagementPage = () => {
  const colors = ["red"];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchBarList, totalList, pageList } = useSelector(
    ({ YoutubeReducer }) => ({
      searchBarList: YoutubeReducer?.YoutubeAdminSearchBarInitial,
      totalList:
        YoutubeReducer?.YoutubePagenationListInitial?.pagenationList?.result
          ?.pagenationList,
      pageList:
        YoutubeReducer?.YoutubePagenationListInitial?.pagenationList
          ?.pagenationCount,
    })
  );
  const boolPage = searchBarList.length > 0;

  useEffect(() => {
    UserAuthDataAPI().then((res) => {
      if (res?.data?.code === 200) {
        dispatch(YoutubeCurrentPageLocation(1));
      } else {
        const result = window.confirm(
          "재로그인이 필요합니다. 로그인을 진행하시겠습니까?"
        );
        if (result) {
          SessionRemove();
          sessionStorage.setItem("signinPage", "/youtube_management_list");
          navigate("/users_signin");
        } else {
          SessionRemove();
          navigate("/");
        }
      }
    });
  }, []);

  const videoDeleteBtn = (video) => {
    const remove = window.confirm(
      `[ ${video?.title} ] 영상을 삭제하시겠습니까?`
    );

    if (remove) {
      UserAuthDataAPI().then((res) => {
        if (res?.data?.code === 200) {
          if (sessionStorage.getItem("roles") === "MASTER") {
            YoutubeDeleteDataAPI({
              id: video?.id,
            })
              .then((res) => {
                if (res) window.location.reload();
              })
              .catch((err) =>
                console.error("youtube video delete error : ", err)
              );
          } else {
            const bool = window.confirm(
              "삭제권한은 마스터만 가능합니다. 마스터로 로그인을 시도하시겠습니까?"
            );
            if (bool) {
              SessionRemove();
              sessionStorage.setItem("signinPage", "/youtube_management_list");
              navigate("/users_signin");
            }
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
                <Table.HeaderCell>번호</Table.HeaderCell>
                <Table.HeaderCell>비디오 제목</Table.HeaderCell>
                <Table.HeaderCell>비디오 ID</Table.HeaderCell>
                <Table.HeaderCell>작성자</Table.HeaderCell>
                <Table.HeaderCell>채널 제목</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {boolPage
              ? searchBarList?.map((element, index) => {
                  return (
                    <>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>{element.id}</Table.Cell>
                          <Table.Cell>{element.title}</Table.Cell>
                          <Table.Cell>{element.video_id}</Table.Cell>
                          <Table.Cell>{element.username}</Table.Cell>
                          <Table.Cell>{element.channel_title}</Table.Cell>
                          <Table.Cell>
                            <Button
                              negative
                              onClick={() => videoDeleteBtn(element)}
                            >
                              삭제
                            </Button>
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </>
                  );
                })
              : totalList?.map((element, index) => {
                  return (
                    <>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>{element.id}</Table.Cell>
                          <Table.Cell>{element.title}</Table.Cell>
                          <Table.Cell>{element.video_id}</Table.Cell>
                          <Table.Cell>{element.username}</Table.Cell>
                          <Table.Cell>{element.channel_title}</Table.Cell>
                          <Table.Cell>
                            <Button
                              negative
                              onClick={() => videoDeleteBtn(element)}
                            >
                              삭제
                            </Button>
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </>
                  );
                })}
          </Table>
        ))}
        <AdminPageSearchBar />
        <div className={styles.videoPageButtonStyle}>
          <Button primary onClick={() => navigate("/admin_main")}>
            뒤로가기
          </Button>
          {boolPage ? (
            <Button onClick={() => dispatch(YoutubeAdminSearchBar([]))} primary>
              검색 초기화
            </Button>
          ) : (
            <Button
              primary
              onClick={(e) => {
                window.location.reload();
                dispatch(YoutubeCurrentPageLocation(1));
              }}
            >
              1페이지로 초기화
            </Button>
          )}
        </div>
        {boolPage ? null : (
          <div className={styles.paginationStyle}>
            <ShowPageNation name="videoManagementPage" totalPages={pageList} />
          </div>
        )}
      </Container>
    </>
  );
};
export default VideoManagementPage;
