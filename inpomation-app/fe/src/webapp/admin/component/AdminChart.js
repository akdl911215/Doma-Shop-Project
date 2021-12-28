import React, { useState } from "react";
import MixChartGraph from "react-apexcharts";

const AdminChart = () => {
  const [option, setOption] = useState({
    series: [
      {
        name: "일일방문자수(명)",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      },
      {
        name: "일일방문자율(%)",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: [0, 4],
      },
      title: {
        text: "Traffic Sources",
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: [
        "12월 8일",
        "12월 9일",
        "12월 10일",
        "12월 11일",
        "12월 12일",
        "12월 13일",
        "12월 14일",
        "12월 15일",
        "12월 16일",
        "12월 17일",
        "12월 18일",
        "12월 19일",
        "12월 20일",
        "12월 21일",
      ],
      xaxis: {
        type: "String",
      },
      yaxis: [
        {
          title: {
            text: "일일방문자수(명)",
          },
        },
        {
          opposite: true,
          title: {
            text: "일일방문자율(%)",
          },
        },
      ],
    },
  });

  return (
    <div id="chart">
      <MixChartGraph
        options={option.options}
        series={option.series}
        type="line"
        height={350}
      />
      {/* <h1>dd</h1> */}
    </div>
  );
};
export default AdminChart;
