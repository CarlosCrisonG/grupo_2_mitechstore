'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('colors_has_products', [{
      products_id: 4,
      colors_id: 1
    }, {
      products_id: 5,
      colors_id: 6
    }, {
      products_id: 6,
      colors_id: 3
    }, {
      products_id: 7,
      colors_id: 6
    }, {
      products_id: 8,
      colors_id: 2
    }, {
      products_id: 9,
      colors_id: 1
    }, {
      products_id: 10,
      colors_id: 1
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('colors_has_products', null, {});
  }
};
