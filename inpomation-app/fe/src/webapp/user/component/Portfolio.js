import React from "react";
import { RadialChart } from "react-vis";
import { Form } from "semantic-ui-react";

const Portfolio = () => {
  // 포트폴리오 비율 현금 vs 자산
  // 자산금액 비율
  // 배당 및 월세 1년 비율
  const cashVsAssetRatio = [
    { angle: 122 },
    { angle: 120 },
    { angle: 22 },
    { angle: 200 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  return (
    <>
      <RadialChart data={cashVsAssetRatio} width={300} height={300} />
      <Form size="small">
        <Form.Input
          fluid
          icon="user"
          name="username"
          iconPosition="left"
          placeholder="E-mail address"
          onChange={handleChange}
        />
      </Form>
    </>
  );
};
export default Portfolio;
