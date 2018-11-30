'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;

  const Code = app.model.define('code', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    code: STRING,
    created_at: DATE,
    updated_at: DATE,
  });

  return Code;
};
