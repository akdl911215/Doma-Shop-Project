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
import styles from "../style/IvestingInfomationList.module.css";
import { UserAuthDataAPI } from "webapp/api/userApi";
import { padding } from "@mui/system";

const InvestingInfomationList = () => {
  const navigate = useNavigate();

  const colors = ["teal"];
  const [rolesCheck, SetRolesCheck] = useState(null);

  useEffect(() => {
    // UserAuthDataAPI()
    //   .then((res) => SetRolesCheck(res?.data?.roles))
    //   .catch((err) => console.error(`token, roles check error : ${err}`));
  }, []);

  return (
    <>
      {/* <div className={styles.board}>
      </div> */}
      <div className={styles.list}>
        <div className={styles.active}>dds</div>
      </div>
    </>
  );
};
export default InvestingInfomationList;
