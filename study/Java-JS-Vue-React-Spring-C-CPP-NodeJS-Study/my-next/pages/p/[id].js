import Router from "next/router";
import { useEffect } from "react";
import commontest from "../../component/commontest";
import { useRouter } from "next/router";
export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  // const { id } = Router.query;
  useEffect(() => {
    console.log(id);
  }, []);
  const render = () => {
    if (id === "hello-nextjs") {
      return <commontest></commontest>;
    }
  };

  return <render></render>;
}
