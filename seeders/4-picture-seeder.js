'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Pictures', [{
                link: "https://picsum.photos/200",
                createdAt: new Date(),
                updatedAt: new Date(),
                TaskId: 1
            },
            {
                link: "https://picsum.photos/200",
                createdAt: new Date(),
                updatedAt: new Date(),
                TaskId: 2
            }, {
                link: "https://picsum.photos/200",
                createdAt: new Date(),
                updatedAt: new Date(),
                TaskId: 3
            },
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