import React, { useEffect, useRef, useState } from "react";
import PortfolioCashAsset from "../../portfolio/component/PortfolioCashAsset";
import PortfolioAssetRate from "webapp/portfolio/component/PortfolioAssetRate";
import PortfolioDividentRate from "webapp/portfolio/component/PortfolioDividentRate";
import styles from "../style/Portfolio.module.css";

const Portfolio = () => {
  const [options, setOptions] = useState(sessionStorage.getItem("option"));

  // 수정하기
  const optionChange = (e) => {
    sessionStorage.setItem("option", e.target.value);
    setOptions(sessionStorage.getItem("option"));
  };

  return (
    <>
      <div className={styles.divStyle}>
        <select name="portfolioSelect" onChange={optionChange} value={options}>
          <option value="cashAsset">현금 대 자산비율</option>
          <option value="assetRate">자산 금액 비율</option>
          {/* <option value="dividentRate">배당 및 월세 1년 비율</option> */}
        </select>

        <div>
          {options === "cashAsset" ? <PortfolioCashAsset /> : ""}
          {options === "assetRate" ? <PortfolioAssetRate /> : ""}
          {/* {options === "dividentRate" ? <PortfolioDividentRate /> : ""} */}
        </div>
      </div>
    </>
  );
};
export default Portfolio;
