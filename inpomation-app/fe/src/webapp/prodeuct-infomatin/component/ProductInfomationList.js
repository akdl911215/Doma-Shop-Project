import React from "react";
import { useNavigate } from "react-router";
import { Button, Container, Card, Image } from "semantic-ui-react";
import SigninButton from "webapp/common/component/SigninButton";
import SignupButton from "webapp/common/component/SignupButton";
import {
  AuaOasisToner,
  SoptCamingGell,
  superAdaptogenFaceToBodyEmulgeon,
} from "webapp/images/index";
import LogoutButton from "webapp/user/component/LogoutButton";
import styles from "webapp/prodeuct-infomatin/style/ProductInfomationList.module.css";

const ProductInfomationList = () => {
  const navigate = useNavigate();

  const colors = ["teal"];

  return (
    <>
      <Container>
        <Card.Group
          itemsPerRow={3}
          onClick={() => navigate("/product_infomation_read")}
          className={styles.ImageCardTextStyle}
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
        </Card.Group>

        <div className={styles.ButtonStyle}>
          <Button
            positive
            onClick={() => navigate("/product_infomation_register")}
          >
            글작성
            <br />
            (admin전용)
          </Button>
          <Button positive onClick={() => navigate("/admin_main")}>
            어드민 전용 페이지 이동
            <br />
            (admin전용)
          </Button>
          <SigninButton />
          <SignupButton />
          <LogoutButton />
        </div>
      </Container>
    </>
  );
};
export default ProductInfomationList;
