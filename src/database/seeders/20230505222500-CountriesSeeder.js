'use strict';

const { name } = require('ejs');

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
    await queryInterface.bulkInsert("countries", [
      { name: "Argentina" },
      { name: "Bolivia" },
      { name: "Brasil" },
      { name: "Chile" },
      { name: "Colombia" },
      { name: "Ecuador" },
      { name: "Paraguay" },
      { name: "Peru" },
      { name: "Uruguay" },
      { name: "Venezuela" }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("countries", null, {})
    await queryInterface.sequelize.query(
      'ALTER TABLE countries AUTO_INCREMENT = 1'
    );
  }
};