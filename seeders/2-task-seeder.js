'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Tasks', [{
                title: 'Pack Boxes',
                description: 'Pack faster',
                category: 'Moving',
                location: 'Lake Forest Park',
                initial_price: 50,
                bid_end_time: new Date(),
                task_start: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                    UserID: 1
            },
            {
                title: 'Mow the lawn',
                description: 'Mow the lawn fast',
                category: 'Yardwork',
                location: 'Seattle',
                initial_price: 100,
                bid_end_time: new Date(),
                task_start: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                    UserID: 2
            },
            {
                title: 'Hang some blinds',
                description: 'Hang some blinds fast',
                category: 'Home',
                location: 'Ballard',
                initial_price: 400,
                bid_end_time: new Date(),
                task_start: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                    UserID: 3
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