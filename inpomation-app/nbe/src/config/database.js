require("dotenv").config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASES,
  port: process.env.DB_PORT,
  dateStrings: "date",
};

module.exports = dbConfig;
