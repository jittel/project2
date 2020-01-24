'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [{
        title: 'Pack Boxes',
        description: 'Pack faster',
        category: 'Moving',
        location: 'Lake Forest Park',
        bid_end_time: new Date(),
        task_start: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
        // UserID: 1
      },
      {
        title: 'Mow the lawn',
        description: 'Mow the lawn fast',
        category: 'Yardwork',
        location: 'Seattle',
        bid_end_time: new Date(),
        task_start: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
        // UserID: 2
      },
      {
        title: 'Hang some blinds',
        description: 'Hang some blinds fast',
        category: 'Home',
        location: 'Ballard',
        bid_end_time: new Date(),
        task_start: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
        // UserID: 3
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