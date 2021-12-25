import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router";
import {
  Icon,
  Label,
  Menu,
  Table,
  Button,
  Container,
  Card,
  Image,
} from "semantic-ui-react";
import SigninButtonComponent from "webapp/common/component/SigninButtonComponent";
import SignupButtonComponent from "webapp/common/component/SignupButtonComponent";
import {
  AuaOasisToner,
  SoptCamingGell,
  superAdaptogenFaceToBodyEmulgeon,
} from "webapp/images/index";

const ProductInfomationList = () => {
  const navigate = useNavigate();

  const colors = ["teal"];
  const style = {
    button: {
      float: "right",
    },

    imageCardTextStyle: {
      textAlign: "center",
    },
  };

  const productInfomationReadComponent = () => {
    navigate("/product_infomation_read");
  };

  const productInfomationRegisterComponent = () => {
    navigate("/product_infomation_register");
  };

  const adminMainComponentButton = () => {
    navigate("/admin_main");
  };

  // const src = "/images/wireframe/white-image.png";

  return (
    <>
      <Container>
        <Card.Group
          itemsPerRow={3}
          onClick={productInfomationReadComponent}
          style={style.imageCardTextStyle}
        >
          <Card>
            <Image src={AuaOasisToner} wrapped ui={false} />
            <Card.Content>
              <Card.Description>아쿠아 오아시스 토너</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Image src={SoptCamingGell} wrapped ui={false} />
            <Card.Content>
              <Card.Description>
                스팟 카밍 젤<br />
                [트러블 케어]
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Image src={superAdaptogenFaceToBodyEmulgeon} wrapped ui={false} />
            <Card.Content>
              <Card.Description>
                슈퍼 아답토젠 페이스 투<br />
                바디 에멀젼
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image src={AuaOasisToner} wrapped ui={false} />
            <Card.Content>
              <Card.Description>아쿠아 오아시스 토너</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Image src={SoptCamingGell} wrapped ui={false} />
            <Card.Content>
              <Card.Description>
                스팟 카밍 젤<br />
                [트러블 케어]
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Image src={superAdaptogenFaceToBodyEmulgeon} wrapped ui={false} />
            <Card.Content>
              <Card.Description>
                슈퍼 아답토젠 페이스 투<br />
                바디 에멀젼
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image src={AuaOasisToner} wrapped ui={false} />
            <Card.Content>
              <Card.Description>아쿠아 오아시스 토너</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Image src={SoptCamingGell} wrapped ui={false} />
            <Card.Content>
              <Card.Description>
                스팟 카밍 젤<br />
                [트러블 케어]
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Image src={superAdaptogenFaceToBodyEmulgeon} wrapped ui={false} />
            <Card.Content>
              <Card.Description>
                슈퍼 아답토젠 페이스 투<br />
                바디 에멀젼
              </Card.Description>
            </Card.Content>
          </Card>

          {/* <Card color="yellow" image={superAdaptogenFaceToBodyEmulgeon} />
        <Card color="red" image={AuaOasisToner} />
        <Card color="orange" image={SoptCamingGell} />
        <Card color="yellow" image={superAdaptogenFaceToBodyEmulgeon} />
        <Card color="red" image={AuaOasisToner} />
        <Card color="orange" image={SoptCamingGell} />
        <Card color="yellow" image={superAdaptogenFaceToBodyEmulgeon} />
        <Card color="red" image={AuaOasisToner} />
        <Card color="orange" image={SoptCamingGell} />
        <Card color="yellow" image={superAdaptogenFaceToBodyEmulgeon} /> */}
        </Card.Group>
        {/* <div style={style.backgroundBoard}>
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
        </div> */}

        <div style={style.button}>
          <Button positive onClick={productInfomationRegisterComponent}>
            글작성
            <br />
            (admin전용)
          </Button>
          <Button positive onClick={adminMainComponentButton}>
            어드민 전용 페이지 이동
            <br />
            (admin전용)
          </Button>
          <SigninButtonComponent />
          <SignupButtonComponent />
        </div>
        {/* </div > */}
      </Container>
    </>
  );
};
export default ProductInfomationList;
