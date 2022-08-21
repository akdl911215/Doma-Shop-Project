import React from "react";
import styles from "../style/ContentsLayout.module.css";

const ContentsLayout = ({ children }) => {
  console.log("contentLayout styles : ", styles);
  return (
    <div className={styles.layout}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default ContentsLayout;
