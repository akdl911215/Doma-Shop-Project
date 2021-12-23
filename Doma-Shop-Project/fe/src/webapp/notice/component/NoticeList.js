import React from "react";
import { Link } from "react-router-dom";
import { Icon, Label, Menu, Table, Button, Container } from "semantic-ui-react";

const NoticeList = () => {
  const [searchType, setSearchType] = React.useState("");

  const handleChange = (event) => {
    setSearchType(event.target.value);
  };

  const colors = ["teal"];
  const style = {
    backgroundBoard: {
      width: "100%",
      maxWidth: "100rem",
      margin: "auto",
    },
    button: {
      float: "right",
    },
  };

  return (
    <Container>
      <div style={style.backgroundBoard}>
        <div>
          {colors.map((color) => (
            <Table color={color} key={color}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>번호</Table.HeaderCell>
                  <Table.HeaderCell>제목</Table.HeaderCell>
                  <Table.HeaderCell>글쓴이</Table.HeaderCell>
                  <Table.HeaderCell>날짜</Table.HeaderCell>
                  <Table.HeaderCell>조회수</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>3</Table.Cell>
                  <Link to="/notice_modify">
                    <Table.Cell>공지사항3</Table.Cell>
                  </Link>
                  <Table.Cell>운영자3</Table.Cell>
                  <Table.Cell>2021년12월20일</Table.Cell>
                  <Table.Cell>1234</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>2</Table.Cell>
                  <Link to="/notice_modify">
                    <Table.Cell>공지사항2</Table.Cell>
                  </Link>
                  <Table.Cell>운영자2</Table.Cell>
                  <Table.Cell>2021년12월20일</Table.Cell>
                  <Table.Cell>1234</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>1</Table.Cell>
                  <Link to="/notice_modify">
                    <Table.Cell>공지사항1</Table.Cell>
                  </Link>
                  <Table.Cell>운영자1</Table.Cell>
                  <Table.Cell>2021년12월20일</Table.Cell>
                  <Table.Cell>1234</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          ))}
        </div>
        <div>
          <Link to="/notice_register">
            <Button positive style={style.button}>
              글작성
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
export default NoticeList;
