'use strict';

// had enabled by egg
// exports.static = true;
// 数据库操作
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

// 参数校验
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
