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
    await queryInterface.bulkInsert('images', [{
      name: 'xiaomi-reloj1-id1.jpg',
      products_id: 1
    }, {
      name: 'xiaomi-reloj2-id1.jpg',
      products_id: 1
    }, {
      name: 'xiaomi-reloj3-id1.jpg',
      products_id: 1
    }, {
      name: 'xiaomi-reloj4-id1.jpg',
      products_id: 1
    }, {
      name: 'xiaomi-reloj1-id2.png',
      products_id: 2
    }, {
      name: 'xiaomi-reloj-id2.png',
      products_id: 2
    }, {
      name: 'vacum1-id3.png',
      products_id: 3
    }, {
      name: 'vacum2-id3.png',
      products_id: 3
    }, {
      name: 'vacum3-id3.png',
      products_id: 3
    }
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
