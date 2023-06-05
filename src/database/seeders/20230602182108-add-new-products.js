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
   await queryInterface.bulkInsert('Products', [
      {
        name: 'Redmi Buds 3 Lite',
        description: 'Conexión Bluetooth 5.2. Resistencia al polvo y al agua IP54',
        price: 30,
        discount: 10,
        highlight: 1,
        model: 'Buds 30',
        year: 2022,
        size: '12cm',
        weight: "23g",
        inSale: 1,
        categories_id: 3
      },  {
        name: 'Redmi 10 - 2023',
        description: 'XIAOMI Redmi 10 2023 128GB. Cámara principal con alta resolución de 50MP',
        price: 180,
        discount: 20,
        highlight: 1,
        model: 'Redmi 10',
        year: 2023,
        size: '161.95mm x 75.53mm x 8.92mm',
        weight: "181g",
        inSale: 1,
        categories_id: 2
      }, {
        name: 'Redmi 10 - 2022',
        description: 'XIAOMI Redmi 10 2022 128GB. Cámara principal con alta resolución de 50MP',
        price: 180,
        discount: 20,
        highlight: 1,
        model: 'Redmi 10',
        year: 2023,
        size: '161.95mm x 75.53mm x 8.92mm',
        weight: "181g",
        inSale: 1,
        categories_id: 2
      },{
        name: 'Redmi Note 11',
        description: 'XIAOMI Redmi 11 2022 128GB. Cámara principal con alta resolución de 50MP',
        price: 180,
        discount: 20,
        highlight: 1,
        model: 'Redmi 10',
        year: 2023,
        size: '161.95mm x 75.53mm x 8.92mm',
        weight: "181g",
        inSale: 1,
        categories_id: 2
      }, {
        name: 'Redmi Note 11 (Snapdragon)',
        description: 'Celular Xiaomi Redmi Note 11 de 128GB y 4GB de RAM con camara cuadruple de 50MP',
        price: 201,
        discount: 0,
        highlight: 1,
        model: 'Note 11 (Snapdragon)',
        year: 2023,
        size: '159.87 mm x 73.87 mm x 8.09 mm',
        weight: "179g",
        inSale: 0,
        categories_id: 2
      }, {
        name: 'Xiaomi 12',
        description: 'Celular xiaomi 12 con 256GB/ Azul / 8GB RAM',
        price: 756,
        discount: 0,
        highlight: 1,
        model: 'Note 11 (Snapdragon)',
        year: 2022,
        size: '152.7 mm x 69.9 mm x 8.16 mm',
        weight: "180g",
        inSale: 0,
        categories_id: 2
      }, {
        name: 'Mouse Inalámbrico',
        description: 'Este mouse wireless se adaptará a cualquier situación. Su practico tamaño ayudará a llevarlo de viaje, también incorpora un modo dual, para que puedas usarlo en dos computadoras a la vez.',
        price: 17.5,
        discount: 0,
        highlight: 1,
        model: 'Xiaomi Mi Dual Mode Silent Edition Wireless Mouse',
        year: 2018,
        size: '98.1 mm x 56 mm x 34.4 mm',
        weight: "93g",
        inSale: 0,
        categories_id: 3
      }], {});
  }, 
  

  async down (queryInterface, Sequelize) {
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
