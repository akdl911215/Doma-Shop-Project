import React, { useEffect, useState } from "react";
import { EconomicIndexKospiDataAPI } from "webapp/api/economicIndex";

const KospiIndex = () => {
  const [kospi, setKospi] = useState({});
  useEffect(() => {
    EconomicIndexKospiDataAPI()
      .then((res) => setKospi(res))
      .catch((err) => console.error("kospit error : ", err));
  }, []);
  return kospi;
};
export default KospiIndex;
