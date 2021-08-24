require('dotenv').config({path:'./config/.env'});
const env = process.env;

  const development = {
    username: env.MYSQL_USER,
    password: env.MYSQL_PASS,
    database: env.MYSQL_NAME,
    host: env.MYSQL_HOST,
    dialect: env.MYSQL_DIALET,
    logging: false
  };
  const test = {
    username: env.MYSQL_USER,
    password: env.MYSQL_PASS,
    database: env.MYSQL_NAME,
    host: env.MYSQL_HOST,
    dialect: env.MYSQL_DIALET
  };
  const production= {
    username: env.MYSQL_USER,
    password: env.MYSQL_PASS,
    database: env.MYSQL_NAME,
    host: env.MYSQL_HOST,
    dialect: env.MYSQL_DIALET
  };

module.exports = {development, production, test};