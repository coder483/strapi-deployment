module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "dpg-cichumd9aq03rjnja5jg-a.singapore-postgres.render.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi_database_6og6"),
      username: env("DATABASE_USERNAME", "admin"),
      password: env("DATABASE_PASSWORD", "jbI5Ys5JhR727a8jML7QCLochkcoARCq"),
      schema: env("DATABASE_SCHEMA", "public"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL", false),
      },
    },
    debug: false,
  }
});