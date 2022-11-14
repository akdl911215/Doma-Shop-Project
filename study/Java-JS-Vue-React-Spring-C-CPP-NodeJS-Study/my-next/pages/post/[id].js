// import { useRouter } from "next/router";
import Router from "next/router";

const Post = () => {
  //   const router = useRouter();
  //   const { id } = router.query;
  const { id } = Router.query;

  return (
    <>
      <p>Post: {id}</p>
    </>
  );
};
export default Post;
