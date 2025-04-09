export default {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "api_root",
      database: "postgres",
      port: 5433,
      connectionTimeout: 20000,
    },
    migrations: {
      directory: "../../migrations",
      extension: "js",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
