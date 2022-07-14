import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CityAndProvineceSidoCodeChoice } from "webapp/reducers/sidoAndProvince.reduce";

const SidoSelect = () => {
  const dispatch = useDispatch();
  const [sidoCode, setSidoCode] = useState("11");

  // 시도코드 : 11 서울특별시, 26 부산광역시, 27 대구광역시, 28 인천광역시
  //            29 광주광역시, 30 대전광역시, 31 울산광역시, 36 세종특별자치시
  //            41 경기도, 42 강원도, 43 충청북도, 44 충청남도, 45 전라북도
  //            46 전라남도, 47 경상북도, 48 경상남도, 50 제주특별자치도
  const handleChange = (e) => {
    setSidoCode({
      [e.target.name]: e.target.value,
    });
    dispatch(CityAndProvineceSidoCodeChoice(e.target.value));
  };

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
