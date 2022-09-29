import React from "react";
import InvestingInfomationList from "./InvestingInfomationList";
import styles from "../style/Home.module.css";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import InvestingInfomationMainList from "./InvestingInfomationMainList";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.rootDiv}>
        <Button onClick={() => navigate("/investing_infomation_list")}>
          커뮤니티 글 보기
        </Button>
        <div className={styles.container}>
          <InvestingInfomationMainList />
          {/* <InvestingInfomationList /> */}
        </div>
      </div>
    </>
  );
};
export default Home;
