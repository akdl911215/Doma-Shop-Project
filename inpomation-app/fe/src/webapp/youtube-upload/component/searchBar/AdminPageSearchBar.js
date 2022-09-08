import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import styles from "../../style/searchBar/AdminPageSearchBar.module.css";
import { YoutubeAdminSearchDataAPI } from "webapp/api/youtubeApi";
import { YoutubeAdminSearchBar } from "webapp/reducers/youtube.reducer";
const AdminPageSearchBar = () => {
  const dispatch = useDispatch();

  const [options, setOptions] = useState("total");
  const [search, setSearch] = useState("");

  const searchPage = () => {
    YoutubeAdminSearchDataAPI({
      type: options,
      keyword: search,
    })
      .then((res) => {
        console.log("admin search res : ", res);
        dispatch(YoutubeAdminSearchBar(res?.data?.search));
      })
      .catch((err) =>
        console.error("youtube admin search bar data api error : ", err)
      );
  };

  return (
    <>
      <select
        type="text"
        className={styles.selectBoxStyle}
        onChange={(e) => setOptions(e.target.value)}
      >
        <option value="total">통합검색</option>
        <option value="id">번호</option>
        <option value="title">제목</option>
        <option value="videoId">비디오ID</option>
        <option value="username">아이디</option>
        <option value="channelTitle">채널 제목</option>
      </select>
      <input
        type="text"
        name="keyword"
        placeholder="검색어를 입력하세요"
        className={styles.inputBoxStyle}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={(e) => searchPage(e)}>검색</Button>
    </>
  );
};

export default AdminPageSearchBar;
