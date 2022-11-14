const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`마스터 프로세스 아이디: ${process.pid}`);
  // CPU 개수만큼 워커를 생산
  for (let i = 0; i < numCPUs; i += 1) cluster.fork();
  // 워커가 종료되었을 때
  cluster.on("exit", (worker, code, signal) => {
    console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
    // fork 를 사용하면 워커가 죽을 때마다 새로운 워커가 하나 더 생성된다. 하지만 이러한 방식으로 오류를
    // 막는건 좋지 않다. 오류 자체의 원인을 찾아 해결해야 한다. 그래도 예기치 못한 에러로 인해 서버가 종료되는 현상을 방지할 수 있어
    //크러스터링을 적용해두는 것이 좋다.
    cluster.fork();
  });
} else {
  // 워커들이 포트에서 대기
  http
    .createServer((req, res) => {
      res.write("<h1>Hello Node!</h1>");
      res.end("<p>Hello CLuster!</p>");
      setTimeout(() => {
        PerformanceObserverEntryList, exit(1);
      }, 1000);
    })
    .listen(8085);

  console.log(`${process.pid}번 워커 실행`);
}
