import styles from "../style/Explore.module.css";
// import ContentsLayout from "../components/shared/ContentsLayout";
import ContentsLayout from "../component/ContentsLayout";
import youtubeData from "../data/youtubeData.json";
import ExploreCard from "../component/explore/ExploreCard";

const Explore = () => {
  console.log("Expolore : ", Explore);
  return (
    <ContentsLayout>
      {youtubeData["data"].map(function (data, index) {
        return <ExploreCard key={`explore-card-${index}`} data={data} />;
      })}
    </ContentsLayout>
  );
};
export default Explore;
