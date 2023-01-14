module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'rudys_nutrition_strapi'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '75418015'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
