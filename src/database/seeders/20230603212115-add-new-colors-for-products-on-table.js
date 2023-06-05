'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('colors_has_products', [
      {
        products_id: 11,
        colors_id: 1
      }, {
        products_id: 11,
        colors_id: 2
      }, {
        products_id: 11,
        colors_id: 3
      }, {
        products_id: 12,
        colors_id: 1
      }, {
        products_id: 12,
        colors_id: 2
      }, {
        products_id: 12,
        colors_id: 3
      }, {
        products_id: 13,
        colors_id: 1
      }, {
        products_id: 14,
        colors_id: 1
      }, {
        products_id: 15,
        colors_id: 1
      }, {
        products_id: 15,
        colors_id: 2
      }, {
        products_id: 15,
        colors_id: 3
      }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('colors_has_products', null, {});
  }
};
