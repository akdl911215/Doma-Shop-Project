import React from "react";
import { Table, Container, Checkbox, Button } from "semantic-ui-react";
import GoBackButton from "webapp/common/component/GoHomeButton";
import { useNavigate } from "react-router-dom";

const PublicDataList = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>데이타 번호</Table.HeaderCell>
              <Table.HeaderCell>데이타 이름</Table.HeaderCell>
              <Table.HeaderCell>버튼</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>시도별 수출입실적</Table.Cell>
              <Table.Cell>
                <Button
                  color="black"
                  onClick={() => navigate("data_city_and_province")}
                >
                  들어가기
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>광진구 흡연구역 데이터</Table.Cell>
              <Table.Cell>
                <Button color="black">들어가기</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <GoBackButton />
        <Button color="black" onClick={() => navigate("/admin_main")}>
          뒤로가기
        </Button>
      </Container>
    </>
  );
};
export default PublicDataList;
