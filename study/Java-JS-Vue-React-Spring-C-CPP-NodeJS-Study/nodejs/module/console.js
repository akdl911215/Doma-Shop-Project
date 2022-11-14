const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};

console.time("전체 시간");
console.log("평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다.");
console.log(string, number, boolean);
console.error("에러 메시지는 console.error에 담아주세요");

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time("시간 측정");
for (let i = 0; i < 100000; ++i) continue;
console.timeEnd("시간 측정");

const b = () => console.trace("에러 위치 추적");
const a = () => b();
a();

console.timeEnd("전체 시간");

/*
평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다.
abc 1 true
에러 메시지는 console.error에 담아주세요
{ outside: { inside: { key: 'value' } } }
{ outside: { inside: [Object] } }
시간 측정: 1.918ms
Trace: 에러 위치 추적
    at b (C:\Users\luna\Desktop\proproject\Java-JS-Vue-React-Spring-Study\nodejs\module\console.js:24:25)
    at a (C:\Users\luna\Desktop\proproject\Java-JS-Vue-React-Spring-Study\nodejs\module\console.js:25:17)
    at Object.<anonymous> (C:\Users\luna\Desktop\proproject\Java-JS-Vue-React-Spring-Study\nodejs\module\console.js:26:1)
    at Module._compile (node:internal/modules/cjs/loader:1099:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:975:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
전체 시간: 10.061ms
*/
