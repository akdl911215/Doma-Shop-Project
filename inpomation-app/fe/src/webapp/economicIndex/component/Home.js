import React from "react";
import styles from "../style/Home.module.css";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import EconomicIndexMainList from "./EconomicIndexMainList";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.rootDiv}>
        <Button onClick={() => navigate("/economic_index_list")}>
          지수 체크
        </Button>
        <div className={styles.container}>
          <EconomicIndexMainList />
        </div>
      </div>
    </>
  );
};
export default Home;
