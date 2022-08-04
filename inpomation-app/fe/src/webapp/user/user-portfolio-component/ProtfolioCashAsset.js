import React, { useState } from "react";
import { RadialChart } from "react-vis";
import { Form, Button } from "semantic-ui-react";

const ProtfolioCashAsset = () => {
  // 포트폴리오 비율 현금 vs 자산
  const [cashAsset, setCashAsset] = useState({
    cash: 0,
    asset: 0,
  });
  const [options, setOptions] = useState("cash");
  const cashVsAssetRatio = [
    { angle: cashAsset.cash },
    { angle: cashAsset.asset },
  ];
  const handleChange = (e) => {
    const { value } = e.target;
    setCashAsset({
      ...cashAsset,
      [options]: value,
    });
  };

  return (
    <>
      <RadialChart data={cashVsAssetRatio} width={300} height={300} />
      <select name="cashAsset" onChange={(e) => setOptions(e.target.value)}>
        <option value="cash" selected="selected">
          현금
        </option>
        <option value="asset">자산</option>
      </select>
      <Form size="small">
        <Form.Input fluid name="cash" onChange={handleChange} />
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};
export default ProtfolioCashAsset;
