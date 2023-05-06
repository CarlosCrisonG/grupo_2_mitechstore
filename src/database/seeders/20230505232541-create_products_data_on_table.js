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
    await queryInterface.bulkInsert('products', [{
      name: 'Xiaomi Watch S1 Active',
      description: "Pantalla HD de 1.43 pulgadas con mas de 200 pantallas de reloj. Diseño personalizable",
      price: 151,
      discount: 10,
      highlight: 1,
      model: 'active',
      year: 2020,
      size: '46.5 x 47.3 x 11 mm',
      weight: "36.3 g",
      inSale: 1,
      categories_id: 3
    }, {
      name: 'Xiaomi Watch S1',
      description: "Pantalla HD de 1.43 pulgadas. Cristal de zafiro. Caja de acero inoxidable. Correa de cuero",
      price: 205,
      discount: 10,
      highlight: 1,
      model: 'active',
      year: 2019,
      size: '46.5 x 47.3 x 11 mm',
      weight: "36.3 g",
      inSale: 1,
      categories_id: 3
    }, {
      name: 'Vacuum-Mop 2 Pro',
      description: "Con trapeado de vibración sónica de alta frecuencia.",
      price: 510,
      discount: 50,
      highlight: 0,
      model: 'active',
      year: 2019,
      size: '13.9 x 13.78 x 3.21 inches',
      weight: "36.3 g",
      inSale: 1,
      categories_id: 3
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {});
    await queryInterface.sequelize.query(
      'ALTER TABLE products AUTO_INCREMENT = 1'
    );
  }
};
