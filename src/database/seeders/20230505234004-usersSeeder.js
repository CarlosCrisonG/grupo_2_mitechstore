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

    await queryInterface.bulkInsert('users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@gmail.com',
        password: '$2a$10$aMYLt2jnLEEQqP6kc2DOAOWAOSqv.l50TrDXVMUpIslN37rvmAw8G',
        phone: '149598249',
        avatar: "defaultUser.jpg",
        region: "Antioquia",
        city: "Medellín",
        zip: "2700",
        address: "calle falsa 123",
        userprofile_id: 1,
        country_id: 5
      },
      {
        first_name: 'Jorge',
        last_name: 'Rodríguez',
        email: 'jorgito@gmail.com',
        password: '$2a$10$RYPAxH7L9lp7jm9FxMyOY.T05J9Fo2tbx3U/gvv.O7fctgJWRlVgO',
        phone: '176815218',
        avatar: "defaultUser.jpg",
        region: "Rio Negro",
        city: "Cipolletti",
        zip: "8326",
        address: "calle falsa 678",
        userprofile_id: 2,
        country_id: 1
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
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.sequelize.query(
      'ALTER TABLE users AUTO_INCREMENT = 1'
    );
  }
};