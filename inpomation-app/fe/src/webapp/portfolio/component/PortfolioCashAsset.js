import React, { useEffect, useState } from "react";
import { RadialChart } from "react-vis";
import { Form, Button, Container } from "semantic-ui-react";
import styles from "../style/PortfolioCashAsset.module.css";
import {
  CashAssetDataAPI,
  FortfolioInquiryDataAPI,
} from "webapp/api/portfolioApi";
import { UserAuthDataAPI } from "webapp/api/userApi";
import { useNavigate } from "react-router-dom";
import { SessionRemove } from "webapp/common/component/SessionRemove";

const PortfolioCashAsset = () => {
  const navigate = useNavigate();
  // 포트폴리오 비율 현금 vs 자산
  const [cashAsset, setCashAsset] = useState({
    cash: 0,
    asset: 0,
    cashRatio: 0,
    assetRatio: 0,
  });
  useEffect(
    () =>
      console.log(
        "cashAsset : ",
        cashAsset,
        " cashVsAssetNull : ",
        cashVsAssetNull,
        " cashVsAssetRatio : ",
        cashVsAssetRatio
      ),
    [cashAsset]
  );

  // const [options, setOptions] = useState("cash");
  const cashVsAssetRatio = [
    {
      angle: cashAsset.cash === undefined ? 0 : cashAsset.cash,
      label: cashAsset.cash === undefined ? null : "현금",
      subLabel: cashAsset.cash === undefined ? 0 : cashAsset.cash,
    },
    {
      angle: cashAsset.asset === undefined ? 0 : cashAsset.asset,
      label: cashAsset.asset === undefined ? null : "자산",
      subLabel: cashAsset.asset === undefined ? 0 : cashAsset.asset,
    },
  ];
  const cashVsAssetNull = [
    {
      angle: 1,
      label: null,
      subLabel: null,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`name : ${name}, value : ${value}`);

    setCashAsset({
      ...cashAsset,
      [name]: value.replace(/[^0-9]/g, ""),
    });
  };

  useEffect(() => {
    UserAuthDataAPI()
      .then((res) => {
        if (res?.data?.code === 200) {
          FortfolioInquiryDataAPI({
            username: sessionStorage.getItem("username"),
          })
            .then((res) => setCashAsset(res?.data))
            .catch((err) => console.error("cashAssetData error : ", err));
        } else {
          const signin = window.confirm("다시 로그인을 시도하세요.");

          if (signin) {
            navigate("/users_signin");
            SessionRemove();
          }
        }
      })
      .catch((err) => console.error("portfolio cash vs asset error : ", err));
  }, []);

  const cashAssetSubmit = () => {
    UserAuthDataAPI()
      .then((res) => {
        if (res?.data?.code === 200) {
          CashAssetDataAPI({
            cash: cashAsset.cash,
            asset: Number(cashAsset.asset),
            username: sessionStorage.getItem("username"),
          })
            .then((res) => {
              setCashAsset(res?.data);
              if (res?.status === 200) window.location.reload();
            })
            .catch((err) => console.error("cashAssetData error : ", err));
        } else {
          const signin = window.confirm("다시 로그인을 시도하세요.");

          if (signin) {
            navigate("/users_signin");
            SessionRemove();
          }
        }
      })
      .catch((err) => console.error("portfolio cash vs asset error : ", err));
  };

  return (
    <>
      <Container>
        <div className={styles.Box}>
          {/* 차트 */}
          <RadialChart
            data={
              cashAsset?.asset !== undefined || cashAsset?.cash !== undefined
                ? cashVsAssetRatio
                : cashVsAssetNull
            }
            showLabels={true}
            width={400}
            height={400}
            radius={130}
            className={styles.ChartBox}
          />

          {/* 디스플레이 인풋 */}
          <div className={styles.InputTotalBox}>
            <div className={styles.FloatClear}>
              <div>
                <div className={styles.displayBox}>
                  <Form size="small">
                    <Form.Input
                      fluid
                      value="현금"
                      className={styles.DisplayInputBoxName}
                      readOnly={true}
                    />
                  </Form>
                </div>
                <div className={styles.displayBox}>
                  <Form size="small">
                    <Form.Input
                      fluid
                      name="cash"
                      value={cashAsset.cash}
                      className={styles.DisplayInputBoxValue}
                      onChange={handleChange}
                    />
                  </Form>
                </div>
                <div className={styles.displayBox}>
                  <Form size="small">
                    <Form.Input
                      fluid
                      value={`비중 ${
                        cashAsset.cashRatio === null ? 0 : cashAsset.cashRatio
                      }%`}
                      className={styles.DisplayInputBoxRatio}
                      readOnly={true}
                    />
                  </Form>
                </div>
              </div>
            </div>

            <div className={styles.FloatClear}>
              <div className={styles.displayBox}>
                <Form size="small">
                  <Form.Input
                    fluid
                    value="자산"
                    className={styles.DisplayInputBoxName}
                    readOnly={true}
                  />
                </Form>
              </div>
              <div className={styles.displayBox}>
                <Form size="small">
                  <Form.Input
                    fluid
                    name="asset"
                    value={cashAsset.asset}
                    className={styles.DisplayInputBoxValue}
                    onChange={handleChange}
                  />
                </Form>
              </div>
              <div className={styles.displayBox}>
                <Form size="small">
                  <Form.Input
                    fluid
                    value={`비중 ${
                      cashAsset.assetRatio === null ? 0 : cashAsset.assetRatio
                    }%`}
                    className={styles.DisplayInputBoxRatio}
                    readOnly={true}
                  />
                </Form>
              </div>
            </div>
            <div className={styles.SubmitButton}>
              <Button type="submit" onClick={cashAssetSubmit}>
                Submit
              </Button>
            </div>
          </div>
          {/* 셀렉트 인풋 서브밋 */}
          {/* <div className={styles.CashAssetBox}>
          <div className={styles.FloatBox}>
            <select
              name="cashAsset"
              onChange={(e) => setOptions(e.target.value)}
            >
              <option value="cash">현금</option>
              <option value="asset">자산</option>
            </select>
          </div>
          <div className={styles.InputBox}>
            <Form size="small">
              <Form.Input fluid name="cash" onChange={handleChange} />
            </Form>
          </div>
          <div className={styles.FloatBox}>
            <Button type="submit" onClick={cashAssetSubmit}>
              Submit
            </Button>
          </div>
        </div> */}
        </div>
      </Container>
    </>
  );
};
export default PortfolioCashAsset;
