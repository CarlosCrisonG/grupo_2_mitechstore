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
    await queryInterface.bulkInsert('images', [{
      name: 'redmi-audifono1.png',
      products_id: 4
    }, {
      name: 'redmi-audifono2.png',
      products_id: 4
    }, {
      name: 'redmi-audifono3.png',
      products_id: 4
    }, {
      name: 'redmi-10-2022-carbon-gray-4gb-ram-128gb-rom (3).jpg',
      products_id: 5
    }, {
      name: 'redmi-10-2022-carbon-gray-4gb-ram-128gb-rom (1).jpg',
      products_id: 5
    }, {
      name: 'redmi-10-2022-carbon-gray-4gb-ram-128gb-rom (2).jpg',
      products_id: 5
    }, {
      name: 'redmi-10-2022-carbon-gray-4gb-ram-128gb-rom (4).jpg',
      products_id: 5
    }, {
      name: 'redmi-10-2022-carbon-gray-4gb-ram-128gb-rom (5).jpg',
      products_id: 5
    }, {
      name: 'xiaomi1-note11-id6.png',
      products_id: 6
    }, {
      name: 'xiaomi2-note11-id6.png',
      products_id: 6
    }, {
      name: 'xiaomi3-note11-id6.png',
      products_id: 6
    }, {
      name: 'xiaomi-12-1.png',
      products_id: 7
    }, {
      name: 'xiaomi-12-2.png',
      products_id: 7
    }, {
      name: 'xiaomi-mouse.jpg',
      products_id: 8
    }, {
      name: 'auriculares-id9.jpg',
      products_id: 9
    }, {
      name: 'cargador-inalambrico-de-auto-xiaomi-20w-1.jpg',
      products_id: 10
    }, {
      name: 'cargador-inalambrico-de-auto-xiaomi-20w-2.jpg',
      products_id: 10
    }, {
      name: 'cargador-inalambrico-de-auto-xiaomi-20w-3.jpg',
      products_id: 10
    }, {
      name: 'cargador-inalambrico-de-auto-xiaomi-20w-4.jpg',
      products_id: 10
    }, 
  ], {});
  },

  async down (queryInterface, Sequelize) {
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
