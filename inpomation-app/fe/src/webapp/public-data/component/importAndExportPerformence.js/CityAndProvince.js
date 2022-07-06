import React, { useState } from "react";
import { Table, Container, Checkbox, Button } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CityAndProvince = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
                <select name="sidoCode" id="sidoCode">
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
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </Table.Cell>
              <Table.Cell>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </Table.Cell>
              <Table.Cell>
                <Button color="black">조회</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </>
  );
};
export default CityAndProvince;
