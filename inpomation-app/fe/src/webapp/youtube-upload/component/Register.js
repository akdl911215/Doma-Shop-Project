import React, { useState } from "react";
import styles from "../style/Register.module.css";
import { Table, Container, Checkbox, Button } from "semantic-ui-react";
import { YoutubeSearchListDataAPI } from "webapp/api/youubeApi";
import { useNavigate } from "react-router-dom";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import ContentsLayout from "./ContentsLayout";
import ExploreCard from "./explore/ExploreCard";
import RegisterCard from "./explore/SearchListCard";
import SearchBar from "./searchBar/SearchBar";

const Register = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [video, setVideo] = useState([]);

  // https://intrepidgeeks.com/tutorial/react-easily-import-youtube-videos-react-player

  return (
    <>
      <div>
        <div>
          <SearchBar />
        </div>
        <div className={styles.contentsDiv}>
          <ContentsLayout>
            {video.map((data, index) => {
              return <RegisterCard key={`explore-card-${index}`} data={data} />;
            })}
          </ContentsLayout>
        </div>
      </div>
    </>
  );
};
export default Register;
