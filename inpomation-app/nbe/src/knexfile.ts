// Update with your config settings.

const config = {
    development: {
      client: "mysql",
      connection: {
        host: "127.0.0.1",
        user: "root",
        password: "wjdgus@580-*",
        database: "mall_sync",
      },
      pool: {
        min: 0,
        max: 10,
      },
      migrations: {
        tableName: "knex_migrations",
      },
      // debug: true,
    },
    
    // development: {
    //   client: "mysql",
    //   connection: {
    //     host: "59.9.219.76",
    //     user: "mall_sync",
    //     password: "Kingdome77*",
    //     database: "mall_sync",
    //   },
    //   pool: {
    //     min: 0,
    //     max: 10,
    //   },
    //   migrations: {
    //     tableName: "knex_migrations",
    //   },
    //   // debug: true,
    // },
  
    // production: {
    //   client: "mysql",
    //   connection: {
    //     host: "59.9.219.66",
    //     user: "mall_sync",
    //     password: "Kingdome77*",
    //     database: "mall_sync",
    //   },
    //   pool: {
    //     min: 0,
    //     max: 10,
    //   },
    //   migrations: {
    //     tableName: "knex_migrations",
    //   },
    // },
  
    // sf: {
    //   client: "mysql",
    //   connection: {
    //     host: "59.9.219.72",
    //     user: "mall_sync",
    //     password: "Kingdome77*",
    //     database: "mall_sync",
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10,
    //   },
    //   migrations: {
    //     tableName: "knex_migrations",
    //   },
    // },
  };
  
  export default module.exports;
  module.exports = config;