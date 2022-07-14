import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CityAndProvineceYearMonthChoice } from "webapp/reducers/sidoAndProvince.reduce";
import useUpdateEffect from "webapp/hooks/useUpdateEffect";

const YearMonthSelect = () => {
  const dispatch = useDispatch();
  const [optionsState, setOptionState] = useState({
    year: "2000",
    month: "01",
  });

  const handleChange = (e) => {
    setOptionState({
      ...optionsState,
      [e.target.name]: e.target.value,
    });
  };

  useUpdateEffect(() => {
    dispatch(CityAndProvineceYearMonthChoice(optionsState));
  }, [optionsState]);

  let choiceYearArr = [];
  let choiceMonthArr = [];
  for (let i = 2000; i <= 2022; ++i) choiceYearArr.push(i);
  for (let i = 1; i <= 12; ++i) choiceMonthArr.push(i);

  return (
    <>
      <select name="year" id="choiceYearArr" onChange={(e) => handleChange(e)}>
        {choiceYearArr?.map((element) => {
          return (
            <>
              <option value={element}>{element}</option>
            </>
          );
        })}
      </select>
      <select
        name="month"
        id="choiceMonthArr"
        onChange={(e) => handleChange(e)}
      >
        {choiceMonthArr?.map((element) => {
          return (
            <>
              <option value={element}>{element}</option>
            </>
          );
        })}
      </select>
    </>
  );
};
export default YearMonthSelect;
