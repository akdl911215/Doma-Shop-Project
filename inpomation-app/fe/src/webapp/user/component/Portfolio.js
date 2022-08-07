import React, { useState } from "react";
import PortfolioCashAsset from "../../portfolio/component/PortfolioCashAsset";
import PortfolioAssetRate from "webapp/portfolio/component/PortfolioAssetRate";
import PortfolioDividentRate from "webapp/portfolio/component/PortfolioDividentRate";
const Portfolio = () => {
  const [options, setOptions] = useState("cashAsset");
  return (
    <>
      <div>
        <select
          name="portfolioSelect"
          onChange={(e) => setOptions(e.target.value)}
        >
          <option value="cashAsset">현금 대 자산비율</option>
          <option value="assetRate">자산 금액 비율</option>
          <option value="dividentRate">배당 및 월세 1년 비율</option>
        </select>

        {options === "cashAsset" ? <PortfolioCashAsset /> : ""}
        {options === "assetRate" ? <PortfolioAssetRate /> : ""}
        {options === "dividentRate" ? <PortfolioDividentRate /> : ""}
      </div>
    </>
  );
};
export default Portfolio;
