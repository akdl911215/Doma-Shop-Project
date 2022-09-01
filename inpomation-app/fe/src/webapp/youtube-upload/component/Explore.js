import Layout from "../component/Layout";
import ContentsLayout from "../component/ContentsLayout";
import youtubeData from "../data/youtubeData.json";
import ExploreCard from "../component/explore/ExploreCard";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import { useEffect, useState } from "react";
import { YoutubeListDataAPI } from "webapp/api/youubeApi";

const Explore = () => {
  const navigate = useNavigate();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    YoutubeListDataAPI()
      .then((res) => setVideo(res?.data?.list))
      .catch((err) => console.error("full list api error : ", err));
  }, []);

  return (
    <>
      <GoHomeButton />
      <Button onClick={() => navigate("/youtube_register")}>글 쓰기</Button>
      <ContentsLayout>
        {video?.map((data, index) => {
          return <ExploreCard key={`explore-card-${index}`} data={data} />;
        })}
      </ContentsLayout>
    </>
  );
};
export default Explore;
