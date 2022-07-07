import React, { useState } from "react";
import { Table, Container, Checkbox, Button } from "semantic-ui-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { CityAndProvinceAPI } from "../../../api/publicDataApi";
// import { ko } from "date-fns/esm/locale";

const CityAndProvince = () => {
  // 시도코드 : 11 서울특별시, 26 부산광역시, 27 대구광역시, 28 인천광역시
  //            29 광주광역시, 30 대전광역시, 31 울산광역시, 36 세종특별자치시
  //            41 경기도, 42 강원도, 43 충청북도, 44 충청남도, 45 전라북도
  //            46 전라남도, 47 경상북도, 48 경상남도, 50 제주특별자치도
  const [optionsState, setOptionState] = useState({
    sidoCode: "11",
    startYearArr: "1950",
    startMonthArr: "01",
    endYearArr: "1950",
    endMonthArr: "01",
  });

  const clickButton = () => {
    console.log(
      "optionsState.startMonthArr.length ; ",
      optionsState.startMonthArr.length
    );
    if (optionsState.startMonthArr.length === 1)
      "0".concat(optionsState.startMonthArr);
    const startDate = optionsState.startYearArr + optionsState.startMonthArr;

    if (optionsState.endMonthArr.length === 1)
      "0".concat(optionsState.endMonthArr);
    const endDate = optionsState.endYearArr + optionsState.endMonthArr;

    const state = {
      startDate: startDate,
      endDate: endDate,
      sidoCode: optionsState.sidoCode,
    };

    console.log("state: ", state);
    CityAndProvinceAPI(state);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOptionState({
      [name]: value,
    });
  };

  let startYearArr = [];
  let endYearArr = [];
  for (let i = 1950; i < 2099; ++i) {
    startYearArr.push(i);
    endYearArr.push(i);
  }

  let startMonthArr = [];
  let endMonthArr = [];
  for (let i = 1; i <= 12; ++i) {
    startMonthArr.push(i);
    endMonthArr.push(i);
  }

  return (
    <>
      <Container>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>시/도 선택</Table.HeaderCell>
              <Table.HeaderCell>시작 날짜</Table.HeaderCell>
              <Table.HeaderCell>끝나는 날짜</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
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
              </Table.Cell>
              <Table.Cell>
                <select name="startYear" id="startYear" onChange={handleChange}>
                  {startYearArr?.map((element, key) => {
                    return (
                      <>
                        <option value={element[key]}>
                          {startYearArr[key]}
                        </option>
                      </>
                    );
                  })}
                </select>
                <select
                  name="startMonth"
                  id="startMonth"
                  onChange={handleChange}
                >
                  {startMonthArr?.map((element, key) => {
                    return (
                      <>
                        <option value={element[key]}>
                          {startMonthArr[key]}
                        </option>
                      </>
                    );
                  })}
                </select>
              </Table.Cell>
              <Table.Cell>
                <select name="endYear" id="endYear" onChange={handleChange}>
                  {endYearArr?.map((element, key) => {
                    return (
                      <>
                        <option value={element[key]}>{endYearArr[key]}</option>
                      </>
                    );
                  })}
                </select>
                <select name="endMonth" id="endMonth" onChange={handleChange}>
                  {endMonthArr?.map((element, key) => {
                    return (
                      <>
                        <option value={element[key]}>{endMonthArr[key]}</option>
                      </>
                    );
                  })}
                </select>
              </Table.Cell>
              <Table.Cell>
                <Button color="black" onClick={(e) => clickButton(e)}>
                  조회
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </>
  );
};
export default CityAndProvince;
