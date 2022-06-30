require("dotenv").config();


const dbConfig = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASES,
      port: process.env.DB_PORT,
}

// const dbConfig = {
//       host: '127.0.0.1',
//       user: 'root',
//       password: 'wjdgus@580-',
//       port: 3306,
//       database: 'mall_sync'
//     }

module.exports = dbConfig;
