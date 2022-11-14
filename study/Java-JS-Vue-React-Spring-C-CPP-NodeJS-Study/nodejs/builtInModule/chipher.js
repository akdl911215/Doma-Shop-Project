const crypto = require("crypto");

const cipher = crypto.createCipher("aes-256-cbc", "열쇠");
// crypto.createCipher(알고리즘, 키) : 암호화 알고리즘과 키를 넣어준다. 암호화 알고리즘은 aes-256-cbc를
// 사용했다. 다른 알고리즘을 사용해도 된다. 사용 가능한 아고리즘 목록은 crypto.getCiphers()를 하면 볼 수 있다.
let result = cipher.update("암호화할 문장", "utf8", "base64");
// cipher.update(문자열, 인코딩, 출력 인코딩) : 암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩을 넣어준다.
// 보통 문자열은 utf8 인코딩을, 암호는 base64를 많이 사용한다.
result += cipher.final("base64");
// cipher.final(출력 인코딩) : 출력 결과물의 인코딩을 넣어주면 암호화가 완료
console.log("암호화 : ", result);

const decipher = crypto.createDecipher("aes-256-cbc", "열쇠");
// crypto.createDecipher(알고리즘, 키) : 복호화할 때 사용. 암호화할 때 사용했던 알고리즘과
// 키를 그대로 넣어주어야 한다.
let result2 = decipher.update(result, "base64", "utf8");
// decipher.update(문자열, 인코딩, 출력 인코딩) : 암호화한 문장, 그 문장의 인코딩, 복호화할 인코딩을 넣어준다.
// creaeCipher의 update()에서 utf, base64 순으로 넣었따면 createDecipher의 update()에서는 base64, utf8 순으로 넣으면 된다.
result2 += decipher.final("utf8");
// decipher.final(출력 인코딩) : 복호화 결과물의 인코딩을 넣어준다.
console.log("복호화 : ", result2);

// nodejs에서 다양한 암호화를 제공
// 노드 공식 문서 : https://nodejs.org/api/crypto.html

console.log("사용할 수 있는 암호화 알고리즘 : ", crypto.getCiphers());

/*
암호화 :  ooogp/vac4l26/ezEglCluFn9vjfixVtCUCaqiaMr28=
복호화 :  암호화할 문장
사용할 수 있는 암호화 알고리즘 :  [
  'aes-128-cbc',
  'aes-128-cbc-hmac-sha1',
  'aes-128-cbc-hmac-sha256',       
  'aes-128-ccm',
  'aes-128-cfb',
  'aes-128-cfb1',
  'aes-128-cfb8',
  'aes-128-ctr',
  'aes-128-ecb',
  'aes-128-gcm',
  'aes-128-ocb',
  'aes-128-ofb',
  'aes-128-xts',
  'aes-192-cbc',
  'aes-192-ccm',
  'aes-192-cfb',
  'aes-192-cfb1',
  'aes-192-cfb8',
  'aes-192-ctr',
  'aes-192-ecb',
  'aes-192-gcm',
  'aes-192-ocb',
  'aes-192-ofb',
  'aes-256-cbc',
  'aes-256-cbc-hmac-sha1',
  'aes-256-cbc-hmac-sha256',
  'aes-256-ccm',
  'aes-256-cfb',
  'aes-256-cfb1',
  'aes-256-cfb8',
  'aes-256-ctr',
  'aes-256-ecb',
  'aes-256-gcm',
  'aes-256-ocb',
  'aes-256-ofb',
  'aes-256-xts',
  'aes128',
  'aes128-wrap',
  'aes192',
  'aes192-wrap',
  'aes256',
  'aes256-wrap',
  'aria-128-cbc',
  'aria-128-ccm',
  'aria-128-cfb',
  'aria-128-cfb1',
  'aria-128-cfb8',
  'aria-128-ctr',
  'aria-128-ecb',
  'aria-128-gcm',
  'aria-128-ofb',
  'aria-192-cbc',
  'aria-192-ccm',
  'aria-192-cfb',
  'aria-192-cfb1',
  'aria-192-cfb8',
  'aria-192-ctr',
  'aria-192-ecb',
  'aria-192-gcm',
  'aria-192-ofb',
  'aria-256-cbc',
  'aria-256-ccm',
  'aria-256-cfb',
  'aria-256-cfb1',
  'aria-256-cfb8',
  'aria-256-ctr',
  'aria-256-ecb',
  'aria-256-gcm',
  'aria-256-ofb',
  'aria128',
  'aria192',
  'aria256',
  'bf',
  'bf-cbc',
  'bf-cfb',
  'bf-ecb',
  'bf-ofb',
  'blowfish',
  'camellia-128-cbc',
  'camellia-128-cfb',
  'camellia-128-cfb1',
  'camellia-128-cfb8',
  'camellia-128-ctr',
  'camellia-128-ecb',
  'camellia-128-ofb',
  'camellia-192-cbc',
  'camellia-192-cfb',
  'camellia-192-cfb1',
  'camellia-192-cfb8',
  'camellia-192-ctr',
  'camellia-192-ecb',
  'camellia-192-ofb',
  'camellia-256-cbc',
  'camellia-256-cfb',
  'camellia-256-cfb1',
  'camellia-256-cfb8',
  'camellia-256-ctr',
  'camellia-256-ecb',
  'camellia-256-ofb',
  'camellia128',
  ... 75 more items
]
*/
