import Layout from "../component/Layout";
import ContentsLayout from "../component/ContentsLayout";
import youtubeData from "../data/youtubeData.json";
import ExploreCard from "../component/explore/ExploreCard";

const Explore = () => {
  console.log("Explore ContentsLayout : ", ContentsLayout);
  console.log("Explore youtubeData : ", youtubeData);
  return (
    // <Layout activeMenu="explore">
    <ContentsLayout>
      {youtubeData["data"].map((data, index) => {
        return <ExploreCard key={`explore-card-${index}`} data={data} />;
      })}
    </ContentsLayout>
    // </Layout>
  );
};
export default Explore;
