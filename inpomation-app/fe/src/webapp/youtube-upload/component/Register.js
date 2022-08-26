import React, { useState } from "react";
import styles from "../style/Register.module.css";
import { Table, Container, Checkbox, Button } from "semantic-ui-react";
import { YoutubeSearchListDataAPI } from "webapp/api/youubeApi";
import { useNavigate } from "react-router-dom";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import ContentsLayout from "./ContentsLayout";
import ExploreCard from "./explore/ExploreCard";

const Register = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  console.log("search : ", search);
  const [data, setData] = useState([]);

  const searchList = () => {
    YoutubeSearchListDataAPI({ q: search }).then((res) => {
      console.log("res : ", res);

      const arr = [];
      for (let i = 0; i < res?.data?.list.length; ++i) {
        const state = {
          id: res?.data?.list[i]?.id?.videoId,
          channelId: res?.data?.list[i]?.snippet?.channelId,
          title: res?.data?.list[i]?.snippet?.title,
          thumbnail: res?.data?.list[i]?.snippet?.thumbnails?.default,
          description: res?.data?.list[i]?.snippet?.description,
          channelTitle: res?.data?.list[i]?.snippet?.channelTitle,
          viewCount: "",
          likeCount: "",
          channelUrl: "",
          channelThumbnail: "",
          date: "",
        };
        arr.push(state);
      }
      console.log("arr : ", arr);
      setData(arr);
    });
    console.log("data :: ", data);
  };
  return (
    <>
      <div>
        <input
          placeholder="유튜브 제목을 검색하세요"
          className={styles.youtubeSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchList} className={styles.searchButton}>
          검색
        </button>
      </div>

      <Container className={styles.container}>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>데이타 번호</Table.HeaderCell>
              <Table.HeaderCell>데이타 이름</Table.HeaderCell>
              <Table.HeaderCell>버튼</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data
              ?.filter((el) => el.id !== undefined)
              .map((el) => {
                return (
                  <>
                    <Table.Row>
                      <Table.Cell>{el.id}</Table.Cell>
                      <Table.Cell>{el.channelId}</Table.Cell>
                      <Table.Cell>{el.title}</Table.Cell>
                    </Table.Row>
                  </>
                );
              })}
          </Table.Body>
        </Table>
        <GoHomeButton />
        <Button color="black" onClick={() => navigate("/youtube_explore")}>
          뒤로가기
        </Button>
      </Container>
      <ContentsLayout>
        {data.map((data, index) => {
          return <ExploreCard key={`explore-card-${index}`} data={data} />;
        })}
      </ContentsLayout>
    </>
  );
};
export default Register;
