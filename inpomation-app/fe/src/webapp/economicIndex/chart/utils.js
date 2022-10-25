import { tsvParse, csvParse } from "d3-dsv";
import { timeParse } from "d3-time-format";
console.log("utils tsvParse : ", tsvParse);
console.log("utils timeParse : ", timeParse);

function parseData(parse) {
  console.log("parseData parse :", parse);
  return function (d) {
    console.log("return d : ", d);
    d.date = parse(d.date);
    d.open = +d.open;
    d.high = +d.high;
    d.low = +d.low;
    d.close = +d.close;
    d.volume = +d.volume;

    console.log("utils parseData d : ", d);
    return d;
  };
}

const parseDate = timeParse("%Y-%m-%d");
console.log("utils parseDate : ", parseDate);

export function getData() {
  // react fetch로 데이터 가져와서 then 으로 받는중
  const promiseMSFT = fetch(
    "https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv"
  )
    .then((response) => {
      console.log("response : ", response);
      console.log("response.text() : ", response.text());
    })
    .then((data) => {
      console.log("data : ", data);
      console.log(
        "tsvParse(data, parseData(parseDate)) : ",
        tsvParse(data, parseData(parseDate))
      );
    });

  console.log("utils promiseMSFT : ", promiseMSFT);
  return promiseMSFT;
}
