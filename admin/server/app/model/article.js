'use strict';

module.exports = app => {
  const { STRING, TEXT, INTEGER, DATE } = app.Sequelize;
  
  const Article = app.model.define('article', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: STRING(64),
    abstract: STRING(54),
    html: TEXT,
    raw: TEXT,
    created_at: DATE,
    updated_at: DATE,
  });

  return Article;
};
