const crypto = require("crypto");

exports.cryptoSalt = (req, res, next) => {
  try {
    return crypto.randomBytes(64).toString("base64");
  } catch (err) {
    console.error(`cryptoSalt error : ${err}`);
  }
};

exports.cryptoPbkdf2 = async (req, res, next) => {
  console.log("cryptoPbkdf2 req :: ", req);
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(req.password, req.salt, 100000, 64, "sha512", (err, key) => {
      if (err) {
        console.error(`cryto salt error ${err}`);
        throw err;
      }
      const hashedPassword = key.toString("base64");

      if (hashedPassword === undefined || hashedPassword === "") {
        console.error(`비밀번호가 제대로 입력되지 않았습니다.`);
        throw err;
      }

      resolve(hashedPassword);
    });
  }).catch((reject) => console.error(`reject error : ${reject}`));
};
