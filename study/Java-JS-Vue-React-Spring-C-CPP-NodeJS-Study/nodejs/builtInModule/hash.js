const crypto = require("crypto");

// createHash(알고리즘) : 사용할 해시 알고리즘을 넣어준다. md5, sha1, sha256, sha512 등이 가능하지만,
// md5와 sha1은 이미 취약점이 발견되었다. 현재는 sha512 정도로 충분하지만, 나중에 sha512마저도 취약해지면
// 더 강화된 알고리즘으로 바꿔야 한다.

// udpate(문자열) : 변환할 문자열을 넣어준다

// digest(인코딩) : 인코딩할 알고리즘을 넣어준다. base64, hex, latin1이 주로 사용되는데, 그중 base64가 결과
// 문자열이 가장 짧아 애용된다. 결과물로 변환된 문자열을 반환한다.

console.log(
  "base64 : ",
  crypto.createHash("sha512").update("비밀번호").digest("base64")
);
console.log(
  "hex : ",
  crypto.createHash("sha512").update("비밀번호").digest("hex")
);

console.log(
  "base64 : ",
  crypto.createHash("sha512").update("다른 비밀번호").digest("base64")
);

/*
base64 :  dvfV6nyLRRt3NxKSlTHOkkEGgqW2HRtfu19Ou/psUXvwlebbXCboxIPmDYOFRIpqav2eUTBFuHaZri5x+usy1g==
hex :  76f7d5ea7c8b451b773712929531ce92410682a5b61d1b5fbb5f4ebbfa6c517bf095e6db5c26e8c483e60d8385448a6a6afd9e513045b87699ae2e71faeb32d6
base64 :  cx49cjC8ctKtMzwJGBY853itZeb6qxzXGvuUJkbWTGn5VXAFbAwXGEOxU2Qksoj+aM2GWPhc1O7mmkyohXMsQw==
*/
