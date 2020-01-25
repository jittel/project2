'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      bid_price: 100.50,
      awarded: false,
      UserId: 3,
      TaskId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bid_price: 90.25,
      awarded: false,
      UserId: 2,
      TaskId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bid_price: 200.15,
      awarded: true,
      UserId: 1,
      TaskId: 3,
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
