/*
setInterval을 사용한 것은 프로세스가 멈추는지 여부를 체크하기 위해서다. 프로세스가 에러로 인해
멈추면 setInterval도 멈출 것이다. setInterval 내부에 throw new Error()로 에러를 강제로 발생시킨 상황.

에러는 발생하지만 try catchj로 잡을 수 있고 setInterval도 직접 멈추기 전까찌 계속 시행된다. 이렇게 에러가 발생할 것
같은 부분은 미리 try catch로 감싸주면 된다.
*/

setInterval(() => {
  console.log("시작");
  try {
    throw new Error("서버를 고장내주마!");
  } catch (err) {
    console.error(err);
  }
}, 1000);

/*
시작
Error: 서버를 고장내주마!
    at Timeout._onTimeout (C:\Users\luna\Desktop\proproject\Java-JS-Vue-React-Spring-Study\nodejs\exceptionTest\error1.js:4:11)
    at listOnTimeout (node:internal/timers:559:17)
    at processTimers (node:internal/timers:502:7)

무한반복!
*/
