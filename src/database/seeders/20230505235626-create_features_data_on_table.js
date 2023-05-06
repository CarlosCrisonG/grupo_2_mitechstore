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
    await queryInterface.bulkInsert('features', [{
      name: 'Pantalla AMOLED HD de 1.43',
      products_id: 1
    }, {
      name: '117 Modos fitness',
      products_id: 1
    }, {
      name: 'Dual-band GPS',
      products_id: 1
    }, {
      name: 'Monitoreo All-day',
      products_id: 1
    }, {
      name: '12 días de duración de batería',
      products_id: 1
    }, {
      name: 'Una gran pantalla AMOLED de 1,43',
      products_id: 2
    }, {
      name: 'El cristal de zafiro* es extremadamente duro y resistente al desgaste',
      products_id: 2
    }, {
      name: 'El Xiaomi Watch S1 incluye dos correas: una de cuero de primera calidad y una de fluorocarbono resistente a la suciedad.',
      products_id: 2
    }, {
      name: 'Toda la unidad vibra para aumentar significativamente el poder de limpieza',
      products_id: 3
    }, {
      name: 'Cuenta con microfibras para garantizar una penetración uniforme del agua',
      products_id: 3
    }, {
      name: 'Las migas se aspiran en un instante',
      products_id: 3
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
    await queryInterface.bulkDelete('features', null, {});
    await queryInterface.sequelize.query(
      'ALTER TABLE features AUTO_INCREMENT = 1'
    );
  }
};
