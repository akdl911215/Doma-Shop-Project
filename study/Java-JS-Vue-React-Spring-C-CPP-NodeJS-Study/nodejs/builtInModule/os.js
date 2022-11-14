const os = require("os");

console.log("운영체제 정보 -----------------------------------------");
console.log("os.arch() : ", os.arch()); // 아키텍처 정보이다.
console.log("os.platform() : ", os.platform()); // 운영체제 플래폼 정보이다. linux나 darwin, freebsb 등의 값일 수 있다.
console.log("os.type() : ", os.type()); // 운영체제의 종류
console.log("os.uptime() : ", os.uptime()); // 운영체제 부팅 이후 흐른 시간(초)를 보여준다. procss.uptime()은 노드의 실행 시간
console.log("os.hostname() : ", os.hostname()); // 컴퓨터의 이름
console.log("os.release() : ", os.release()); // 운영체제의 버전

console.log("경로 --------------------------------------------------");
console.log("os.homedir() : ", os.homedir()); // 홈 디렉토리 경로
console.log("os.tmpdir() : ", os.tmpdir()); // 임시 파일 저장 경로

console.log("cpu 정보 -----------------------------------------------");
console.log("os.cpus() : ", os.cpus()); // 컴퓨터의 코어 정보
console.log("os.cpus().length : ", os.cpus().length);

console.log("메모리 정보 ---------------------------------------------");
console.log("os.freemem() : ", os.freemem()); // 사용 가능한 메모리(RAM)
console.log("os.totalmem() : ", os.totalmem()); // 전체 메모리 용량

/*
운영체제 정보 -----------------------------------------
os.arch() :  x64       
os.platform() :  win32 
os.type() :  Windows_NT
os.uptime() :  586644
os.hostname() :  DESKTOP-936HSRB
os.release() :  10.0.19044
경로 -------------------------------------------------- 
os.homedir() :  C:\Users\luna
os.tmpdir() :  C:\Users\luna\AppData\Local\Temp
cpu 정보 -----------------------------------------------
os.cpus() :  [
  {
    model: 'Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz',
    speed: 2904,
    times: {
      user: 7911609,
      nice: 0,
      sys: 8858671,
      idle: 569874187,
      irq: 367265
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz',
    speed: 2904,
    times: {
      user: 11824203,
      nice: 0,
      sys: 15511046,
      idle: 559308968,
      irq: 79765
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz',
    speed: 2904,
    times: {
      user: 14190171,
      nice: 0,
      sys: 9844187,
      idle: 562609859,
      irq: 59453
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz',
    speed: 2904,
    times: {
      user: 5462812,
      nice: 0,
      sys: 4409593,
      idle: 576771812,
      irq: 75015
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz',
    speed: 2904,
    times: {
      user: 5516000,
      nice: 0,
      sys: 4070406,
      idle: 577057812,
      irq: 68484
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz',
    speed: 2904,
    times: {
      user: 8232875,
      nice: 0,
      sys: 8721375,
      idle: 569689968,
      irq: 86187
    }
  }
]
os.cpus().length :  6
메모리 정보 ---------------------------------------------
os.freemem() :  8769474560
os.totalmem() :  17112727552
*/
