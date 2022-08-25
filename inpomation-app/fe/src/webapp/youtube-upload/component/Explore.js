import Layout from "../component/Layout";
import ContentsLayout from "../component/ContentsLayout";
import youtubeData from "../data/youtubeData.json";
import ExploreCard from "../component/explore/ExploreCard";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import GoHomeButton from "webapp/common/component/GoHomeButton";

const Explore = () => {
  const navigate = useNavigate();

  return (
    <>
      <GoHomeButton />
      <Button onClick={() => navigate("/youtube_register")}>글 쓰기</Button>
      <ContentsLayout>
        {youtubeData["data"].map((data, index) => {
          return <ExploreCard key={`explore-card-${index}`} data={data} />;
        })}
      </ContentsLayout>
    </>
  );
};
export default Explore;
