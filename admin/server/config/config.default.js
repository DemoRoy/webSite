'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_sequelize-example';

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'web-development',
    host: '127.0.0.1',
    port: 3306,
    username: "root",
    password: "TryaWcj1314",
  };

  return config;
};
