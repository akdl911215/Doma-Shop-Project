import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button, Container, Card, Image } from "semantic-ui-react";
import SigninButton from "../../common/component/SigninButton";
import SignupButton from "../../common/component/SignupButton";
import {
  AuaOasisToner,
  SoptCamingGell,
  superAdaptogenFaceToBodyEmulgeon,
} from "webapp/images/index";
import SignOutButton from "webapp/common/component/SignOutButton";
import styles from "../style/ivestingInfomationList.module.css";
import { UserAuthDataAPI } from "webapp/api/userApi";

const InvestingInfomationList = () => {
  const navigate = useNavigate();

  const colors = ["teal"];
  const [rolesCheck, SetRolesCheck] = useState(null);

  useEffect(() => {
    // SetRolesCheck(sessionStorage.getItem("roles"));
    UserAuthDataAPI(sessionStorage.getItem("jwtToken")).then((res) => {
      console.log("res :: ", res);
      console.log("res?.data?.roles :: ", res?.data?.roles);
      SetRolesCheck(res?.data?.roles);
    });
  }, []);

  return (
    <>
      <Container>
        <Card.Group
          itemsPerRow={5}
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
          {rolesCheck === "MASTER" ? (
            <>
              <Button
                secondary
                onClick={() => navigate("/product_infomation_register")}
              >
                글작성
                <br />
                (admin전용)
              </Button>
              <Button secondary onClick={() => navigate("/admin_main")}>
                어드민 전용 페이지 이동
                <br />
                (admin전용)
              </Button>
            </>
          ) : (
            ""
          )}

          {rolesCheck === null ? <SigninButton /> : <SignOutButton />}
          <SignupButton />
        </div>
      </Container>
    </>
  );
};
export default InvestingInfomationList;
