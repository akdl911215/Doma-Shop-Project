import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "semantic-ui-react";
import { CityAndProvinceAPI } from "../../../api/publicDataApi";
import GoBackButton from "webapp/common/component/GoHomeButton";
import { useNavigate } from "react-router-dom";
import { SidoSelect } from "./common/SidoSelect";
import YearMonthSelect from "./common/YearMonthSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  CityAndProvineceSidoCodeChoice,
  CityAndProvineceYearMonthChoice,
} from "webapp/reducers/sidoAndProvince.reduce";

const CityAndProvince = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [dataResult, setDataResult] = useState([]);
  useEffect(() => {
    dispatch(
      CityAndProvineceSidoCodeChoice("11"),
      CityAndProvineceYearMonthChoice({ year: "2000", month: "01" })
    );
  }, []);

  const { selectSidoCode, selectYear, selectMonth } = useSelector(
    ({ ImportAndExportReducer }) => ({
      selectSidoCode: ImportAndExportReducer?.SidoCodeCoiceInital?.sidocode,
      selectYear: ImportAndExportReducer?.YearMonthCoiceInital?.year,
      selectMonth: ImportAndExportReducer?.YearMonthCoiceInital?.month,
    })
  );

  const clickButton = () => {
    let choiceMonth = selectMonth;
    if (selectMonth.length === 1) choiceMonth = "0".concat(selectMonth);
    const choiceDate = selectYear + choiceMonth;
    const CityAndProvinceData = CityAndProvinceAPI({
      startDate: choiceDate,
      endDate: choiceDate,
      sidoCode: selectSidoCode,
    });
    CityAndProvinceData.then((res) => {
      setDataResult([
        res.data.result.cmtrBlncAmt.trim(), // 무역지수
        res.data.result.expCnt.trim(), // 수출건수
        res.data.result.expUsdAmt.trim(), // 수출금액
        res.data.result.impCnt.trim(), // 수입건수
        res.data.result.impUsdAmt.trim(), // 수입금액
        res.data.result.priodTitle.trim(), // 총계
        res.data.result.priodTitle2, // 연도
        res.data.result.resultMsg, // 정상서비스 유무
        res.data.result.sidoNm2, // 도시코드
      ]);
    })
      .catch((err) => {
        console.error("데이터 오류 : ", err);
      })
      .finally((fi) => console.log("실행완료"));
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
                <SidoSelect />
              </Table.Cell>

              <Table.Cell>
                <YearMonthSelect />
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
              <Table.Cell>{}</Table.Cell>
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
        <GoBackButton />
        <Button color="black" onClick={() => navigate("/data_list")}>
          뒤로가기
        </Button>
      </Container>
    </>
  );
};
export default CityAndProvince;
