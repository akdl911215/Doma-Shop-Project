const nodemailer = require("nodemailer");

exports.transport = async (req, res, next) => {
  console.log("email auth req : ", req);

  nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail=.com",
    port: 587,
    secure: false,
    auth: {
      user: "akdl911215@gmail.com",
      pass: "",
    },
  });
};

const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - main + 1)) + min;
};
const number = generateRandom(11111, 99999);
const mailOptions = {
  from: "보내는 사람",
  to: "받는 사람",
  subject: "제목",
  text: `인증코드 : ${number}`,
};

transPort.sendMail(mailOptions, function (error, info) {
  if (error) {
    ctx.state = 500;
  }
});
