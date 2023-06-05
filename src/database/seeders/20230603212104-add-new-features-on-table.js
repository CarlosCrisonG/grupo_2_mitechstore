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
    await queryInterface.bulkInsert('features', [
      {
        name: 'Memoria RAM: 16 GB',
        products_id: 11
      }, {
        name: 'Nombre del sistema operativo: Windows 11',
        products_id: 11
      }, {
        name: 'Resolución de la pantalla: Full HD de 1.920 x 1.080 píxeles',
        products_id: 11
      }, {
        name: 'Pantalla de 13,3 pulgadas con resolución de pantalla de 2560x1600 píxeles y relación de aspecto de 16:10.',
        products_id: 12
      }, {
        name: 'Procesador Intel Core i7-10510Y de 10.ª generación con Turbo Boost de hasta 4,5 GHz.',
        products_id: 12
      }, {
        name: '16 GB de RAM, SSD de 512 GB.',
        products_id: 12
      }, {
        name: 'Su resolución es 4K.',
        products_id: 13
      }, {
        name: 'Tecnología HDR para una calidad de imagen mejorada.',
        products_id: 13
      }, {
        name: 'Modo de sonido: Dolby Audio, DTS-HD, Standard.',
        products_id: 13
      }, {
        name: 'Resolución	4K Ultra HD',
        products_id: 14
      }, {
        name: 'Sonido que se puede sentir, para una experiencia envolvente',
        products_id: 14
      }, {
        name: 'La aprobación oficial de dos de las principales plataformas garantiza un contenido de alta calidad',
        products_id: 14
      }, {
        name: 'Rápido, ligero y compacto',
        products_id: 15
      }, {
        name: 'Reducción del ruido durante el secado del cabello',
        products_id: 15
      }, {
        name: 'Sin necesidad de configurar la temperatura para mayor comodidad',
        products_id: 15
      },], {});
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
