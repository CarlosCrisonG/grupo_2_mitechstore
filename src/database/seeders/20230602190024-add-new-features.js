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
    await queryInterface.bulkInsert('features', [{
      name: 'Superficie táctil de control',
      products_id: 4
    }, {
      name: 'Control de reproducción multimedia',
      products_id: 4
    }, {
      name: 'Control de llamadas',
      products_id: 4
    }, {
      name: 'Modo de baja latencia para juegos',
      products_id: 4
    }, {
      name: 'Pantalla de 6.5 con resolución FHD+ junto a una tasa de refresco de 90Hz',
      products_id: 5
    },{
      name: 'Procesador MediaTek Helio G88',
      products_id: 5
    }, {
      name: 'Batería de 5000 mAh con carga rápida de 18W',
      products_id: 5
    },{
      name: 'Procesador Snapdragon de 6 nm',
      products_id: 6
    }, {
      name: 'Pantalla AMOLED con 90 Hercios',
      products_id: 6
    },{
      name: 'Carga rápida Pro de 33W',
      products_id: 6
    }, {
      name: 'Cámara cuádruple, principal de 50 MP',
      products_id: 6
    },{
      name: 'Doble altavoz para un sonido estéreo',
      products_id: 6
    }, {
      name: 'Gran núcleo Cortex-X2',
      products_id: 7
    },{
      name: 'carga turbo de 67 W con cable + inalámbrica de 50 W',
      products_id: 7
    }, {
      name: 'Xiaomi ProFocus',
      products_id: 7
    },{
      name: 'Funcionamiento ultra silencioso',
      products_id: 8
    }, {
      name: 'Deslizamiento y desplazamiento silenciosos con rueda de goma suave',
      products_id: 8
    },{
      name: 'Ligero y de tamaño compacto que es fácil de usar y llevar',
      products_id: 8
    }, {
      name: 'Disfruta de tus canciones favoritas con absoluta nitidez y todo lujo de detalle',
      products_id: 9
    },{
      name: 'Sonido graves profundos y definidos y unos agudos dulces y equilibrados.',
      products_id: 9
    }, {
      name: 'El soporte permite la carga inalámbrica con una potencia de hasta 20W',
      products_id: 10
    },{
      name: 'Es ajustable en ancho y se adapta a la mayoría de los teléfonos inteligentes',
      products_id: 10
    },{
      name: 'Navegación y carga al mismo tiempo',
      products_id: 10
    },], {});
  },

  async down (queryInterface, Sequelize) {
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
