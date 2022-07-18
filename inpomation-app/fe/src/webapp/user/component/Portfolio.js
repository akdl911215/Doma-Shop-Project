import React from "react";
import { RadialChart } from "react-vis";

const Portfolio = () => {
  const myData = [{ angle: 122 }, { angle: 120 }, { angle: 22 }];
  return (
    <>
      <RadialChart data={myData} width={300} height={300} />
    </>
  );
};
export default Portfolio;
