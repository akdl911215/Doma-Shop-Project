import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Table, Container, Button } from "semantic-ui-react";
import { UserAuthDataAPI } from "webapp/api/userApi";
import {
  YoutubeDeleteDataAPI,
  YoutubeListDataAPI,
} from "webapp/api/youtubeApi";
import { SessionRemove } from "webapp/common/component/SessionRemove";
import { YoutubeSearchList } from "webapp/reducers/youtube.reducer";
import styles from "../style/VideoManagementPage.module.css";

const VideoManagementPage = () => {
  const colors = ["blue"];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    YoutubeListDataAPI()
      .then((res) => dispatch(YoutubeSearchList(res?.data?.list)))
      .catch((err) =>
        console.error("youtube video management page api error : ", err)
      );
  }, []);

  const { searchList } = useSelector(({ YoutubeReducer }) => ({
    searchList: YoutubeReducer?.YoutubeSearchListInitial,
  }));
  console.log("VideoManagementPage searchList : ", searchList);
  const boolPage = searchList.length === 0;

  const videoDeleteBtn = (video) => {
    console.log("delete video : ", video);

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
            alert("마스터만 비디오를 삭제하시킬 수 있습니다.");
          }
        } else {
          const bool = window.confirm("마스터로 로그인을 시도하시겠습니까?");
          if (bool) {
            SessionRemove();
            sessionStorage.setItem("signinPage", "/youtube_management_list");
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
                <Table.HeaderCell>번호</Table.HeaderCell>
                <Table.HeaderCell>비디오 제목</Table.HeaderCell>
                <Table.HeaderCell>비디오 ID</Table.HeaderCell>
                <Table.HeaderCell>작성자</Table.HeaderCell>
                <Table.HeaderCell>채널 제목</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {boolPage
              ? searchList?.map((element, index) => {
                  return (
                    <>
                      <Table.Body></Table.Body>
                    </>
                  );
                })
              : searchList?.map((element, index) => {
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
        {/* <UserPageSearch /> */}
        <div className={styles.videoPageButtonStyle}>
          <Button primary onClick={() => navigate("/admin_main")}>
            뒤로가기
          </Button>
          {/* {boolPage ? <UserBtnReset /> : <Button primary>검색 초기화</Button>} */}
        </div>
        {/* {boolPage ? (
          <div className={styles.paginationStyle}>
            <ShowPageNation totalPages={pageList} />
          </div>
         ) : null}  */}
      </Container>
    </>
  );
};
export default VideoManagementPage;
