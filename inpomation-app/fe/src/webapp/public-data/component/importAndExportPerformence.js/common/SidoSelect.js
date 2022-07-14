import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CityAndProvineceYearMonthChoice } from "webapp/reducers/sidoAndProvince.reduce";

const SidoSelect = () => {
  const dispatch = useDispatch();
  const [sidoCode, setSidoCode] = useState("11");
  const handleChange = (e) => {
    console.log("e.target.value : ", e.target.value);
    setSidoCode({
      [e.target.name]: e.target.value,
    });
    dispatch(CityAndProvineceYearMonthChoice(e.target.value));
  };

  console.log("common sidoCode : ", sidoCode);

  return (
    <>
      <select name="sidoCode" id="sidoCode" onChange={handleChange}>
        <option value="11">서울특별시</option>
        <option value="26">부산광역시</option>
        <option value="27">대구광역시</option>
        <option value="28">인천광역시</option>
        <option value="29">광주광역시</option>
        <option value="30">대전광역시</option>
        <option value="31">울산광역시</option>
        <option value="36">세종특별자치시</option>
        <option value="41">경기도</option>
        <option value="42">강원도</option>
        <option value="43">충청북도</option>
        <option value="44">충청남도</option>
        <option value="45">전라북도</option>
        <option value="46">전라남도</option>
        <option value="47">경상북도</option>
        <option value="48">경상남도</option>
        <option value="50">제주특별자치도</option>
      </select>
    </>
  );
};

export { SidoSelect };
