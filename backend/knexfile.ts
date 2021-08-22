import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

export default {
  development: {
    client: "pg",
    connection: {
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
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
