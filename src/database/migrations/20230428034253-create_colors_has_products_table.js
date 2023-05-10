'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.createTable('colors_has_products', {
      colors_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'colors',
          key: 'id'
        }
      },
      products_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('colors_has_products');
    */
    await queryInterface.dropTable('colors_has_products');
  }
};
