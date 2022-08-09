import React, { useRef, useState } from "react";
import PortfolioCashAsset from "../../portfolio/component/PortfolioCashAsset";
import PortfolioAssetRate from "webapp/portfolio/component/PortfolioAssetRate";
import PortfolioDividentRate from "webapp/portfolio/component/PortfolioDividentRate";
const Portfolio = () => {
  const [options, setOptions] = useState("cashAsset");
  const optionRef = useRef("cashAset");

  // 수정하기
  const optionChange = (e) => {
    setOptions(e.target.value);
    if (e.target.value !== "cashAsset") {
      optionRef.value = e.target.value;
      console.log("optionRef.value : ", optionRef.value);
      console.log("optionRef : ", optionRef);
    }
  };

  // 업데이트 렌더링 방식에 대해서 찾기
  // 세션 함수 따로 빼기
  return (
    <>
      <div>
        <select name="portfolioSelect" onChange={optionChange} ref={optionRef}>
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
