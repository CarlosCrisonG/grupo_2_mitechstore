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
    await queryInterface.bulkInsert('categories', [{
      name: 'Computadoras',
    }, {
      name: 'Celulares'
    }, {
      name: 'Accesorios'
    }, {
      name: 'Electrodomesticos'
    }, {
      name: 'Cuidado personal'
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('categories', null, {});
    await queryInterface.sequelize.query(
      'ALTER TABLE categories AUTO_INCREMENT = 1'
    );
  }
};
