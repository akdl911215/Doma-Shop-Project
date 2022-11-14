/*
현재는 주로 pbkd2나 bcrypt, scrypt라는 알고리즘으로 비미번호를 암호화하고 있다. 이 중에 노드에서
지원하는 pbkdf2에 대해 알아보자. pbkdf2는 간단히 말하면 기존 문자열에 salt라고 불리는 문자열을 붙인 후
해시 알고리즘을 반복해서 적용하는 것이다.
*/

const crypto = require("crypto");

// randomBytes()로 64바이트 길이의 문자열을 만들어준다. 이것이 salt가 되다.
crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString("base64");
  console.log("salt : ", salt);

  // pbkdf2()에는 순서대로 비밀번호, salt, 반복 횟수, 출력 바이트, 해시 알고리즘을 인자로 넣어준다.
  // 밑에서는 sha512로 변환된 결과값을 다시 sha512로 변환하는 과정을 10만 번 반복한다.
  crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512", (err, key) => {
    console.log("password : ", key.toString("base64"));
  });
});
// pbkdf2는 간단하지만 bcrypt나 scrypt보다 취약하므로 나중에 더 나은 보안이 필요하면
// scrypt 방식을 사용하면 된다.

/*
salt :  fx8YQVzgmycBWELO2RRwTr+5fxrZgxrGXEo1BKyPLPTeVQhZVrHHIE39l8mijQzwAyFA34yf5grMnIb9ImRFeg==
password :  otSmvguH+Pme+c0hYXyTa7qb7mp6cDUgHa28QpsxQTk9YsrRgu4Roz1vUpc3J6i6+6x0BvhoOMRVaxRAfLnjqA==
*/
