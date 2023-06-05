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

    await queryInterface.bulkInsert('images', [
      {
        name: 'Portatil Redmibook 14 Ii - 512 Gb Ssd, Intel Core I7(1).jpg',
        products_id: 11
      }, {
        name: 'Portatil Redmibook 14 Ii - 512 Gb Ssd, Intel Core I7(2).jpg',
        products_id: 11
      }, {
        name: 'Computación xiaomi Redmibook AIR 13 Core i7 décima 16GB 512GB-Gris(1).jpg',
        products_id: 12
      }, {
        name: 'Computación xiaomi Redmibook AIR 13 Core i7 décima 16GB 512GB-Gris(2).jpg',
        products_id: 12
      }, {
        name: 'Smart TV Xiaomi L43M6-6A LED Android 10 4K 43(1).jpg',
        products_id: 13
      }, {
        name: 'Smart TV Xiaomi L43M6-6A LED Android 10 4K 43(2).jpg',
        products_id: 13
      }, {
        name: 'HD Smart TV(1).jpeg',
        products_id: 14
      }, {
        name: 'HD Smart TV(2).jpeg',
        products_id: 14
      }, {
        name: 'Xiaomi Mi Ionic Hair Dryer H300(1).jpeg',
        products_id: 15
      }, {
        name: 'Xiaomi Mi Ionic Hair Dryer H300(2).jpeg',
        products_id: 15
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('images', null, {});
    await queryInterface.sequelize.query(
      'ALTER TABLE images AUTO_INCREMENT = 1'
    );
  }
};
