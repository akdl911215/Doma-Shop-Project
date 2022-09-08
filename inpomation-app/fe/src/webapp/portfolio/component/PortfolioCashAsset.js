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
  const [options, setOptions] = useState("cash");
  const cashVsAssetRatio = [
    {
      angle: Number(cashAsset.cash),
      label: cashAsset.cash === 0 ? "" : "현금",
      subLabel: cashAsset.cash === 0 ? "" : String(cashAsset.cash),
    },
    {
      angle: Number(cashAsset.asset),
      label: cashAsset.asset === 0 ? "" : "자산",
      subLabel: cashAsset.asset === 0 ? "" : String(cashAsset.asset),
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;

    setCashAsset({
      ...cashAsset,
      [name]: value,
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
          alert("다시 로그인을 시도하세요.");
          SessionRemove();
        }
      })
      .catch((err) => console.error("portfolio cash vs asset error : ", err));
  }, []);

  const cashAssetSubmit = () => {
    // 서브밋하면 글자가 이상함 수정하기
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
          alert("다시 로그인을 시도하세요.");
          SessionRemove();
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
            data={cashVsAssetRatio}
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
                      readOnly
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
                      value={`비중 ${cashAsset.cashRatio}%`}
                      className={styles.DisplayInputBoxRatio}
                      readOnly
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
                    readOnly
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
                    value={`비중 ${cashAsset.assetRatio}%`}
                    className={styles.DisplayInputBoxRatio}
                    readOnly
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
