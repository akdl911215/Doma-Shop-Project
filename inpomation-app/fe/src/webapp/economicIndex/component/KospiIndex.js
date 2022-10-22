import React, { useEffect, useState } from "react";
import { EconomicIndexKospiDataAPI } from "webapp/api/economicIndex";

const KospiIndex = () => {
  // const [kospi, setKospi] = useState({
  //   inex: "kospi",
  // });
  let result = "kospi";
  // useEffect(() => {
  // EconomicIndexKospiDataAPI()
  //   .then((res) => {
  //     console.log("kospi res : ", res);
  //     // setKospi(res);
  //   })
  //   .catch((err) => console.error("kospi error : ", err));
  // }, []);
  return result;
};
export default KospiIndex;
