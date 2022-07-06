import React from "react";
import { Table, Container, Checkbox, Button } from "semantic-ui-react";

const PublicDataList = () => {
  const color = "";
  return (
    <>
      <Container>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>체크박스</Table.HeaderCell>
              <Table.HeaderCell>회원번호</Table.HeaderCell>
              <Table.HeaderCell>아이디</Table.HeaderCell>
              <Table.HeaderCell>비밀번호</Table.HeaderCell>
              <Table.HeaderCell>이름</Table.HeaderCell>
              <Table.HeaderCell>주소</Table.HeaderCell>
              <Table.HeaderCell>이메일</Table.HeaderCell>
              <Table.HeaderCell>핸드폰번호</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>3</Table.Cell>
              <Table.Cell>4</Table.Cell>
              <Table.Cell>5</Table.Cell>
              <Table.Cell>6</Table.Cell>
              <Table.Cell>7</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </>
  );
};
export default PublicDataList;
