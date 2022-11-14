process.on("uncaughtException", (err) =>
  console.error("예기치 못한 에러", err)
);

setInterval(() => {
  throw new Error("서버를 고장내주마!");
}, 1000);

setTimeout(() => {
  console.log("실행됩니다");
}, 2000);

/*
process 객체에 uncaughtException 이벤트 리스너를 달아주었다. 처리하지 못한 에러가 발생했을 때 이벤트
리스너가 실행되고 프로세스는 유지된다. uncaughtException 가 없었다면 setTimeout은 실행되지 않는다. (프로세스 종료)

어떻게 보면 uncaughtException 이벤트 리스너로 모든 에러를 처리할 수 있을 것 같아 보이지만, 노드 공식 문서에서는
uncaughtException 이벤트를 최후의 수단으로 사용하라고 말하고 있다. 노드는 uncaughException 이벤트 발생 후 다음 동작이
제대로 동작하는지를 보증하지 않는다. 즉, 복구 작업 코드를 넣어두었떠라도 그것이 동작하는지 확신할 수 없다.

따라서, 단순히 에러 내용을 기록하는 정도로 사용하고 process.exit()로 프로세스를 종료하는 것이 좋다.

에러발생시!! 철저히 기록(로깅)하는 습관을 들이고, 주기적으로 로그를 확인하면서 보완해 나가야한다.
*/
