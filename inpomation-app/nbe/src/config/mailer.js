const nodemailer = require("nodemailer");
require("dotenv").config();

exports.transport = async (req, res, next) => {
  return new Promise((resolve, reject) => {
    resolve(
      nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail=.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.GMAIL_MASTER_EMAIL,
          pass: process.env.GMAIL_MASTER_PASSWORD,
        },
      })
    );
  });
};

exports.sendEmail = async (req, res, next) => {
  const { transPort, email } = req;

  const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const number = generateRandom(11111, 99999);
  const mailOptions = {
    from: process.env.GMAIL_MASTER_EMAIL,
    to: email,
    subject: "이메일 인증입니다.",
    text: `인증코드 : ${number}`,
  };

  return new Promise((resolve, rejects) => {
    try {
      transPort.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.error("sendMail error : ", error);
          resolve(error);
        }
        if (info) {
          console.log("sendMain seccess : ", info);
          resolve({
            code: 200,
            ...info,
            number,
          });
        }
      });
    } catch (err) {
      console.error("send email error : ", err);
    }
  });
};
