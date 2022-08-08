import React, { useEffect, useState } from "react";
import { RadialChart } from "react-vis";
import { Form, Button } from "semantic-ui-react";
import styles from "../style/PortfolioAssetRate.module.css";
import { AssetDataAPI, AssetInquiryDataAPI } from "webapp/api/portfolioApi";
import { UserAuthDataAPI } from "webapp/api/userApi";
import { useNavigate } from "react-router-dom";

const PortfolioAssetRate = () => {
  // 자산금액 비율
  const navigate = useNavigate();
  const [asset, setAsset] = useState({
    stock: "",
    stockHoldings: 0,
    buyPrice: 0,
    dividend: 0,
  });
  const [assetRate, setAssetRate] = useState([]);
  const [options, setOptions] = useState("cash");

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`name: ${name}, value: ${value}`);
    setAsset({
      ...asset,
      [name]: value,
    });
  };

  useEffect(() => {
    UserAuthDataAPI()
      .then((res) => {
        console.log("asset rate auth res : ", res);
        if (res?.data?.message === "토큰이 정상입니다.") {
          AssetInquiryDataAPI({
            stock: asset.stock,
            stockHoldings: asset.stockHoldings,
            buyPrice: asset.buyPrice,
            dividend: asset.dividend,
            username: sessionStorage.getItem("username"),
          })
            .then((res) => console.log(res?.data))
            .catch((err) => console.error("cashAssetData error : ", err));
        } else {
          alert("다시 로그인을 시도하세요.");
          sessionRemove();
        }
      })
      .catch((err) => console.error("portfolio cash vs asset error : ", err));
  }, []);

  const assetSubmit = () => {
    UserAuthDataAPI()
      .then((res) => {
        if (res?.data?.message === "토큰이 정상입니다.") {
          console.log("토큰 정상");

          AssetDataAPI({
            stock: asset.stock,
            stockHoldings: asset.stockHoldings,
            buyPrice: asset.buyPrice,
            dividend: asset.dividend,
            username: sessionStorage.getItem("username"),
          })
            .then((res) => console.log(res?.data))
            .catch((err) => console.error("asset error : ", err));
        } else {
          alert("다시 로그인을 시도하세요.");
          sessionRemove();
        }
      })
      .catch((err) => console.error("portfolio asset error : ", err));
  };

  const sessionRemove = () => {
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("roles");
    navigate("/users_signin");
  };

  // id user_id 종목명 종목번호 매수가격 현재가격 배당금액

  return (
    <>
      <div className={styles.box}>
        {/* 차트 */}
        <RadialChart
          data={assetRate}
          showLabels={true}
          width={400}
          height={400}
          radius={130}
        />

        {/* 디스플레이 인풋 */}
        <div>
          <div className={styles.displayBox}>
            <Form size="small">
              <Form.Input
                fluid
                value="종목명"
                className={styles.displayInputBoxName}
                readOnly
              />
            </Form>
          </div>
          <div className={styles.displayBox}>
            <Form size="small">
              <Form.Input
                fluid
                name="stock"
                value={asset.stock}
                className={styles.displayInputBoxValue}
                onChange={handleChange}
              />
            </Form>
          </div>
        </div>

        <div>
          <div className={styles.displayBox}>
            <Form size="small">
              <Form.Input
                fluid
                value="보유 수량"
                className={styles.displayInputBoxName}
                readOnly
              />
            </Form>
          </div>
          <div className={styles.displayBox}>
            <Form size="small">
              <Form.Input
                fluid
                name="stockHoldings"
                value={asset.stockHoldings}
                className={styles.displayInputBoxValue}
                onChange={handleChange}
              />
            </Form>
          </div>
        </div>

        <div>
          <div className={styles.displayBox}>
            <Form size="small">
              <Form.Input
                fluid
                value="매수가격"
                className={styles.displayInputBoxName}
                readOnly
              />
            </Form>
          </div>
          <div className={styles.displayBox}>
            <Form size="small">
              <Form.Input
                fluid
                name="buyPrice"
                value={asset.buyPrice}
                className={styles.displayInputBoxValue}
                onChange={handleChange}
              />
            </Form>
          </div>
        </div>

        <div>
          <div className={styles.displayBox}>
            <Form size="small">
              <Form.Input
                fluid
                value="배당금액"
                className={styles.displayInputBoxName}
                readOnly
              />
            </Form>
          </div>
          <div className={styles.displayBox}>
            <Form size="small">
              <Form.Input
                fluid
                name="dividend"
                value={asset.dividend}
                className={styles.displayInputBoxValue}
                onChange={handleChange}
              />
            </Form>
          </div>
        </div>

        {/* 셀렉트 인풋 서브밋 */}
        <div className={styles.cashAssetBox}>
          <div className={styles.floatBox}>
            <Button type="submit" onClick={assetSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioAssetRate;
