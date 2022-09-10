import React, { useState, useEffect } from "react";
import { Table, Container, Button } from "semantic-ui-react";
import { CityAndProvinceByNatureAPI } from "../../../api/publicDataApi";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import { SidoSelect } from "./common/SidoSelect";
import YearMonthSelect from "./common/YearMonthSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  CityAndProvineceSidoCodeChoice,
  CityAndProvineceYearMonthChoice,
  CityAndProvineceImportExportCodeChoice,
} from "webapp/reducers/sidoAndProvince.reduce";
import BackButton from "webapp/common/component/BackButton";
import NatureSelect from "./common/NatureSelect";

// 시도별 성질별 수출입실적
const CityAndProvineceByNature = () => {
  const dispatch = useDispatch();

  const [dataStaticResult, setDataStaticResult] = useState({});
  const [dataResult, setDataResult] = useState([]);
  useEffect(() => {
    dispatch(
      CityAndProvineceSidoCodeChoice("11"),
      CityAndProvineceYearMonthChoice({ year: "2000", month: "01" }),
      CityAndProvineceImportExportCodeChoice("")
    );
  }, []);

  const { selectSidoCode, selectYear, selectMonth, selectImportExport } =
    useSelector(({ ImportAndExportReducer }) => ({
      selectSidoCode: ImportAndExportReducer?.SidoCodeCoiceInital?.sidocode,
      selectYear: ImportAndExportReducer?.YearMonthCoiceInital?.year,
      selectMonth: ImportAndExportReducer?.YearMonthCoiceInital?.month,
      selectImportExport:
        ImportAndExportReducer?.ImportExportChoiceInital?.importExport,
    }));

  // imexTpcd (수출입코드) : 1 수출 / 2 수입
  const [importAndExport, setImportAcvndExport] = useState("1");
  const importAndExportBool = importAndExport === "1" ? "수출" : "수입";

  const clickButton = () => {
    let choiceMonth = selectMonth;
    if (selectMonth.length === 1) choiceMonth = "0".concat(selectMonth);
    const choiceDate = selectYear + choiceMonth;
    const CityAndProvinceData = CityAndProvinceByNatureAPI({
      startDate: choiceDate,
      endDate: choiceDate,
      sidoCode: selectSidoCode,
      importExport: selectImportExport,
      importExportCode: importAndExport,
    });
    CityAndProvinceData.then((res) => {
      if (res) alert("자료 조회가 성공하였습니다.");

      setDataResult(res?.data?.result.result[0].item);
      setDataStaticResult(res?.data?.result.result[0].item[0]);
    })
      .catch((err) => {
        console.error("데이터 오류 : ", err);
      })
      .finally((fi) => console.log("실행완료"));
  };
  const viewResult = dataResult?.map((el) => el);

  return (
    <>
      <Container>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>수출입 코드 선택</Table.HeaderCell>
              <Table.HeaderCell>
                수출입 성질 분류 코드 선택
                <br />
                *[선택하시오]은 전체 선택*
              </Table.HeaderCell>
              <Table.HeaderCell>시/도 선택</Table.HeaderCell>
              <Table.HeaderCell>연/월 선택</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <select
                  name="importAndExport"
                  onChange={(e) => setImportAcvndExport(e.target.value)}
                >
                  <option value="1">수출</option>
                  <option value="2">수입</option>
                </select>
              </Table.Cell>
              <Table.Cell>
                <NatureSelect importExport={importAndExport} />
              </Table.Cell>
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
              <Table.Cell>총계</Table.Cell>
              <Table.Cell>
                {dataStaticResult?.priodTitle ? "전체내역" : ""}
              </Table.Cell>

              <Table.Cell>{importAndExportBool}금액</Table.Cell>
              <Table.Cell>{dataStaticResult?.imexUsdAmt}</Table.Cell>
              <Table.Cell>{importAndExportBool}품목건수</Table.Cell>
              <Table.Cell>{dataStaticResult?.imexLnCnt}</Table.Cell>
              <Table.Cell>수출입구분코드</Table.Cell>
              <Table.Cell>{dataStaticResult?.tmprTpcd}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        {viewResult?.map((element, key) => {
          return (
            <>
              <Table>
                <Table.Body key={key}>
                  <Table.Row>
                    <Table.Cell>
                      {element.cdValtValNm === ""
                        ? ""
                        : `${importAndExportBool}수입성질코드명`}
                    </Table.Cell>
                    <Table.Cell>{element.cdValtValNm}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      {element.priodTitle === "" ? "" : "기간"}
                    </Table.Cell>
                    <Table.Cell>{element.priodTitle}</Table.Cell>

                    <Table.Cell>
                      {element.imexUsdAmt === ""
                        ? ""
                        : `${importAndExportBool}금액`}
                    </Table.Cell>
                    <Table.Cell>{element.imexUsdAmt}</Table.Cell>
                    <Table.Cell>
                      {element.imexLnCnt === ""
                        ? ""
                        : `${importAndExportBool}품목코드`}
                    </Table.Cell>
                    <Table.Cell>{element.imexLnCnt}</Table.Cell>
                    <Table.Cell>
                      {element.tmprTpcd === ""
                        ? ""
                        : `${importAndExportBool}성질코드`}
                    </Table.Cell>
                    <Table.Cell>{element.tmprTpcd}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </>
          );
        })}
        <GoHomeButton />
        <BackButton link="/data_list" />
      </Container>
    </>
  );
};
export default CityAndProvineceByNature;
