export default {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      user: "root",
      password: "root123",
      database: "coffee",
    },
    searchPath: ["knex", "public"],
    migrations: {
      schema: "public",
      directory: `${__dirname}/src/database/migration/`,
    },
  },

  staging: {},

  production: {},
};
