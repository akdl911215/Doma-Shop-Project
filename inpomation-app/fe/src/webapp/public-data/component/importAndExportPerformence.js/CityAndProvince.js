import React, { useState } from "react";
import { Table, Container, Checkbox, Button } from "semantic-ui-react";
import { CityAndProvinceAPI } from "../../../api/publicDataApi";

const CityAndProvince = () => {
  // 시도코드 : 11 서울특별시, 26 부산광역시, 27 대구광역시, 28 인천광역시
  //            29 광주광역시, 30 대전광역시, 31 울산광역시, 36 세종특별자치시
  //            41 경기도, 42 강원도, 43 충청북도, 44 충청남도, 45 전라북도
  //            46 전라남도, 47 경상북도, 48 경상남도, 50 제주특별자치도
  const [optionsState, setOptionState] = useState({
    sidoCode: "11",
    year: "2000",
    month: "01",
  });
  const [dataResult, setDataResult] = useState([]);

  const clickButton = () => {
    let choiceMonth = optionsState.month;
    if (optionsState.month.length === 1)
      choiceMonth = "0".concat(optionsState.month);
    const choiceDate = optionsState.year + choiceMonth;

    const CityAndProvinceData = CityAndProvinceAPI({
      startDate: choiceDate,
      endDate: choiceDate,
      sidoCode: optionsState.sidoCode,
    });

    CityAndProvinceData.then((res) => {
      const cmtrBlncAmt = res.data.result.cmtrBlncAmt.trim(); // 무역지수
      const expCnt = res.data.result.expCnt.trim(); // 수출건수
      const expUsdAmt = res.data.result.expUsdAmt.trim(); // 수출금액
      const impCnt = res.data.result.impCnt.trim(); // 수입건수
      const impUsdAmt = res.data.result.impUsdAmt.trim(); // 수입금액
      const priodTitle = res.data.result.priodTitle.trim(); // 총계
      const priodTitle2 = res.data.result.priodTitle2; // 연도
      const resultMSG = res.data.result.resultMsg; // 정상서비스 유무
      const SidoNumber = res.data.result.sidoNm2; // 도시코드

      const arr = [];
      arr[0] = cmtrBlncAmt;
      arr[1] = expCnt;
      arr[2] = expUsdAmt;
      arr[3] = impCnt;
      arr[4] = impUsdAmt;
      arr[5] = priodTitle;
      arr[6] = priodTitle2;
      arr[7] = resultMSG;
      arr[8] = SidoNumber;
      setDataResult(arr);
    })
      .catch((err) => {
        console.error("데이터 오류 : ", err);
      })
      .finally((fi) => console.log("실행완료"));
  };

  let choiceYearArr = [];
  let choiceMonthArr = [];
  for (let i = 2000; i <= 2022; ++i) choiceYearArr.push(i);
  for (let i = 1; i <= 12; ++i) choiceMonthArr.push(i);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name : ", name, "/ value : ", value);

    setOptionState({
      ...optionsState,
      [name]: value,
    });
  };

  return (
    <>
      <Container>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>시/도 선택</Table.HeaderCell>
              <Table.HeaderCell>연/월 선택</Table.HeaderCell>
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
                <select name="year" id="choiceYearArr" onChange={handleChange}>
                  {choiceYearArr?.map((element, key) => {
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
                  onChange={handleChange}
                >
                  {choiceMonthArr?.map((element, key) => {
                    return (
                      <>
                        <option value={element}>{element}</option>
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

        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>총계</Table.Cell>
              <Table.Cell>{dataResult[5]}</Table.Cell>
              <Table.Cell collapsing>연도</Table.Cell>
              <Table.Cell>{dataResult[6]}</Table.Cell>
              <Table.Cell collapsing>광역시</Table.Cell>
              <Table.Cell>{dataResult[8]}</Table.Cell>
              <Table.Cell collapsing>무역지수</Table.Cell>
              <Table.Cell>{dataResult[0]}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing>수입건수</Table.Cell>
              <Table.Cell>{dataResult[3]}</Table.Cell>
              <Table.Cell collapsing>수입금액</Table.Cell>
              <Table.Cell>{dataResult[4]}</Table.Cell>
              <Table.Cell collapsing>수출건수</Table.Cell>
              <Table.Cell>{dataResult[1]}</Table.Cell>
              <Table.Cell collapsing>수출금액</Table.Cell>
              <Table.Cell>{dataResult[2]}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </>
  );
};
export default CityAndProvince;
