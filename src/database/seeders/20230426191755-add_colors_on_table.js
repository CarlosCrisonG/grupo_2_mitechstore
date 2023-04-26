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
    await queryInterface.bulkInsert('colors', [{
      name: 'negro',
    }, {
      name: 'blanco'
    }, {
      name: 'gris'
    }, {
      name: 'rojo'
    }, {
      name: 'verde'
    }, {
      name: 'azul'
    }, {
      name: 'amarillo'
    }, {
      name: 'violeta'
    }, {
      name: 'rosado'
    }, {
      name: 'anaranjado'
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('colors', null, {});
  }
};
