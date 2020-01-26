'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        username: 'adam',
        password: 'coolstuff',
        email: 'adam@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'tasi',
        password: 'coolstuff',
        email: 'tasi@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        username: 'nate',
        password: 'coolstuff',
        email: 'nate@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        username: 'henry',
        password: 'coolstuff',
        email: 'henry@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};