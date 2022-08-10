import React, { useEffect, useState } from "react";
import { RadialChart } from "react-vis";
import { Form, Button, Table } from "semantic-ui-react";
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
  const [assetArr, setAsetArr] = useState([]);
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
            username: sessionStorage.getItem("username"),
          })
            .then((res) => {
              console.log("asset inquiry : ", res?.data?.result?.result);
              setAssetRate(res?.data?.result?.result);

              let arr = [];
              for (let i = 0; i < res?.data?.result?.result.length; ++i) {
                const totalPrice =
                  res?.data?.result?.result[i].buy_price *
                  res?.data?.result?.result[i].stock_holdings;
                arr.push({
                  angle: totalPrice,
                  label: res?.data?.result?.result[i].stock,
                  subLabel:
                    totalPrice === 0 ? "" : `보유 금액 ${String(totalPrice)}원`,
                });
              }
              setAsetArr(arr);

              console.log("res in assetArr : ", assetArr);
            })
            .catch((err) => console.error("cashAssetData error : ", err));
        } else {
          alert("다시 로그인을 시도하세요.");
          sessionRemove();
        }
      })
      .catch((err) => console.error("portfolio cash vs asset error : ", err));
  }, []);
  console.log("asset inquiry !! : ", assetRate);
  console.log("assetArr !! : ", assetArr);

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
            .then((res) => {
              console.log("asset res :: ", res?.data);
              console.log("res?.data?.code : ", res?.data?.code);
              if (res?.data?.code === 200) {
                window.location.reload();
              }
            })
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

  const assetArrBody = assetArr.map((el) => {
    return (
      <>
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
      </>
    );
  });

  return (
    <>
      <div className={styles.box}>
        {/* 차트 */}
        <RadialChart
          data={assetArr}
          showLabels={true}
          width={400}
          height={400}
          radius={130}
        />

        {/* 보유 종목 */}
        {assetArr.length === 0 ? (
          ""
        ) : (
          <>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>종목명</Table.HeaderCell>
                  <Table.HeaderCell>보유 수량</Table.HeaderCell>
                  <Table.HeaderCell>매수 가격</Table.HeaderCell>
                  <Table.HeaderCell>총 매수금액</Table.HeaderCell>
                  <Table.HeaderCell>비중</Table.HeaderCell>
                </Table.Row>
                {assetRate.map((el) => {
                  return (
                    <>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>{el.stock}</Table.Cell>
                          <Table.Cell>{el.stock_holdings}</Table.Cell>
                          <Table.Cell>{el.buy_price}</Table.Cell>
                          <Table.Cell>
                            {el.buy_price * el.stock_holdings}
                          </Table.Cell>
                          <Table.Cell>{el.stock}</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </>
                  );
                })}
              </Table.Header>
            </Table>
          </>
        )}

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
