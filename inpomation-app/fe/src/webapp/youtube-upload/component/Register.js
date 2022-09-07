import React, { useEffect, useState } from "react";
import styles from "../style/Register.module.css";
import { YoutubeSearchListDataAPI } from "webapp/api/youtubeApi";
import ContentsLayout from "./ContentsLayout";
import RegisterCard from "./explore/SearchListCard";
import SearchBar from "./searchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { YoutubeSearchList } from "webapp/reducers/youtube.reducer";
import Menu from "./Menu";

const Register = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    sessionStorage.setItem("currentPage", "Register");
    dispatch(YoutubeSearchList([]));
    YoutubeSearchListDataAPI({ q: "경제" })
      .then((res) => {
        dispatch(
          YoutubeSearchList(
            res?.data?.map((el) => {
              return {
                id: el?.id?.videoId,
                channelId: el?.items?.items[0]?.snippet?.channelId,
                title: el?.items?.items[0]?.snippet?.title,
                thumbnail: el?.items?.items[0]?.snippet?.thumbnails?.high?.url,
                description: el?.items?.items[0]?.snippet?.description,
                channelTitle: el?.items?.items[0]?.snippet?.channelTitle,
                viewCount: el?.items?.items[0]?.statistics?.viewCount,
                likeCount: el?.items?.items[0]?.statistics?.likeCount,
                channelUrl: "",
                channelThumbnail: el?.snippet?.thumbnails?.high?.url,
                date: el?.snippet?.publishedAt,
              };
            })
          )
        );
      })
      .catch((err) =>
        console.error("YoutubeSearchListDataAPI catch error : ", err)
      );
  }, []);

  const { searchList } = useSelector(({ YoutubeReducer }) => ({
    searchList: YoutubeReducer?.YoutubeSearchListInitial,
  }));

  // https://intrepidgeeks.com/tutorial/react-easily-import-youtube-videos-react-player

  return (
    <>
      <div>
        <div>
          <SearchBar />
        </div>

        <div className={styles.contentsDiv}>
          <Menu />
          {searchList?.length > 0 ? (
            <ContentsLayout>
              {searchList.map((data, index) => {
                return (
                  <RegisterCard key={`explore-card-${index}`} data={data} />
                );
              })}
            </ContentsLayout>
          ) : (
            <div className={styles.videoLengZero}></div>
          )}
        </div>
      </div>
    </>
  );
};
export default Register;
