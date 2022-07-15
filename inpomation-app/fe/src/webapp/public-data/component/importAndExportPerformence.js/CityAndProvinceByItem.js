import React, { useState, useEffect } from "react";
import { Table, Container, Checkbox, Button } from "semantic-ui-react";
import { CityAndProvinceByItemAPI } from "../../../api/publicDataApi";
import GoBackButton from "webapp/common/component/GoHomeButton";
import { useNavigate } from "react-router-dom";
import { SidoSelect } from "./common/SidoSelect";
import YearMonthSelect from "./common/YearMonthSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  CityAndProvineceSidoCodeChoice,
  CityAndProvineceYearMonthChoice,
  CityAndProvineceITtemCodeChoice,
} from "webapp/reducers/sidoAndProvince.reduce";
import ItemSelect from "./common/ItemSelect";

const CityAndProvinceByItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [dataResult, setDataResult] = useState([]);
  useEffect(() => {
    dispatch(
      CityAndProvineceSidoCodeChoice("11"),
      CityAndProvineceYearMonthChoice({ year: "2000", month: "01" }),
      CityAndProvineceITtemCodeChoice("")
    );
  }, []);

  const { selectSidoCode, selectYear, selectMonth, selectItem } = useSelector(
    ({ ImportAndExportReducer }) => ({
      selectSidoCode: ImportAndExportReducer?.SidoCodeCoiceInital?.sidocode,
      selectYear: ImportAndExportReducer?.YearMonthCoiceInital?.year,
      selectMonth: ImportAndExportReducer?.YearMonthCoiceInital?.month,
      selectItem: ImportAndExportReducer?.ItemCoiceInital?.item,
    })
  );
  console.log("selectItem : ", selectItem);

  const clickButton = () => {
    let choiceMonth = selectMonth;
    if (selectMonth.length === 1) choiceMonth = "0".concat(selectMonth);
    const choiceDate = selectYear + choiceMonth;
    const CityAndProvinceData = CityAndProvinceByItemAPI({
      startDate: choiceDate,
      endDate: choiceDate,
      sidoCode: selectSidoCode,
      item: selectItem,
    });
    CityAndProvinceData.then((res) => {
      // setDataResult([
      //   res.data.result.cmtrBlncAmt.trim(), // 무역지수
      //   res.data.result.expCnt.trim(), // 수출건수
      //   res.data.result.expUsdAmt.trim(), // 수출금액
      //   res.data.result.impCnt.trim(), // 수입건수
      //   res.data.result.impUsdAmt.trim(), // 수입금액
      //   res.data.result.priodTitle.trim(), // 총계
      //   res.data.result.priodTitle2, // 연도
      //   res.data.result.resultMsg, // 정상서비스 유무
      //   res.data.result.sidoNm2, // 도시코드
      // ]);
      // console.log("res :: ", res);
      setDataResult(res?.data?.result.result[0].item);
    })
      .catch((err) => {
        console.error("데이터 오류 : ", err);
      })
      .finally((fi) => console.log("실행완료"));
  };
  console.log("dataResult : ", dataResult);
  return (
    <>
      <Container>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>품목 선택</Table.HeaderCell>
              <Table.HeaderCell>시/도 선택</Table.HeaderCell>
              <Table.HeaderCell>연/월 선택</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <ItemSelect />
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

        {/* {(dataResult === undefined) "" ?:} */}

        {dataResult?.map((element) => {
          return (
            <>
              <Table>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      {element.korePrlstNm === "" ? "" : "품목명"}
                    </Table.Cell>
                    <Table.Cell>{element.korePrlstNm}</Table.Cell>
                    <Table.Cell>
                      {element.cmtrBlncAmt === "" ? "" : "무역지수"}
                    </Table.Cell>
                    <Table.Cell>{element.cmtrBlncAmt}</Table.Cell>
                    <Table.Cell>
                      {element.cmtrBlncAmt === "" ? "" : "수출품목건수"}
                    </Table.Cell>
                    <Table.Cell>{element.cmtrBlncAmt}</Table.Cell>
                    <Table.Cell>
                      {element.expUsdAmt === "" ? "" : "수출금액"}
                    </Table.Cell>
                    <Table.Cell>{element.expUsdAmt}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      {element.cmtrBlncAmt === "" ? "" : "품목코드"}
                    </Table.Cell>
                    <Table.Cell>{element.cmtrBlncAmt}</Table.Cell>
                    <Table.Cell>
                      {element.impLnCnt === "" ? "" : "수입품목건수"}
                    </Table.Cell>
                    <Table.Cell>{element.impLnCnt}</Table.Cell>
                    <Table.Cell>
                      {element.impUsdAmt === "" ? "" : "수입금액"}
                    </Table.Cell>
                    <Table.Cell>{element.impUsdAmt}</Table.Cell>
                    <Table.Cell>
                      {element.priodTitle === "" ? "" : "기간"}
                    </Table.Cell>
                    <Table.Cell>{element.priodTitle}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </>
          );
        })}
        {/*  <priodTitle>2016</priodTitle>       기간 */}

        <GoBackButton />
        <Button color="black" onClick={() => navigate("/data_list")}>
          뒤로가기
        </Button>
      </Container>
    </>
  );
};
export default CityAndProvinceByItem;
