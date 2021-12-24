import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router";
import { Icon, Label, Menu, Table, Button, Container } from "semantic-ui-react";

const ProductInfomationList = () => {
  const navigate = useNavigate();

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

  const productInfomationReadComponent = () => {
    navigate("/product_infomation_read");
  };

  const productInfomationRegisterComponent = () => {
    navigate("/product_infomation_register");
  };

  return (
    <Container>
      <div style={style.backgroundBoard}>
        <div>
          {colors.map((color) => (
            <Table color={color} key={color}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>순위</Table.HeaderCell>
                  <Table.HeaderCell>사진</Table.HeaderCell>
                  <Table.HeaderCell>제품</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body onClick={productInfomationReadComponent}>
                <Table.Row>
                  <Table.Cell>3</Table.Cell>
                  <Table.Cell>사진</Table.Cell>
                  <Table.Cell>클린 말니 미셀라 딥 클랜징 워터</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>2</Table.Cell>
                  <Link to="/product_infomation_read">
                    <Table.Cell>사진</Table.Cell>
                  </Link>
                  <Table.Cell>클린 말니 미셀라 딥 클랜징 워터</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>1</Table.Cell>
                  <Link to="/product_infomation_read">
                    <Table.Cell>사진</Table.Cell>
                  </Link>
                  <Table.Cell>클린 말니 미셀라 딥 클랜징 워터</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          ))}
        </div>
        <div>
          <Button
            positive
            style={style.button}
            onClick={productInfomationRegisterComponent}
          >
            글작성
            <br />
            (admin전용)
          </Button>
        </div>
      </div>
    </Container>
  );
};
export default ProductInfomationList;
