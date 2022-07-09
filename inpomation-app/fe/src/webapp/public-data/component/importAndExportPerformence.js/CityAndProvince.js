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
    startYearArr: "2000",
    startMonthArr: "01",
    endYearArr: "2000",
    endMonthArr: "01",
  });
  const [dataResult, setDataResult] = useState([]);

  // let arr = [];
  const clickButton = () => {
    let startMonth = optionsState.startMonthArr;
    if (optionsState.startMonthArr.length === 1)
      startMonth = "0".concat(optionsState.startMonthArr);
    const startDate = optionsState.startYearArr + startMonth;

    let endMonth = optionsState.endMonthArr;
    if (optionsState.endMonthArr.length === 1)
      endMonth = "0".concat(optionsState.endMonthArr);
    const endDate = optionsState.endYearArr + endMonth;

    const state = {
      startDate: startDate,
      endDate: endDate,
      sidoCode: optionsState.sidoCode,
    };

    if (state.startDate > endDate) {
      alert("끝나는 일자가 시작 일자보다 빠를 수 없습니다");
      return;
    }

    const CityAndProvinceData = CityAndProvinceAPI(state);
    console.log(
      "CityAndProvinceData : ",
      CityAndProvinceData.then((res) => {
        console.log("res : ", res.data.result);
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
          alert(
            `시작과 종료의 조회기간은 1년이내 기간만 가능합니다. 선택기간 : ${optionsState.startYearArr}-${startMonth}~${optionsState.endYearArr}-${endMonth}`
          );
        })
        .finally((fi) => console.log("실행완료"))
    );
  };

  console.log("dataResult:", dataResult);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name : ", name, "/ value : ", value);

    setOptionState({
      ...optionsState,
      [name]: value,
    });
  };

  let startYearArr = [];
  let endYearArr = [];
  for (let i = 2000; i <= 2022; ++i) {
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
                <select
                  name="startYearArr"
                  id="startYearArr"
                  onChange={handleChange}
                >
                  {startYearArr?.map((element, key) => {
                    return (
                      <>
                        <option value={element}>{element}</option>
                      </>
                    );
                  })}
                </select>
                <select
                  name="startMonthArr"
                  id="startMonthArr"
                  onChange={handleChange}
                >
                  {startMonthArr?.map((element, key) => {
                    return (
                      <>
                        <option value={element}>{element}</option>
                      </>
                    );
                  })}
                </select>
              </Table.Cell>
              <Table.Cell>
                <select
                  name="endYearArr"
                  id="endYearArr"
                  onChange={handleChange}
                >
                  {endYearArr?.map((element, key) => {
                    return (
                      <>
                        <option value={element}>{element}</option>
                      </>
                    );
                  })}
                </select>
                <select
                  name="endMonthArr"
                  id="endMonthArr"
                  onChange={handleChange}
                >
                  {endMonthArr?.map((element, key) => {
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
