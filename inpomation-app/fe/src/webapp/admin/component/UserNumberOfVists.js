import React from "react";
import { Statistic } from "semantic-ui-react";

const UserNumberOfVists = () => {
  return (
    <>
      <div>
        <Statistic.Group>
          <Statistic>
            <Statistic.Value>150</Statistic.Value>
            <Statistic.Label>오늘 방문자수</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>200</Statistic.Value>
            <Statistic.Label>어제 방문자수</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>876543</Statistic.Value>
            <Statistic.Label>누적 방문자수</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    </>
  );
};
export default UserNumberOfVists;
