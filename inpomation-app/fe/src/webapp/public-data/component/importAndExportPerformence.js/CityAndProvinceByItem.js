import React, { useState, useEffect } from "react";
import { Table, Container, Button } from "semantic-ui-react";
import { CityAndProvinceByItemAPI } from "../../../api/publicDataApi";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import { SidoSelect } from "./common/SidoSelect";
import YearMonthSelect from "./common/YearMonthSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  CityAndProvineceSidoCodeChoice,
  CityAndProvineceYearMonthChoice,
  CityAndProvineceITtemCodeChoice,
} from "webapp/reducers/sidoAndProvince.reduce";
import ItemSelect from "./common/ItemSelect";
import BackButton from "webapp/common/component/BackButton";

// 시도별 품목별 수출입실적
const CityAndProvinceByItem = () => {
  const dispatch = useDispatch();

  const [dataStaticResult, setDataStaticResult] = useState({});
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
      setDataResult(res?.data?.result.result[0].item);
      setDataStaticResult(res?.data?.result.result[0].item[0]);
    })
      .catch((err) => {
        console.error("데이터 오류 : ", err);
      })
      .finally((fi) => console.log("실행완료"));
  };
  const viewResult = dataResult?.map((el) => el);
  viewResult?.splice(0, 1);

  return (
    <>
      <Container>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                품목 선택 <br />
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

        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>기간</Table.Cell>
              <Table.Cell>{dataStaticResult?.priodTitle}</Table.Cell>
              <Table.Cell>수출품목건수</Table.Cell>
              <Table.Cell>{dataStaticResult?.expLnCnt}</Table.Cell>
              <Table.Cell>수출금액</Table.Cell>
              <Table.Cell>{dataStaticResult?.expUsdAmt}</Table.Cell>
              <Table.Cell>{}</Table.Cell>
              <Table.Cell>{}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>무역지수</Table.Cell>
              <Table.Cell>{dataStaticResult?.cmtrBlncAmt}</Table.Cell>
              <Table.Cell>수입품목건수</Table.Cell>
              <Table.Cell>{dataStaticResult?.impLnCnt}</Table.Cell>
              <Table.Cell>수입금액</Table.Cell>
              <Table.Cell>{dataStaticResult?.impUsdAmt}</Table.Cell>
              <Table.Cell>{}</Table.Cell>
              <Table.Cell>{}</Table.Cell>
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
                      {element.korePrlstNm === "" ? "" : "품목명"}
                    </Table.Cell>
                    <Table.Cell>{element.korePrlstNm}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      {element.priodTitle === "" ? "" : "기간"}
                    </Table.Cell>
                    <Table.Cell>{element.priodTitle}</Table.Cell>

                    <Table.Cell>
                      {element.expLnCnt === "" ? "" : "수출품목건수"}
                    </Table.Cell>
                    <Table.Cell>{element.expLnCnt}</Table.Cell>
                    <Table.Cell>
                      {element.expUsdAmt === "" ? "" : "수출금액"}
                    </Table.Cell>
                    <Table.Cell>{element.expUsdAmt}</Table.Cell>
                    <Table.Cell>
                      {element.hsSgn === "" ? "" : "품목코드"}
                    </Table.Cell>
                    <Table.Cell>{element.hsSgn}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      {element.cmtrBlncAmt === "" ? "" : "무역지수"}
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
                    <Table.Cell>{}</Table.Cell>
                    <Table.Cell>{}</Table.Cell>
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
export default CityAndProvinceByItem;
