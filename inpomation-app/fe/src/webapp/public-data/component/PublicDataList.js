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
              <Table.Cell>시도별 품목별 수출입실적</Table.Cell>
              <Table.Cell>
                <Button
                  color="black"
                  onClick={() => navigate("data_city_and_province_by_item")}
                >
                  들어가기
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>3</Table.Cell>
              <Table.Cell>시도별 성질별 수출입실적</Table.Cell>
              <Table.Cell>
                <Button
                  color="black"
                  onClick={() => navigate("data_city_and_province_by_nature")}
                >
                  들어가기
                </Button>
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
