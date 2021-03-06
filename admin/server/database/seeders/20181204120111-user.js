'use strict';

const MD5 = require('md5');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
  
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      nick_name: 'Roy',
      password: MD5('tryawcj1314'),
      created_at: new Date(),
      updated_at: new Date(),
    },{
      nick_name: 'Luna',
      password: MD5('wcjatry1314'),
      created_at: new Date(),
      updated_at: new Date(),
    }])
  },
  
  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
